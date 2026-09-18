# Prepared visual assets

The page uses the following exports from `public/art/`. Originals in `resources/` remain unchanged.

| Export | Source | Use |
| --- | --- | --- |
| `paper.webp` | `resources/marjan-blan-5Ft4NWTmeJE-unsplash.jpg` | Compressed photographic crease/fiber layer under the notebook rules |
| `scrap-taped.png` | `resources/olga-thelavart-uP4jLndMWnY-unsplash-removebg-preview.png` | Portrait backing |
| `scrap-rough.png` | `resources/olga-thelavart-RyrFRsVoe2Q-unsplash-removebg-preview.png` | Lower-left torn edge on wider screens |
| `scrap-strips.png` | `resources/teuku-fadhil-t6w_PBhYuDI-unsplash-removebg-preview.png` | Cropped torn strip over the portrait |
| `cursor-default-small.png` | `resources/cursor_hover.png` | Transparent 26×26 smiling cat cursor |
| `cursor-pressed-small.png` | `resources/cursor_click.png` | Transparent 26×26 open-mouthed pressed cursor |
| `cat-playing.svg` | `resources/svg/Cat playing animation.svg` | Small animated desk detail |
| `cat-404.svg` | `resources/svg/404 error page with cat.svg` | Decorative custom 404 artwork |

The source cat cursor PNGs had large opaque white canvases. The transparent cutouts were made through the built-in ImageGen background-extraction mode with prompts to preserve the original cat drawings while removing only the white background, then trimmed and downsampled to 48×48 and finally 26×26 with ImageMagick. The 26×26 versions are used so the cursor does not cover text. This is a derived cutout, not a byte-exact transformation; inspect the originals if exact line fidelity is important. The SVGs were checked for scripts and external references before use. `Hands typing on keyboard.svg` was left out because it is much larger and visually unnecessary.

The earlier `planet.png`, `flower.png`, and `checker.png` exports remain in the repository but are no longer used. Decorative images have empty alt text and no pointer interaction.

The supplied assets do not include a complete license/provenance record. Confirm rights for the paper photograph, scrap PNGs, cursor art, and animated SVGs before public deployment.
