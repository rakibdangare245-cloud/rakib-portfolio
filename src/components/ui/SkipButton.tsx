interface SkipButtonProps {
  onClick: () => void;
  /** Optional label. Default: "Skip intro". */
  label?: string;
  /** Optional extra classes. */
  className?: string;
}

/**
 * A small, accessible skip button.
 *
 * The parent is responsible for mounting and unmounting this button;
 * the component itself is always visible while mounted.
 */
export default function SkipButton({
  onClick,
  label = "Skip intro",
  className,
}: SkipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{
        position: "absolute",
        top: "var(--space-5)",
        right: "var(--space-5)",
        padding: "0.5rem 1rem",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-xs)",
        letterSpacing: "var(--tracking-wider)",
        textTransform: "uppercase",
        color: "var(--color-text-secondary)",
        background: "transparent",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}