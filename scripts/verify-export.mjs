import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("out");
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const pages = ["index.html", "work/index.html", "about/index.html", "404.html"];
let checked = 0;
for (const page of pages) {
  const html = await readFile(resolve(root, page), "utf8");
  assert.match(html, /<h1[\s>]/, `${page}: missing primary heading`);
  assert.match(html, /id="contact"/, `${page}: missing contact destination`);
  assert.ok(html.includes(`href="${base}/resume.pdf"`), `${page}: wrong resume link`);
  assert.ok(!/Needs final project description|portfolio-ready|TODO|didn&#x27;t load/.test(html), `${page}: editorial content leaked`);
  // Connection hints address an origin, not a deployed file or route.
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
const exported = await readFile(resolve(root, "resume.pdf"));
assert.equal(exported.subarray(0, 5).toString(), "%PDF-");
assert.ok(exported.equals(await readFile("public/resume.pdf")), "Exported PDF differs from canonical resume");
assert.ok((await readFile(resolve(root, "identity.jpg"))).equals(await readFile("Pfp.jpg")), "Identity image was altered");
console.log(`Verified ${pages.length} static pages, ${checked} internal URLs, original identity image, and ${base}/resume.pdf.`);
