import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const port = Number(process.env.PORT ?? 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".txt": "text/plain", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".pdf": "application/pdf", ".ico": "image/x-icon" };

await stat(root);
createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (base && pathname !== base && !pathname.startsWith(`${base}/`)) {
      response.writeHead(404).end("Not found");
      return;
    }
    let file = resolve(root, `.${pathname.slice(base.length) || "/"}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    let status = 200;
    try {
      if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
      await stat(file);
    } catch {
      file = resolve(root, "404.html");
      status = 404;
    }
    const content = await readFile(file);
    response.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream", "Content-Length": content.length, "Cache-Control": "no-store" });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(400).end("Bad request");
  }
}).listen(port, "0.0.0.0", () => console.log(`Static preview: http://localhost:${port}${base}/`));
