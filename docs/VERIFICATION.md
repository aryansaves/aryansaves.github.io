# Approved résumé download — 2026-10-10

- User supplied and approved `document.pdf` as the résumé download. It is copied unchanged to `public/resume.pdf`; no commit, push, or deployment performed.
- Added a native Resume download anchor in the bottom-left paper margin, using the existing button treatment and cat cursor. The export verifier now requires the link and checks the exported PDF against the approved public asset.
- Lint, typecheck, production build, export verification, and whitespace checks passed. Input, public copy, export, and browser-downloaded file matched byte for byte.
- Native browser download completed with the suggested filename `Aryan-Kumar-Srivastava-Resume.pdf`. Footer bounds checked at 1440×900, 390×844, 320×568, and 568×320; no overlap with sections or page-turn control and no paper overflow.

# Introduction spacing and cursor fixes — 2026-10-10

- Local only: no commit, push, or deployment.
- Two user-requested Luna subagents reviewed cursor/page-turn interactions and responsive layout. Their source findings were the page-turn cursor override and omitted 481–600px short-landscape layout. Both were corrected and checked in the browser.
- Replaced distributed vertical whitespace with explicit gaps; the intro-to-sections gap measures 22px at 1440×900 and 16px at 1366×768. Roomy desktop layouts use larger introduction and factual text.
- Browser checks at 1440×900, 1366×768, 568×320, 600×400, 320×568, and 390×844 found paper scroll height equal to its visible height, with sections inside the page. Short landscape and desktop layouts reviewed visually.
- Browser computed style confirms the turn button uses the cat PNG cursor both at rest and during an animated turn. Fine-pointer media rules include hybrid input devices; touch retains native cursor behavior. Default/pressed artwork remains 26×26.
- Keyboard turn and return reached both leaf states. Lint, typecheck, production build, static export verification, and whitespace checks passed.

# Fixed notebook composition — 2026-10-10

- Supersedes the scrolling layout below. Local changes only; no commit, push, or deployment.
- The notebook fills the available viewport height with a cap and visible desk margins. No outer or internal scrolling is enabled.
- Lint, typecheck, production build, export verification, and whitespace checks passed.
- Final browser measurements at 1440×900, 1366×768, 600×800, 390×844, 320×568, and 667×375 found document dimensions equal to the viewport and paper scroll height equal to its visible height. Every section ends above the paper footer. Earlier checks also covered 768×1024, 375×667, and 844×390.
- Visually reviewed compact phone and landscape arrangements. Existing page-turn implementation and content are preserved.

# Taller notebook layout — 2026-10-10

- Local layout update only; no commit, push, or deployment.
- The paper now uses a 4:5 minimum portrait proportion at up to 820px, with larger factual text and natural document scrolling. The static CSS desk stays fixed behind it.
- Lint, typecheck, production build (`SITE_URL=https://aryansaves.me`), and export verification passed, including the existing local page-turn work.
- Browser review covered 1440×900, 390×844, 320×568, and 844×390. Document and paper had no horizontal overflow or internal vertical scrolling; desktop image resources loaded. Phone education and details stack for readability.
- Keyboard activation reached the blank ruled leaf and exposed the return control. This check does not replace the existing page-turn visual review.

# Page-turn branch — 2026-10-08: validation deferred

The page-turn effect on `codex/page-turn-animation` is under visual refinement. The user requested no tests or commits until the effect is perfected. Local preview was used for visual drafting and source review; no lint, typecheck, production build, export verification, or test suite has been run for the page-turn changes. No commit, push, merge, or deployment has been made. The record below applies to the preceding viewport-sizing implementation.

The subsequent overlap review used two Luna sub-agents for independent source inspection and the local preview for forward/return folds. The lifted paper now covers fixed binding where their shapes overlap; exposed hardware remains visible. Page numbers are inside their own clipped leaf contexts, the control remains below the moving paper without losing its input layer, and a 0.6px crease overlap covers antialiasing gaps. These are visual refinement observations, not formal validation. Tests and commits remain deferred.

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
