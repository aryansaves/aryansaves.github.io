# Implementation — One-Page Notebook Scrapbook Résumé

## Site shape

Next.js App Router, React, TypeScript, CSS Modules, and `output: 'export'` produce a static GitHub Pages site. `/` contains the portfolio; the only additional HTML route is the utility 404. The initial launch omitted a résumé; the user supplied and approved the current PDF download on October 10, 2026. `public/resume.pdf` is copied unchanged to `out/resume.pdf` during the static build. The bottom-left native anchor uses `download` to suggest the filename `Aryan-Kumar-Srivastava-Resume.pdf`. The deployed host serves this file directly, with no API, function, or database. No backend, route navigation, or animation package is needed.

## Current composition

The notebook, up to 820px wide, has ruled photographic paper, punched holes, binding loops, two under-pages, the supplied square identity image in a plain CSS frame, and responsive content. There are no stickers, tape overlays, paper cutouts, or decorative 404 cat. The cat-with-ball animation is restored beside the notebook and hidden on narrow screens and for reduced motion. The page stack uses the left spine as the fold anchor. Projects are Eiga, Feedback, and clockwork, followed by Open Source Work. The phone layout uses a smaller square portrait beside the name and parallel Education/Details columns. Compact phones place projects beside the factual sections; short landscape screens place identity beside all sections. Paper height fills the viewport with outer margins and a 1025px cap. Neither the document nor notebook scrolls.

The display fonts are Super Adorable and Papernotes; Manrope handles factual copy. Independent name font swaps and project font swaps have restrained sound effects. The CSS role slideshow reserves its height and respects reduced motion.

`DeskBackground` is a server component containing only three decorative layers. Native CSS draws the cream grid, rust checker pattern, teal waves, and mustard stripes. No desk texture image, SVG scribble, draggable scraps, resize observers, pointer handlers, randomization, celebration portal, refresh action, or jackpot audio remains.

## Page-turn branch — October 8, 2026

`NotebookTurn` is a small client wrapper around the existing server-rendered article and decorations. It adds a decorative blank ruled leaf and paper reverse, keeping one instance of the portfolio HTML and its native links. The article still determines the notebook's responsive dimensions; the paper remains fixed within the viewport. Only the turn button captures pointer input; the decorative layers cannot intercept clicks. The stationary paper owns the desk shadow while geometric clipping and a translated/rotated reverse face draw the moving crease.

The pure fold geometry is downloaded from MIT-licensed Grabfold and retained in `src/lib/page-turn/geometry.ts`, with its license and source/archive provenance beside it. No package dependency, canvas snapshot, new route, or fixed page ratio is introduced. Frame updates use refs and `requestAnimationFrame`; React state changes at interaction boundaries. Inactive portfolio content is hidden from assistive technology and inert. The stable turn control retains keyboard focus; the existing skip link restores the portfolio before navigating to content. Reduced motion switches without folding. Resizing or changing motion preference cancels an incomplete gesture.

The notebook shares one explicit layer order across its CSS modules: flat leaves, fixed binding, turn control, cast shadow, and lifted reverse. Paper covers the holes/loops and control wherever the fold passes over them; the remaining spine stays visible. The cast shadow can shade exposed binding beneath the lifted page. Numbers are printed inside their respective flat leaf contexts, so the first number is clipped with the portfolio face and the second is revealed on the blank leaf. Neither number floats above the fold. The moving paper and shadow remain unable to intercept input, so the mounted control keeps pointer capture and keyboard focus even when visually occluded.

The reverse's clip overlaps the shared crease by 0.6 CSS pixels to cover independent clip-path antialiasing that could expose a hairline of front-face ink. This renderer adjustment uses the normalized crease normal and preserves the geometry's outer paper edges and transform; the upstream geometry remains unchanged.

The user requested Luna sub-agents for redundant research and source review. They reviewed library fit and pointer/focus lifecycle; those reviews are not runtime validation. The effect is under visual review. Lint, typecheck, production build, export verification, automated/browser test suites, commits, and publication are deferred pending visual approval, per the latest user request.

## Assets and repository hygiene

`public/` contains only active runtime assets: the identity image, notebook paper texture, two small cursor PNGs, the cat-with-ball SVG, two font-change sounds, and the Manrope and page-turn licenses. All Easter-egg, floating-scrap, and other sticker assets and their unused styles/references are removed. Redundant originals, source ZIPs, earlier unused exports, and the résumé draft were removed from the launch tree after their optimized runtime derivatives were verified; Git history remains the archive. `.codex/`, generated output, caches, and environment files remain ignored. Supplied source resources are assets, not instructions or generated site content.

## Verification

The user authorized validation and production publication on September 30. ESLint, typecheck, root production build, export verification, and whitespace checks passed. Browser review covered desktop, 390px, 320px, selected-title hover, new-tab link attributes, image loading, the custom 404, and console output. The root build uses `SITE_URL=https://aryansaves.me`. See VERIFICATION.md for evidence and limits.

The export verifier covers HTML/CSS references, remaining artwork/audio, restored playing-cat SVG safety, removed-resource absence, the custom 404, the approved résumé download and byte-for-byte PDF export, and the unchanged identity image. `npm run preview` serves `out/` with correct MIME types and real 404 responses.

## Publication handoff

The workflow in `.github/workflows/pages.yml` builds all branches/PRs and deploys only the default branch. Set GitHub Pages to GitHub Actions after connecting the intended repository. The workflow derives the base path and canonical URL; use `PAGES_CUSTOM_DOMAIN` only for a configured custom domain.

The static-background work originated on `codex/static-background` from main; the discarded `codex/minimal-design` branch was deleted. The user authorized merging into main and pushing through the existing GitHub Pages workflow. Existing font and asset provenance questions remain documented in [TYPOGRAPHY.md](TYPOGRAPHY.md) and [ASSETS.md](ASSETS.md).
