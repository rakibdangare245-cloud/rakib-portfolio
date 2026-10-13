# Ravex Technology Portfolio — Progress Log

Chronological log of completed work, current status, and known issues.

## Current Status

- **Current Phase:** Phase 3 — Repository foundations
- **Last Completed:** Phase 2 — Dependencies installed and verified
- **Next Action:** Complete Steps 3.3 and 3.4, then begin Phase 4.

## Completed

### 2026-10-13
- Inspected empty project folder at G:\projects\Rakib Portfolio.
- Scaffolded Vite + React 19 + TS 6 project in place.
- Installed runtime deps: gsap, motion, lucide-react, react-router-dom.
- Installed dev deps: vitest, @vitest/ui, jsdom, @testing-library/*, eslint-plugin-jsx-a11y.
- Added npm `overrides` block to resolve ESLint 10 vs eslint-plugin-jsx-a11y peer conflict.
- Verified all four runtime packages resolve via Test-Path.
- Initialized local Git repository.
- Created first commit: f8c8855 (Vite scaffold + dependencies).

## Known Issues

- **Do not run `npm audit fix --force` on this project.** It silently upgraded Vitest 3 -> 5 in a previous run. Any future vulnerability must be handled with a deliberate, reviewed change.
- `package.json` currently has `\u0026` instead of `&&` in the build script due to a PowerShell ConvertTo-Json round-trip. Will be fixed in Step 3.4.
- Vite template produced unexpected files: `public/favicon.svg`, `public/icons.svg`, `src/assets/hero.png`. To be inspected in Step 4 before deletion.

### 2026-10-13 -- Phase 6 complete

- Created src/types/portfolio.ts with shared asset, skill, project types.
- Created src/data/imageManifest.ts with all 20 asset IDs from the master prompt.
  Every entry starts as status: "pending". Update to "present" as files are added.
- Created src/hooks/useImagePreload.ts (preloads critical/high priority only).
- Created src/components/media/AssetImage.tsx with designed placeholder fallback.
- Created src/components/media/CinematicVideo.tsx for future Google Flow clips.
- Wired AssetImage into OpeningScene as the first integration test.
- Added .hero-grid and .hero-portrait CSS rules to src/styles/layout.css.

### 2026-10-13 -- Phase 7 complete

- Extended src/lib/gsap.ts with BREAKPOINTS and gsapMatchMedia helper.
- Created src/lib/latestRef.ts (React 19-safe ref sync, no write during render).
- Created src/hooks/useMediaQuery.ts.
- Created src/hooks/useGSAPContext.ts (wraps gsap.context with cleanup).
- Created src/hooks/useScrollProgress.ts.
- Created src/components/motion/Reveal.tsx.
- Created src/components/motion/Stagger.tsx with StaggerItem.
- Created src/components/motion/RevealText.tsx as a Phase 8 placeholder.

### 2026-10-13 -- Phase 8 complete

- Created src/components/ui/SkipButton.tsx (accessible skip control).
- Created src/components/motion/IntroSequence.tsx (GSAP overlay, ~1.6s runtime).
- Rewrote src/sections/OpeningScene.tsx to gate the intro at the parent level.
- Session storage key "ravex:intro-played" prevents replay within a session.
- Reduced-motion users skip the intro entirely.
- Hero content fades up via GSAP once the intro completes or is skipped.

### 2026-10-13 -- Phase 10 complete

- Installed three, @react-three/fiber, @react-three/drei, lenis, @types/three.
- Created src/hooks/useLenisSmoothScroll.ts (Lenis + GSAP ticker + ScrollTrigger sync).
- Mounted Lenis in AppShell via the hook.
- Disabled CSS scroll-behavior: smooth; Lenis owns scrolling now.
- Reduced-motion users get native scroll, no Lenis instance.
- Bundle grew to 538 kB / 178 kB gzip. Will code-split in Phase 11.