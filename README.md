# Aryan’s portfolio

A Next.js, React, TypeScript, and CSS Modules portfolio exported statically for GitHub Pages.

The site is one centered, compact pastel scrapbook résumé. Projects, education, practical details, contact, and the PDF link live on the same sheet. The page uses the supplied paper and sticker artwork, with no Work/About/Resume navigation. `/resume.pdf` remains directly accessible.

## Local development

Use Node.js 24 LTS (`nvm use` if you use nvm), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Manrope is self-hosted from the Fontsource package; the local design uses the supplied Awesome and Priestacy fonts for the nameplate. Their bundled terms are personal-use only, so review [the font notes](docs/TYPOGRAPHY.md) before publishing or pushing font files to a public repository. Metadata uses `SITE_URL` when set; no production domain is invented for local builds.

## Verify the static site

```sh
npm run lint
npm run typecheck
npm run build
npm run verify
npm run preview
```

The export verifier checks the one-page route, custom 404, local links, artwork, unchanged identity image, and canonical PDF.

`preview` serves `out/` at port 3000 with real 404 responses and no SPA fallback. It is a local verification utility, not a production server. Set `PORT` to change its port.

To test project-site deployment, build, verify, and preview with the same `NEXT_PUBLIC_BASE_PATH=/portfolio` environment variable. Root deployments leave that variable empty. See `.env.example` for build configuration. `SITE_URL` must be the complete deployed site URL, including its repository prefix when applicable.

## Resume at /resume.pdf

`public/resume.pdf` is the canonical resume. Replace that file to update it, then rebuild and deploy. It is served directly as a PDF, without a server endpoint, download wrapper, or separate HTML page. The original supplied `public/Backend-resume.pdf` is retained as an archival copy; site navigation uses only `resume.pdf`.

- **Account site (recommended for the requested root endpoint):** a repository named `aryansaves.github.io` publishes at `https://aryansaves.github.io/`, giving `https://aryansaves.github.io/resume.pdf`.
- **Project site:** a repository named `portfolio` publishes the PDF at `https://aryansaves.github.io/portfolio/resume.pdf`. This repository cannot publish outside its own path.
- **Custom domain:** a root domain configured for this site exposes `https://your-domain/resume.pdf`.

These are deployment examples using the supplied GitHub handle, not claims that a remote repository or deployment already exists. This workspace has local Git history but no connected remote.

## GitHub Pages setup

1. Push the project to the intended GitHub repository. Use an account-site repository if the root `/resume.pdf` URL is required without a custom domain.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source.
3. Run the included workflow on the default branch, or push a change there. Other branches and pull requests build and validate without publishing.
4. The workflow derives the base path and canonical site URL from the actual repository. It publishes `out/` after all checks pass.

For a custom domain, configure it and its DNS in GitHub Pages, then set repository variable `PAGES_CUSTOM_DOMAIN` to the hostname only. The workflow uses a root base path and includes a CNAME file. Public-repository Pages hosting does not require student-plan approval.

## Content and design

- [Design direction](docs/DESIGN.md)
- [Factual content and editorial TODOs](docs/CONTENT.md)
- [Implementation decisions](docs/IMPLEMENTATION.md)

Application facts are maintained in `src/lib/content.ts` and rendered by `src/components/ResumeSections.tsx`. Project descriptions, Kiroku, employment, and unverified contribution claims are omitted until confirmed. See [asset provenance](docs/ASSETS.md) and [font decisions](docs/TYPOGRAPHY.md) before public publication.

## Tooling compatibility

ESLint is pinned to the 9.x major because the React plugin bundled with the current Next.js lint configuration fails on ESLint 10. Update them together when that plugin supports the new API. Node.js 24 LTS is selected for CI; local verification in this workspace used Node.js 26.8.1.
