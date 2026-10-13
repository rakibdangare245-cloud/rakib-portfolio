import { useCallback, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAPContext } from "@/hooks/useGSAPContext";
import SkipButton from "@/components/ui/SkipButton";

interface IntroSequenceProps {
  /** Called when the intro finishes (naturally or by skip). */
  onComplete: () => void;
}

/**
 * Cinematic intro overlay.
 *
 * The parent decides whether this component mounts at all:
 * - Parent checks reduced motion and sessionStorage.
 * - If the intro should play, parent mounts this component.
 * - On completion (natural or skip), onComplete is called exactly once.
 *
 * This component does not read sessionStorage or reduced motion itself,
 * which keeps it presentational and avoids synchronizing state in effects.
 *
 * Total runtime is approximately 1.6 seconds.
 */
export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  }, [onComplete]);

  useGSAPContext(rootRef, () => {
    const tl = gsap.timeline({
      onComplete: finish,
    });
    timelineRef.current = tl;

    tl.fromTo(
      ".intro-panel",
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" },
    )
      .fromTo(
        ".intro-wordmark",
        { opacity: 0, y: 8, letterSpacing: "0.4em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.24em",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.15",
      )
      .fromTo(
        ".intro-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.45, ease: "power2.inOut" },
        "-=0.2",
      )
      .to({}, { duration: 0.15 })
      .to(".intro-panel", {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
        onComplete: finish,
      });

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  });

  const handleSkip = useCallback(() => {
    const tl = timelineRef.current;
    if (tl) {
      tl.kill();
      timelineRef.current = null;
    }
    finish();
  }, [finish]);

  return (
    <div
      ref={rootRef}
      className="intro-overlay"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--z-overlay)",
        pointerEvents: "auto",
      }}
    >
      <div
        className="intro-panel"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--color-bg-0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-4)",
        }}
      >
        <span
          className="intro-wordmark"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "0.24em",
          }}
        >
          RAVEX
        </span>
        <span
          className="intro-line"
          style={{
            display: "block",
            width: "clamp(6rem, 20vw, 14rem)",
            height: "1px",
            background: "var(--color-accent)",
            transformOrigin: "left center",
          }}
        />
      </div>

      <SkipButton onClick={handleSkip} />
    </div>
  );
}