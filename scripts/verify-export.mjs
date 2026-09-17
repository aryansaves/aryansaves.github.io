import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

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
assert.ok(home.includes(`href="${base}/resume.pdf"`), "Wrong resume link");
assert.ok(home.includes(`${base}/art/paper.webp`), "Missing paper texture reference");
for (const name of ["planet.png", "flower.png", "checker.png"]) {
  assert.ok(home.includes(`${base}/art/${name}`), `Missing ${name} reference`);
  assert.equal((await readFile(resolve(root, `art/${name}`))).subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
}
for (const oldRoute of ["work/index.html", "about/index.html"]) {
  assert.equal(await stat(resolve(root, oldRoute)).catch(() => null), null, `Obsolete route still exported: ${oldRoute}`);
}
const exported = await readFile(resolve(root, "resume.pdf"));
assert.equal(exported.subarray(0, 5).toString(), "%PDF-");
assert.ok(exported.equals(await readFile("public/resume.pdf")), "Exported PDF differs from canonical resume");
assert.ok((await readFile(resolve(root, "identity.jpg"))).equals(await readFile("Pfp.jpg")), "Identity image was altered");
console.log(`Verified single-sheet export, 404, ${checked} internal URLs, artwork, original identity image, and ${base}/resume.pdf.`);
