# Ravex Technology Portfolio — Animation Map

Documents every GSAP timeline, ScrollTrigger, and Motion component.

## Rules

- All GSAP code must run inside `gsap.context()` scoped to a component root.
- Every ScrollTrigger must be created inside a context and cleaned up on unmount.
- Reduced-motion users must receive a static, readable alternative.
- Never use two animation libraries on the same CSS property of the same element.

## Registry (to be filled as sections are built)

| Section | Library | Trigger | Reduced-motion behavior | Status |
|---------|---------|---------|-------------------------|--------|
| OpeningScene | GSAP | ScrollTrigger | Instant reveal, no parallax | Planned |
| DeveloperReveal | GSAP | ScrollTrigger | Instant reveal | Planned |
| DreamGarage | GSAP | Pinned ScrollTrigger (desktop only) | Static vertical stack | Planned |
| SkillsCommandCenter | Motion | In-view | Instant reveal | Planned |
| NetworkEngineering | GSAP + SVG | In-view | Static diagram | Planned |
| Cybersecurity | GSAP | In-view | Static list | Planned |
| CloudDevOps | Motion | In-view | Instant reveal | Planned |
| ProjectsShowcase | Motion | Hover/focus | No hover effects | Planned |
| AboutExperience | Motion | In-view | Instant reveal | Planned |
| ContactFinale | Motion | In-view | Instant reveal | Planned |

## Global Motion Components

- Navigation — Motion for mobile menu open/close.
- RouteTransition — Motion fade between pages.

## Implemented Sequences (Phase 8)

### OpeningScene -- Intro overlay

- Library: GSAP (via useGSAPContext).
- Trigger: mount, gated by sessionStorage and reduced-motion.
- Targets: .intro-panel, .intro-wordmark, .intro-line.
- Runtime: approximately 1.6 seconds.
- Skip control: SkipButton, cancels the timeline and snaps to final state.
- Reduced-motion behavior: intro does not mount at all.

### OpeningScene -- Hero reveal

- Library: GSAP (via useGSAPContext).
- Trigger: introDone state change.
- Targets: .hero-copy, .hero-portrait.
- Runtime: 0.7s with 0.08s stagger.
- Reduced-motion behavior: same reveal, but reduced-motion CSS already
  zeroes transition durations; the fade is a direct set.