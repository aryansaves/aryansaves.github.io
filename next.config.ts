import type { NextConfig } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) {
  throw new Error("NEXT_PUBLIC_BASE_PATH must be empty or a single /repository path.");
}

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
