# Release verification — 2026-09-26

Verified locally with Node.js 26.8.1; GitHub Actions uses the repository's Node.js 24 configuration.

- ESLint and TypeScript: passed.
- Production static build and export verification: passed for both `/` and `/portfolio`.
- Production dependency audit: zero reported vulnerabilities (`npm audit --omit=dev`).
- Static HTTP responses: PDF, jackpot MP3, and rainbow-cat SVG returned 200 with correct MIME types; a missing path returned the custom HTML with status 404.
- Browser review: desktop plus 390px and 320px widths. Fixed the narrow name/portrait overlap and the clipped header link; final 320px header links fit without horizontal overflow.
- Production Easter egg: all four dragged scraps triggered the overlay; all 48 rainbow-cat images and the central cat loaded. Only “ALL SCRAPS LOST!” appears as visible text. Focus stays on the cat, and activating it reloads the page. No automatic refresh occurs.
- Reduced-motion SVGs: export assertions confirm that still variants contain no animation elements. CSS and picture-source handling were reviewed; OS-level reduced-motion emulation was not run.
- Browser error log: no errors during the successful production-page checks. Temporary local-server connection errors were resolved by restarting the preview.

The sandbox prevented Next.js from capturing its TypeScript subprocess output; the authorized build outside the sandbox passed with no application workaround. Local preview also required permission to bind a port.

No remote is configured, no push or deployment was performed, and GitHub-hosted CI has not yet run. Remaining publication setup: connect the intended repository, enable Pages via GitHub Actions, and resolve the pre-existing font/art provenance notes in TYPOGRAPHY.md and ASSETS.md.
