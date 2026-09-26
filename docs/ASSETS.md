# Prepared visual assets

The page uses artwork in `public/art/` and audio in `public/audio/`. Originals in `resources/` remain unchanged.

| Export | Source | Use |
| --- | --- | --- |
| `paper.webp` | `resources/marjan-blan-5Ft4NWTmeJE-unsplash.jpg` | Compressed photographic crease/fiber layer under the notebook rules |
| `scrap-taped.png` | `resources/olga-thelavart-uP4jLndMWnY-unsplash-removebg-preview.png` | Portrait backing |
| `scrap-rough.png` | `resources/olga-thelavart-RyrFRsVoe2Q-unsplash-removebg-preview.png` | Torn edges on draggable desk scraps and the Easter-egg paper collage |
| `scrap-strips.png` | `resources/teuku-fadhil-t6w_PBhYuDI-unsplash-removebg-preview.png` | Cropped torn strip over the portrait |
| `cursor-default-small.png` | `resources/cursor_hover.png` | Transparent 26×26 smiling cat cursor |
| `cursor-pressed-small.png` | `resources/cursor_click.png` | Transparent 26×26 open-mouthed pressed cursor |
| `cat-playing.svg` | `resources/svg/Cat playing animation.svg` | Small animated desk detail |
| `cat-404.svg` | `resources/svg/404 error page with cat.svg` | Decorative custom 404 artwork |
| `rainbow-cat-remix.svg` / `rainbow-cat-remix-still.svg` | `resources/svg/rainbow cat remix.svg` | Animated Easter-egg artwork and a derived SVG with animation elements removed for reduced motion |
| `8-bit-cat.svg` / `8-bit-cat-still.svg` | `resources/svg/8-bit Cat.svg` | Clickable refresh cat and its reduced-motion still |
| `casino-jackpot.mp3` | `resources/audio/floraphonic-playful-casino-slot-machine-jackpot-3-183921.mp3` | One-shot Easter-egg sound, copied without modification |
| `font-title.mp3` | `resources/audio/tunetank.com_metallic-twang.wav` | Shortened, faded metallic hit for the main-name font swap |
| `font-item.mp3` | `resources/audio/tunetank.com_high-clicks-typing.wav` | Shortened, faded click for project and open-source-work font swaps |

The source cat cursor PNGs had large opaque white canvases. The transparent cutouts were made through the built-in ImageGen background-extraction mode with prompts to preserve the original cat drawings while removing only the white background, then trimmed and downsampled to 48×48 and finally 26×26 with ImageMagick. The 26×26 versions are used so the cursor does not cover text. This is a derived cutout, not a byte-exact transformation; inspect the originals if exact line fidelity is important. The SVGs were checked for scripts and external references before use. `Hands typing on keyboard.svg` was left out because it is much larger and visually unnecessary.

`planet.png` and `flower.png` decorate the draggable scraps. Earlier unused checker artwork, larger cursors, and Fraunces font exports are preserved in `resources/archive/` and no longer shipped. Decorative images have empty alt text; their enclosing scrap buttons provide the interaction.

The supplied audio files contain multiple successive effects. The active MP3 exports isolate one hit from each source, convert it to mono at 44.1 kHz and 96 kbps, and keep playback volume deliberately low. Browser autoplay policies mean hover sound begins after the visitor's first pointer or keyboard interaction; directly pressing a sound-enabled item also plays its effect.

The supplied assets do not include a complete license/provenance record. Confirm rights for the paper photograph, scrap PNGs, cursor art, and animated SVGs before public deployment.
