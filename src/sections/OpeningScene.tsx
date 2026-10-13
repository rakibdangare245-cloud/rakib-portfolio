import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AssetImage from "@/components/media/AssetImage";
import IntroSequence from "@/components/motion/IntroSequence";
import { useGSAPContext } from "@/hooks/useGSAPContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";

const SESSION_KEY = "ravex:intro-played";

/**
 * Section 1 -- Cinematic Opening.
 *
 * - Runs a short GSAP intro overlay on first visit per session.
 * - Skips the intro entirely for reduced-motion users or repeat visits.
 * - Reveals the hero content with a subtle GSAP fade-up afterwards.
 * - Never blocks the page behind a long loading screen.
 */
export default function OpeningScene() {
  const prefersReducedMotion = useReducedMotion();

  const [introDone, setIntroDone] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    if (prefersReducedMotion) return true;
    try {
      return window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });

  const introShouldPlay = !introDone;

  const handleIntroComplete = useCallback(() => {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage may be unavailable; ignore. */
    }
    setIntroDone(true);
  }, []);

  const rootRef = useRef<HTMLElement | null>(null);

  // Fade the hero content up once the intro is done.
  useGSAPContext(rootRef, () => {
    if (!introDone) return;

    const targets = rootRef.current?.querySelectorAll(
      ".hero-copy, .hero-portrait",
    );
    if (!targets || targets.length === 0) return;

    gsap.fromTo(
      targets,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
      },
    );
  });

  return (
    <section
      id="opening"
      className="section section--opening"
      ref={rootRef}
    >
      {introShouldPlay && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="text-eyebrow">Ravex Technology</p>

          <h1 style={{ marginTop: "var(--space-4)" }}>
            Full-stack engineering,
            <br />
            networking, security,
            <br />
            and cloud infrastructure.
          </h1>

          <p
            className="text-lead"
            style={{ marginTop: "var(--space-5)", maxWidth: "38rem" }}
          >
            I build reliable, secure software and the infrastructure it runs
            on. This portfolio collects the projects, systems, and experiments
            that define my work.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              marginTop: "var(--space-6)",
            }}
          >
            <Link
              to="/#projects"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                background: "var(--color-accent)",
                color: "var(--color-text-inverse)",
                borderRadius: "var(--radius-sm)",
                fontWeight: 600,
              }}
            >
              View projects
            </Link>
            <Link
              to="/#contact"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-text-primary)",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <AssetImage id="01-hero-portrait" />
        </div>
      </div>
    </section>
  );
}