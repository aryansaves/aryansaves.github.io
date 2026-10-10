import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
assert.match(home, /<a\b[^>]*href="[^"]*\/resume\.pdf"[^>]*download="Aryan-Kumar-Srivastava-Resume\.pdf"/, "Missing native resume download link");
const resume = await readFile(resolve(root, "resume.pdf"));
assert.ok(resume.equals(await readFile("public/resume.pdf")), "Exported resume differs from the approved PDF");
assert.equal(resume.subarray(0, 5).toString(), "%PDF-", "Resume is not a PDF");
assert.ok(home.includes(`${base}/art/paper.webp`), "Missing paper texture reference");
for (const name of ["cursor-default-small.png", "cursor-pressed-small.png"]) {
  assert.ok(home.includes(`${base}/art/${name}`), `Missing ${name} reference`);
  assert.equal((await readFile(resolve(root, `art/${name}`))).subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
}
assert.ok(home.includes(`${base}/art/cat-playing.svg`), "Missing restored playing cat");
const playingCat = await readFile(resolve(root, "art/cat-playing.svg"), "utf8");
assert.ok(!/<script\b|<foreignObject\b|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?:https?:|\/\/|javascript:)/i.test(playingCat), "Unsafe playing-cat SVG");
const techIcons = JSON.parse(await readFile("docs/TECH-ICON-SOURCES.json", "utf8"));
for (const icon of techIcons.icons) {
  const asset = await readFile(resolve(root, "art/tech", icon.file));
  assert.ok(home.includes(`${base}/art/tech/${icon.file}`), `Unreferenced technology logo: ${icon.file}`);
  assert.equal(createHash("sha256").update(asset).digest("hex"), icon.sha256, `Technology logo differs from provenance: ${icon.file}`);
  if (icon.file.endsWith(".svg")) {
    assert.ok(!/<script\b|<foreignObject\b|<!DOCTYPE|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?!#)|url\(\s*["']?(?:https?:|\/\/|javascript:)/i.test(asset.toString()), `Unsafe technology SVG: ${icon.file}`);
  } else {
    assert.equal(asset.subarray(0, 4).toString(), "RIFF", `Invalid technology image: ${icon.file}`);
    assert.equal(asset.subarray(8, 12).toString(), "WEBP", `Invalid technology WebP: ${icon.file}`);
  }
}
for (const removed of ["art/8-bit-cat.svg", "art/8-bit-cat-still.svg", "art/rainbow-cat-remix.svg", "art/rainbow-cat-remix-still.svg", "art/cat-404.svg", "art/flower.png", "art/planet.png", "art/scrap-rough.png", "art/scrap-taped.png", "art/scrap-strips.png", "audio/casino-jackpot.mp3"]) {
  assert.equal(await stat(resolve(root, removed)).catch(() => null), null, `Removed asset still exported: ${removed}`);
}
for (const oldRoute of ["work/index.html", "about/index.html"]) {
  assert.equal(await stat(resolve(root, oldRoute)).catch(() => null), null, `Obsolete route still exported: ${oldRoute}`);
}
assert.ok((await readFile(resolve(root, "identity.jpg"))).equals(await readFile("Pfp.jpg")), "Identity image was altered");
for (const name of ["font-title.mp3", "font-item.mp3"]) {
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
console.log(`Verified single-sheet export, 404, ${checked} internal URLs, artwork, original identity image, and approved resume download.`);
