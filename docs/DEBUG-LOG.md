# Ravex Technology Portfolio — Debug Log

Record every real bug, its root cause, the fix, and the verification command.

## Rules

- Never claim a fix worked until it has been verified by a terminal command or browser test.
- Do not suppress TypeScript errors, delete ESLint rules, or use any to hide issues.
- Do not run `npm audit fix --force` on this project.

## Entries

### 2026-10-13 — lucide-react@^0.5 not found

- Symptom: npm install lucide-react@^0.5 failed with ETARGET.
- Root cause: ^0.5 means >=0.5.0 <0.6.0, which is not a published range.
- Fix: Installed lucide-react@^0.575 instead.
- Verification: npm ls --depth=0 shows lucide-react@0.575.0.

### 2026-10-13 — eslint-plugin-jsx-a11y peer conflict with ESLint 10

- Symptom: ERESOLVE conflict; jsx-a11y 6.10.2 declares peer eslint ^3..^9.
- Root cause: Upstream plugin has not widened its peer range for ESLint 10 yet.
- Fix: Added npm overrides entry pinning jsx-a11y eslint peer to $eslint. Confirmed with eslint-plugin-jsx-a11y@6.10.2 overridden in npm ls.
- Verification: npm ls --depth=0 completes without peer warnings.

### 2026-10-13 — Accidental npm audit fix --force upgraded Vitest 3 -> 5

- Symptom: Warning line in npm output: "Updating vitest to 5.0.4, which is a SemVer major change."
- Root cause: User ran npm audit fix --force without an explicit plan. Force flag disabled safety checks.
- Impact: Vitest and @vitest/ui moved from v3 to v5 with no test files present. No breakage observed.
- Decision: Accept v5 for now, since there are no tests yet and v5 is stable with Vite 8. Re-evaluate if issues arise.
- Prevention: Do not run any npm audit fix --force on this project. Handle vulnerabilities individually.
