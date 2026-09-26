# Release verification — 2026-09-27

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
