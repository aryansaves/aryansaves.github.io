# Redesign Handoff — One-Page Pastel Scrapbook Résumé

## Status and Intent

The redesign is implemented as one static résumé sheet. This document records the workstream boundaries, integration decisions, and remaining publication tasks. The former multipage monochrome layout is removed; the direct resume PDF remains.

The confirmed direction is a centered, compact decorated resume sheet in the pastel scrapbook palette. Use [DESIGN.md](DESIGN.md) as the art-direction reference and [CONTENT.md](CONTENT.md) for facts.

## Foundation Kept

- Next.js, React, TypeScript, App Router, CSS Modules, global tokens, npm, and static export.
- Existing `output: 'export'`, `trailingSlash: true`, unoptimized static image support, base-path helper, and static preview tooling.
- Canonical `public/resume.pdf` and the unchanged personal identity image. Preserve original asset archives and the archival PDF.
- GitHub Actions build/deploy workflow, lint/typecheck commands, and a useful custom 404.
- No runtime server, API, database, form backend, or animation library.

The redesign reused the existing dependency versions, static export, and deployment workflow without scaffolding a new project.

## Final Page and Route Shape

- `/` is the sole portfolio content page, containing identity, short factual introduction, projects, education, location, availability, and contact.
- The Home/Work/About/Resume navigation bar and separate Work/About content routes are removed. Their confirmed facts live on the sheet.
- Keep `/resume.pdf` as a directly served PDF and a discreet link within the closing contact area. It is not an HTML resume route.
- Keep the exported 404 as a utility page with a link home. The old Work/About routes need no replacement landing pages or redirects; no deployment of them was established.
- Use semantic reading order and ordinary external links. Do not hide content behind tabs, accordions, modals, or navigation.
- Metadata, documentation, and export assertions match one content page plus the 404 and PDF.

## Completed Fan-Out and Commit Sequence

Three agents worked in disjoint files while the coordinator owned the shared page shell, route changes, final CSS integration, and verification. This kept the Git history reviewable:

| Commit / workstream | Bounded responsibility | Deliverable |
| --- | --- | --- |
| `2e24e4c` / baseline | Capture the original application and approved redesign brief | Stable starting point |
| `2ec0826` / content | Consolidate confirmed facts and build semantic résumé sections | `src/lib/content.ts`, `ResumeSections` |
| `49249cc` / artwork | Prepare supplied paper and individual sticker assets | `public/art/`, [ASSETS.md](ASSETS.md) |
| `8a4899b` / typography | Review supplied ZIPs and add licensed display font | `public/type/`, [TYPOGRAPHY.md](TYPOGRAPHY.md) |
| `45489c4` / integration | Compose the centered sheet, remove old routes, update export checks, inspect responsive output | App shell, CSS, 404, verifier |

The integration remains a separate commit after the independent content and asset commits.

## Integration Sequence

1. Preserve the existing Next.js static export, base-path handling, and PDF.
2. Build the 760px desktop sheet with the selected pastel palette and CSS-controlled texture opacity.
3. Place the original identity image in a paper frame, then group four projects beside education and practical details.
4. Add supplied sticker cutouts, stationary paper strips, and an accessible contact footer. Reduce sticker intrusion and reflow to one column on narrow screens.
5. Remove obsolete routes/navigation and validate the root and project-prefix exports.

Keep the sheet compact through concise copy and composition, not fixed-height clipping, tiny text, or excessive scaling. Treat the 740px width as an initial art-direction target rather than a device requirement.

## Content and Asset Defaults

- Full name and Backend Engineer remain the nameplate copy. The square identity artwork stays recognizable and unchanged.
- Consolidate the four already-listed public project entries in supplied order: servee, clockwork, Feedback, Eiga. Names and destination links suffice until descriptions are verified.
- Use confirmed education and practical details; no blank employment or skills sections.
- Use the first palette as the foundation. The second palette supplies optional tiny warm accents only.
- Use OFL-licensed Fraunces for the name and Manrope for readable details. Supplied demo fonts are not embedded because their included licenses do not permit the intended web use; see [TYPOGRAPHY.md](TYPOGRAPHY.md).
- Start with the supplied planet, flower, and checkerboard motifs. Exclude the date-bearing 2023 sticker.
- No additional resource pack is necessary at the outset. Ask for genuinely personal motifs only if needed; do not invent interests.

## GitHub Pages and Resume

Keep the existing static export and deployment workflow. The site and PDF must work at both an empty base path and a project prefix. The root endpoint `/resume.pdf` requires an account-site repository such as `aryansaves.github.io` or a root custom domain; a project site serves `/<repository>/resume.pdf`.

This workspace now has a local Git history but no connected remote. Do not claim public hosting is complete until an actual deployment is verified. See [README.md](../README.md) for current development and publishing commands.

## Redesign Acceptance Checks

- One centered resume sheet contains all essential content, with no Work/About/Resume navigation bar or separate content pages.
- The result reads as the selected pastel decorated resume, with visible paper texture and intentional sticker clusters. It must not regress to the monochrome index or become an all-over unreadable collage.
- Copy stays upright, selectable, readable, and factually grounded; stickers do not intercept links or obscure information.
- Inspect desktop, 390px and 320px widths, 200% zoom, touch targets, keyboard focus, skip link, color contrast, and horizontal overflow.
- Check actual display-font glyphs and line boxes, especially the full name, punctuation, numerals, and mobile wrapping. No demo markings or missing-glyph boxes may appear.
- Pass lint, strict typechecking, production build, and revised export verification for root and project-prefix paths.
- Confirm the PDF returns HTTP 200 with PDF content type and original bytes. Confirm custom 404 behavior and all public assets under both base paths.
- Verify there is no decorative motion, theme switcher, hover-only content, or new backend requirement.

## Verification Record — 2026-09-17

- Passed ESLint, strict TypeScript checking, and Next.js production builds of the redesigned site.
- Passed export verification at the root and `/portfolio` base paths: one content page, custom 404, 33 internal URLs, artwork, unchanged identity image, and canonical resume PDF.
- Confirmed HTTP 200 and `application/pdf` for the PDF, HTTP 200 and `image/webp` for the prefixed paper asset, and a real HTTP 404 under both preview paths. Export verification compares the PDF and identity image to their original bytes.
- Inspected desktop, 390px, and 320px layouts in the browser. There is no horizontal overflow; decorative images load; the Fraunces nameplate renders; the skip link focuses the résumé content; the browser console is clear.
- Exact 200% browser zoom remains a manual visual check before publication. Sticker and paper source rights also need confirmation before public deployment; see [ASSETS.md](ASSETS.md).
- GitHub deployment has not run because no remote is connected. Local runtime is Node.js 26.8.1; workflow runtime is Node.js 24 LTS.
