/**
 * Central GSAP bootstrap.
 *
 * Importing this module registers every GSAP plugin the project uses,
 * exactly once, regardless of how many components import it.
 *
 * Do NOT import from "gsap" directly inside components. Always:
 *   import { gsap, ScrollTrigger } from "@/lib/gsap";
 *
 * The `@/` path alias is configured in tsconfig.app.json and vite.config.ts.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

if (!registered) {
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };