/**
 * Central GSAP bootstrap.
 *
 * Importing this module registers every GSAP plugin the project uses,
 * exactly once, regardless of how many components import it.
 *
 * ES modules are evaluated exactly once per unique specifier, so a manual
 * "already registered" flag is unnecessary. Register at module scope.
 *
 * Do NOT import from "gsap" directly inside components. Always:
 *   import { gsap, ScrollTrigger } from "@/lib/gsap";
 *
 * The `@/` path alias is configured in tsconfig.app.json and vite.config.ts.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };