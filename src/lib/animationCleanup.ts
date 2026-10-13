/**
 * Helpers for cleaning up GSAP animations across React lifecycles.
 */
import type { gsap } from "./gsap";
import { ScrollTrigger } from "./gsap";

/**
 * Refresh all ScrollTriggers on the next animation frame.
 * Call this after images/videos finish loading or after a route change.
 */
export function refreshScrollTriggers(): void {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

/**
 * Kill every ScrollTrigger attached to a given root element.
 * Use this on unmount when you did NOT use gsap.context().
 */
export function killScrollTriggersIn(root: HTMLElement | null): void {
  if (!root) return;
  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerEl = trigger.trigger as HTMLElement | null;
    if (triggerEl && root.contains(triggerEl)) {
      trigger.kill();
    }
  });
}

/**
 * Kill a single GSAP timeline and its ScrollTrigger.
 */
export function killTimeline(tl: gsap.core.Timeline | null | undefined): void {
  if (!tl) return;
  tl.scrollTrigger?.kill();
  tl.kill();
}