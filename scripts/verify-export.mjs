import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve("out");
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const pages = ["index.html", "404.html"];
let checked = 0;

for (const page of pages) {
  const html = await readFile(resolve(root, page), "utf8");
  assert.match(html, /<h1[\s>]/, `${page}: missing primary heading`);
  assert.ok(!/Needs final project description|portfolio-ready|TODO|didn&#x27;t load/.test(html), `${page}: editorial content leaked`);
  const resourceHtml = html.replace(/<link\b[^>]*rel="(?:preconnect|dns-prefetch)"[^>]*>/g, "");
  for (const match of resourceHtml.matchAll(/(?:href|src)="(\/[^"#?]*)[^" ]*"/g)) {
    const url = match[1];
    assert.ok(!base || url.startsWith(`${base}/`), `${page}: missing basePath in ${url}`);
    let target = resolve(root, `.${url.slice(base.length)}`);
    const info = await stat(target).catch(() => null);
    assert.ok(info, `${page}: missing exported asset ${url}`);
    if (info.isDirectory()) target = resolve(target, "index.html");
    assert.ok((await stat(target)).isFile(), `${page}: missing file ${url}`);
    checked++;
  }
}

const home = await readFile(resolve(root, "index.html"), "utf8");
assert.ok(!home.includes("resume.pdf"), "Resume link should not be published");
assert.equal(await stat(resolve(root, "resume.pdf")).catch(() => null), null, "Resume PDF should not be exported");
assert.ok(home.includes(`${base}/art/paper.webp`), "Missing paper texture reference");
for (const name of ["scrap-taped.png", "scrap-rough.png", "scrap-strips.png", "cursor-default-small.png", "cursor-pressed-small.png"]) {
  assert.ok(home.includes(`${base}/art/${name}`), `Missing ${name} reference`);
  assert.equal((await readFile(resolve(root, `art/${name}`))).subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
}
assert.ok(home.includes(`${base}/art/cat-playing.svg`), "Missing animated cat reference");
assert.ok((await readFile(resolve(root, "404.html"), "utf8")).includes(`${base}/art/cat-404.svg`), "Missing 404 cat reference");
for (const oldRoute of ["work/index.html", "about/index.html"]) {
  assert.equal(await stat(resolve(root, oldRoute)).catch(() => null), null, `Obsolete route still exported: ${oldRoute}`);
}
assert.ok((await readFile(resolve(root, "identity.jpg"))).equals(await readFile("Pfp.jpg")), "Identity image was altered");
// These resources are requested only after interaction, so they are absent from HTML.
for (const name of ["8-bit-cat.svg", "8-bit-cat-still.svg", "rainbow-cat-remix.svg", "rainbow-cat-remix-still.svg", "planet.png", "flower.png"]) {
  const asset = await readFile(resolve(root, "art", name));
  assert.ok(asset.equals(await readFile(resolve("public/art", name))), `Changed or missing interactive asset: ${name}`);
  if (name.endsWith(".svg")) {
    const svg = asset.toString();
    assert.ok(!/<script\b|<foreignObject\b|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?:https?:|\/\/|javascript:)/i.test(svg), `Unsafe SVG content: ${name}`);
    if (name.endsWith("-still.svg")) assert.ok(!/<(?:animate\w*|set)\b/.test(svg), `Reduced-motion SVG animates: ${name}`);
  }
}
for (const name of ["cat-playing.svg", "cat-404.svg"]) {
  const svg = (await readFile(resolve(root, "art", name))).toString();
  assert.ok(!/<script\b|<foreignObject\b|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?:https?:|\/\/|javascript:)/i.test(svg), `Unsafe SVG content: ${name}`);
}
for (const name of ["font-title.mp3", "font-item.mp3", "casino-jackpot.mp3"]) {
  assert.ok((await readFile(resolve(root, "audio", name))).equals(await readFile(resolve("public/audio", name))), `Missing audio: ${name}`);
}
for (const entry of await readdir(resolve(root, "_next/static"), { recursive: true })) {
  if (!entry.endsWith(".css")) continue;
  const cssPath = resolve(root, "_next/static", entry);
  const css = await readFile(cssPath, "utf8");
  for (const match of css.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)) {
    const url = match[1];
    if (/^(?:data:|https?:|#)/.test(url)) continue;
    assert.ok(!base || !url.startsWith("/") || url.startsWith(`${base}/`), `CSS asset missing basePath: ${url}`);
    const target = url.startsWith("/") ? resolve(root, `.${url.slice(base.length)}`) : resolve(dirname(cssPath), url);
    assert.ok((await stat(target)).isFile(), `Missing CSS asset: ${url}`);
    checked++;
  }
}
console.log(`Verified single-sheet export, 404, ${checked} internal URLs, artwork, original identity image, and absence of a published resume.`);
