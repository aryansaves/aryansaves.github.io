# Aryan’s portfolio

A Next.js, React, TypeScript, and CSS Modules portfolio exported statically for GitHub Pages.

The site is one centered, compact notebook scrapbook portfolio. Projects, open-source work, education, practical details, and contact live on the same ivory sheet over a patterned collage desk. It uses the supplied paper, scrap, cat, and font assets, with no Work/About/Resume navigation. The initial launch intentionally does not publish a résumé PDF.

## Local development

Use Node.js 24 LTS (`nvm use` if you use nvm), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Manrope is self-hosted from the Fontsource package; the local design uses the supplied Super Adorable and Papernotes fonts for expressive type. Review [the font notes](docs/TYPOGRAPHY.md) before publishing or pushing font files to a public repository. Metadata uses `SITE_URL` when set; no production domain is invented for local builds.

## Verify the static site

```sh
npm run lint
npm run typecheck
npm run build
npm run verify
npm run preview
```

The export verifier checks the one-page route, custom 404, HTML and CSS asset paths, interactive audio and SVGs, reduced-motion SVGs, unchanged identity image, and confirms that no résumé is accidentally published.

`preview` serves `out/` at port 3000 with real 404 responses and no SPA fallback. It is a local verification utility, not a production server. Set `PORT` to change its port.

To test project-site deployment, build, verify, and preview with the same `NEXT_PUBLIC_BASE_PATH=/portfolio` environment variable. Root deployments leave that variable empty. See `.env.example` for build configuration. `SITE_URL` must be the complete deployed site URL, including its repository prefix when applicable.

## GitHub Pages setup

1. Push the project to the intended GitHub repository.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source.
3. Run the included workflow on the default branch, or push a change there. Other branches and pull requests build and validate without publishing.
4. The workflow derives the base path and canonical site URL from the actual repository. It publishes `out/` after all checks pass.

For a custom domain, configure it and its DNS in GitHub Pages, then set repository variable `PAGES_CUSTOM_DOMAIN` to the hostname only. The workflow uses a root base path and includes a CNAME file. Public-repository Pages hosting does not require student-plan approval.

## Content and design

- [Design direction](docs/DESIGN.md)
- [Factual content and editorial TODOs](docs/CONTENT.md)
- [Implementation decisions](docs/IMPLEMENTATION.md)

Application facts are maintained in `src/lib/content.ts` and rendered by `src/components/ResumeSections.tsx`. The visible projects are Eiga, Feedback, and clockwork; Open Source Work links to the supplied Node.js PR. Unconfirmed descriptions, Kiroku, and employment claims remain omitted. See [asset provenance](docs/ASSETS.md) and [font decisions](docs/TYPOGRAPHY.md) before public publication.

## Tooling compatibility

ESLint is pinned to the 9.x major because the React plugin bundled with the current Next.js lint configuration fails on ESLint 10. Update them together when that plugin supports the new API. Node.js 24 LTS is selected for CI; local verification in this workspace used Node.js 26.8.1.

## Interactive desk

Four torn-paper scraps start in randomized, separate margin slots on desktop. Dragging stays free; clicking changes their pattern. Hiding all four completely beneath the notebook triggers 48 overlapping rainbow-cat paper scraps and the supplied jackpot sound. The centre contains only “ALL SCRAPS LOST!” and an enlarged 8-bit cat. Clicking the cat (or activating it with the keyboard) reloads the page into a new arrangement. There is no automatic reload. Reduced-motion preferences use still cat artwork.

Only active web assets live in `public/`. Redundant source copies and earlier unused exports were removed before launch and remain recoverable from Git history. Local `.codex/` settings and generated build output are ignored.
