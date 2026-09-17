# Typography

The résumé name uses the supplied **Awesome** brush font. **Priestacy** gives the “Backend Engineer” paper strip a handwritten contrast. The existing Manrope variable font remains the body, project, metadata, and link face so the small text stays readable. Both supplied fonts cover the exact name and role text.

The two font files used by `next/font/local` are `src/assets/fonts/Awesome.otf` and `src/assets/fonts/Priestacy.otf`, extracted without modification from the user's `fonts/awesome.zip` and `fonts/priestacy.zip`. Next.js copies them into the static export with base-path-aware URLs. The earlier OFL Fraunces file remains in `public/type/` as an unused alternative.

## Supplied license terms

- Awesome's bundled `1001fonts-awesome-eula.txt` permits personal-use embedding in a website, but excludes business, commercial, or income-generating use and prohibits publishing the original font ZIP as a download.
- Priestacy's bundled “IMPORTANT INFORMATION ABOUT THIS FONT !!!.pdf” says personal use only and explicitly excludes promotional and commercial use. It does not grant public professional-portfolio use.

The implementation is a **local visual prototype** using these supplied fonts. Before publishing the portfolio or pushing the font files to a public repository, obtain the licenses appropriate to that use or replace them with fonts whose terms cover it. Calling a ZIP “free to use” does not supersede the terms included inside it. The original local ZIPs and their license documents remain in `fonts/`; ZIPs are gitignored to avoid publishing their bundled specimen images and source archives.
