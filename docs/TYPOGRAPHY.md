# Typography handoff

Use **Fraunces Variable** for the résumé nameplate and the existing **Manrope Variable** for body copy, links, dates, and metadata. Fraunces has the soft, expressive serif character that suits the pastel collage while leaving the small text crisp. Keep the role label in Manrope so the display face has one clear job.

## Ready-to-use asset

- `public/type/fraunces-variable.ttf` is the original variable font from the [Google Fonts Fraunces directory](https://github.com/google/fonts/tree/main/ofl/fraunces). It covers every character in “Aryan Kumar Srivastava” and “Backend Engineer,” along with Latin letters, digits, and common punctuation.
- `public/type/OFL.txt` is the accompanying SIL Open Font License 1.1. It explicitly permits embedding and redistribution with the license text. Keep this file alongside the font when publishing.
- In the Next.js layout, load the file with `next/font/local` from `../../public/type/fraunces-variable.ttf`, set `variable: "--font-display"`, `display: "swap"`, and `weight: "100 900"`. The generated asset URL will honor a GitHub Pages `basePath`. Apply the variable only to the nameplate, with `Georgia, serif` as a fallback.

## Supplied ZIPs reviewed

| ZIP | Character finding | Publication finding |
| --- | --- | --- |
| Modern Heritage Display | Maps all letters in the exact name and role; no digits | Archive says non-commercial. [Alpaprana offers a separate Webfont License](https://alpapranastudio.com/license/) for `@font-face`; the supplied OTF does not establish that right. |
| Brooklyn Free | Maps the exact name and role; demo glyphs appear in some other characters | Readme limits the demo to personal use, and Alpaprana's separate webfont terms apply. |
| Candy Inc. | Maps the exact name and role; some punctuation/digits appear as branding marks | Readme allows personal use only. [The designer offers a separate website license](https://www.billyargel.com/licenses/). |
| Simple Stacked | Maps the exact name and role | Its included PDF expressly forbids webfont/web-server use and reupload. |

The supplied archives remain untouched in `fonts/`. None is copied into the public site. If a licensed webfont package for Modern Heritage is supplied later, test the full name in the licensed file before replacing Fraunces.
