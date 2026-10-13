import { useRef } from "react";
import AssetImage from "@/components/media/AssetImage";
import Reveal from "@/components/motion/Reveal";
import { useGSAPContext } from "@/hooks/useGSAPContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Section 2 -- Developer Reveal.
 *
 * A layered composition showing the workstation, a full-body portrait,
 * and typing-hands detail. GSAP provides gentle parallax on the large
 * images; Motion reveals the text block.
 *
 * No pinned scroll sequence. No scroll hijack. Reduced-motion disables
 * the parallax entirely and the images remain static.
 */
export default function DeveloperReveal() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(rootRef, () => {
    if (prefersReducedMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const parallaxTargets = root.querySelectorAll<HTMLElement>(
      ".reveal-parallax",
    );

    parallaxTargets.forEach((el) => {
      const speed = Number(el.dataset.parallaxSpeed ?? "0.15");
      const distance = -window.innerHeight * speed;

      gsap.fromTo(
        el,
        { y: -distance * 0.5 },
        {
          y: distance * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    ScrollTrigger.refresh();
  });

  return (
    <section
      id="developer"
      className="section"
      ref={rootRef}
      aria-labelledby="developer-heading"
    >
      <div className="container">
        <Reveal>
          <p className="text-eyebrow">Section 02</p>
          <h2 id="developer-heading" style={{ marginTop: "var(--space-3)" }}>
            Built at the desk, shipped in production.
          </h2>
          <p
            className="text-lead"
            style={{ marginTop: "var(--space-4)", maxWidth: "42rem" }}
          >
            The workspace is where architecture decisions, security reviews,
            and full-stack code come together. Every layer of this site
            reflects the same discipline that goes into the systems I build.
          </p>
        </Reveal>

        <div
          className="reveal-workstation reveal-parallax"
          data-parallax-speed="0.12"
          style={{ marginTop: "var(--space-7)" }}
        >
          <AssetImage id="02-developer-workstation" />
        </div>

        <Reveal delay={0.1}>
          <dl
            className="reveal-meta"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "var(--space-5)",
              marginTop: "var(--space-7)",
            }}
          >
            <MetaItem label="Focus" value="Full-stack, network, and cloud engineering" />
            <MetaItem label="Stack" value="React, TypeScript, Java, Python, Linux" />
            <MetaItem label="Approach" value="Secure by default. Documented by habit." />
          </dl>
        </Reveal>

        <div
          className="reveal-portraits"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-5)",
            marginTop: "var(--space-7)",
          }}
        >
          <div
            className="reveal-fullbody reveal-parallax"
            data-parallax-speed="0.08"
          >
            <AssetImage id="03-full-body-reveal" />
          </div>
          <div
            className="reveal-hands reveal-parallax"
            data-parallax-speed="0.14"
            style={{ marginTop: "var(--space-5)" }}
          >
            <AssetImage id="04-typing-hands" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fs-xs)",
          letterSpacing: "var(--tracking-wider)",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          margin: "var(--space-2) 0 0",
          color: "var(--color-text-secondary)",
          fontSize: "var(--fs-sm)",
        }}
      >
        {value}
      </dd>
    </div>
  );
}