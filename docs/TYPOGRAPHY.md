# Typography

The default display face is **Super Adorable**, used for the full name, project names, and degree. **Papernotes** supplies the handwritten role label and the project-title hover/focus swap. **Manrope** stays on paragraphs, factual details, and links for legibility. The old cursive/brush Awesome and Priestacy faces are no longer loaded.

`src/assets/fonts/SuperAdorable.ttf` and `src/assets/fonts/Papernotes.woff2` were extracted from the user's ZIPs and loaded with `next/font/local`, which includes them in the static export. Original ZIPs remain in `fonts/` and are ignored by Git.

## Publication rights

- The Super Adorable archive labels the font “Freeware”; its [FontSpace page](https://www.fontspace.com/super-adorable-font-f147900) states free personal and commercial use.
- The Papernotes archive has no license text. Its [DaFont page](https://www.dafont.com/papernotes.font) labels it **free for personal use** and offers a commercial license. A public professional portfolio may require that license or a replacement font. This implementation is ready for local review; resolve this before public deployment.
- The previously supplied Awesome and Priestacy archives carry personal-use restrictions. They remain available locally as historical sources but are not active in this design.

The local font files should not be pushed to a public repository until the intended use and redistribution terms have been checked.
