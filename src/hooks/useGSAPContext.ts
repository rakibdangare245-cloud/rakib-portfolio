import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLatestRef } from "@/lib/latestRef";

/**
 * Runs a GSAP setup function scoped to a component root, with automatic
 * cleanup on unmount and on reduced-motion changes.
 *
 * The setup callback receives the GSAP context so it can register
 * additional cleanup if needed. It should return nothing; gsap.context
 * reverts everything it created when the effect cleans up.
 *
 * Usage:
 *   const root = useRef<HTMLDivElement>(null);
 *   useGSAPContext(root, () => {
 *     gsap.from(".hero-title", { opacity: 0, y: 24 });
 *   });
 *
 * Do NOT call gsap.context() yourself. This hook owns that.
 *
 * The setup callback is stored via useLatestRef so the effect does not
 * re-run when the caller passes a new inline function on each render.
 */
export function useGSAPContext<T extends HTMLElement>(
  rootRef: RefObject<T | null>,
  setup: (context: gsap.Context) => void,
): void {
  const prefersReducedMotion = useReducedMotion();
  const setupRef = useLatestRef(setup);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context((context) => {
      setupRef.current(context);
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef, setupRef, prefersReducedMotion]);
}