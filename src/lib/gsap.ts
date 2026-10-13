/**
 * Central GSAP bootstrap and shared helpers.
 *
 * Importing this module registers every GSAP plugin the project uses,
 * exactly once, regardless of how many components import it.
 *
 * ES modules are evaluated exactly once per unique specifier, so a manual
 * "already registered" flag is unnecessary. Register at module scope.
 *
 * Do NOT import from "gsap" directly inside components. Always:
 *   import { gsap, ScrollTrigger, gsapMatchMedia } from "@/lib/gsap";
 *
 * The "@/..." path alias is configured in tsconfig.app.json and vite.config.ts.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Responsive breakpoints used across the site.
 * Keep these in sync with the CSS media queries in src/styles/.
 */
export const BREAKPOINTS = {
  mobile: "(max-width: 599px)",
  tablet: "(min-width: 600px) and (max-width: 899px)",
  desktop: "(min-width: 900px)",
  wide: "(min-width: 1280px)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
} as const;

/**
 * Convenience wrapper around gsap.matchMedia.
 *
 * Example:
 *   const mm = gsapMatchMedia();
 *   mm.add(BREAKPOINTS.desktop, () => {
 *     // desktop-only timeline; auto-reverted when leaving this breakpoint
 *     return () => {
 *       // optional cleanup
 *     };
 *   });
 *   // on unmount: mm.revert();
 */
export function gsapMatchMedia(): gsap.MatchMedia {
  return gsap.matchMedia();
}

export { gsap, ScrollTrigger };