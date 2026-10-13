import { Link } from "react-router-dom";

/**
 * Section 1 — Cinematic Opening.
 *
 * Phase 5: semantic structure and CTAs only. The GSAP intro sequence,
 * portrait reveal, and video layer arrive in Phase 8.
 */
export default function OpeningScene() {
  return (
    <section id="opening" className="section section--opening">
      <div className="container">
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
          style={{ marginTop: "var(--space-5)", maxWidth: "42rem" }}
        >
          I build reliable, secure software and the infrastructure it runs on.
          This portfolio collects the projects, systems, and experiments that
          define my work.
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
    </section>
  );
}