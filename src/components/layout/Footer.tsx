/**
 * Global footer. Real content arrives in Phase 10 (Finale).
 * Phase 5: structural placeholder.
 */
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border-subtle)",
        paddingBlock: "var(--space-6)",
        marginTop: "var(--space-9)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          fontSize: "var(--fs-sm)",
          color: "var(--color-text-tertiary)",
        }}
      >
        <span>© {new Date().getFullYear()} Ravex Technology</span>
        <span>Built with React, TypeScript, and GSAP.</span>
      </div>
    </footer>
  );
}