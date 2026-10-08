# Viewport sizing verification — 2026-10-08

- Lint, typecheck, production build (`SITE_URL=https://aryansaves.me`), export verification, and whitespace checks passed.
- Browser measured no document overflow at 1440×900, 1366×768, 768×1024, 390×844, 320×568, and 844×390; identity and other image resources loaded.
- The notebook fits without internal scrolling at the tested desktop, tablet, 390px phone, and final 844×390 landscape dimensions. At 320×568 it scrolls internally to preserve readable content. Extremely small viewports and enlarged text use this same fallback.
- Final landscape layout reviewed visually; browser console returned no warnings/errors. No deployment or push performed for this update.

# Static background release verification — 2026-09-30

- User authorized build, commit, merge, and production push.
- ESLint, TypeScript, root production build, export verifier, and whitespace checks passed.
- Build used `SITE_URL=https://aryansaves.me` and an empty base path. Next.js compiled in the sandbox but its TypeScript subprocess output required the authorized external execution path; that build passed.
- Export checks cover local URLs, fonts/CSS, unchanged identity artwork, restored playing-cat SVG safety, retained font sounds, absence of removed Easter-egg/sticker assets, and absence of a résumé export.
- Production preview reviewed at 1440px, 390px, and 320px: no horizontal overflow, visible image resources loaded, title and portrait separated on narrow phones, playing cat hidden on phone widths, and no console warnings/errors.
- Selected-title hover checked in the browser: selected text stays readable in Papernotes, with no duplicated pseudo-element overlay.
- Project, profile, contribution, and contact links carry `_blank` and `noopener noreferrer`; the skip link retains same-page behavior. The custom 404 renders and links back to the homepage in a new tab.
- Audibility was not measured. Sounds are preloaded and attempted on first hover/focus/press; browser autoplay policy can still require user interaction.
- The optional `/portfolio` build was not run because its execution request was declined. Production uses the verified root path.

# Release verification — 2026-09-27

Historical record for the earlier design; current validation is recorded above.

Verified locally with Node.js 26.8.1; GitHub Actions uses the repository's Node.js 24 configuration.

- ESLint, TypeScript, and `git diff --check`: passed.
- Production static build and export verification: passed for both `/` and `/portfolio`.
- Production dependency audit: zero reported vulnerabilities (`npm audit --omit=dev --audit-level=high`).
- Secret-pattern scan: no API keys, private keys, credentials, or password assignments found in the tracked launch tree.
- SVG safety: every published SVG is checked for scripts, foreign objects, event handlers, and external or JavaScript references; reduced-motion variants contain no animation elements.
- Résumé removal: the header link, metadata reference, source PDF, archival draft, and exported endpoint are absent. The export verifier fails if `resume.pdf` returns.
- Browser review: desktop and 390px layouts render without broken images, horizontal overflow, résumé links, console errors, or warnings. Contact, social profiles, all three projects, and Open Source Work remain visible.
- Repository cleanup: removed redundant raw media, duplicated audio and SVG sources, unused font exports, source ZIPs, and prior archive files. Active optimized assets remain in `public/`; removed tracked files are recoverable from Git history.

The sandbox could not capture Next.js's TypeScript subprocess output, so the production builds ran through the authorized external command path and passed without an application workaround. No remote is configured, no push or deployment was performed, and GitHub-hosted CI has not yet run.

Before a public launch, confirm redistribution and commercial-use rights for the local fonts and supplied artwork described in [TYPOGRAPHY.md](TYPOGRAPHY.md) and [ASSETS.md](ASSETS.md).
