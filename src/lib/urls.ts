import type { Metadata } from "next";

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

// For public assets and native anchors only; next/link applies basePath itself.
export function publicUrl(path: `/${string}`) {
  return `${basePath}${path}`;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const configuredSite = process.env.SITE_URL;
  const canonical = configuredSite
    ? `${configuredSite.replace(/\/$/, "")}${path}`
    : undefined;
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: { title, description, type: "website", ...(canonical ? { url: canonical } : {}) },
  };
}
