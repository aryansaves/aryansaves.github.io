import type { Metadata } from "next";
import { identity } from "@/lib/content";
import { publicUrl } from "@/lib/urls";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${identity.name} — ${identity.role}`, template: `%s — ${identity.name}` },
  description: "Aryan Kumar Srivastava. Backend Engineer, based in Delhi. Work, profile, and contact.",
  icons: { icon: publicUrl("/identity.jpg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
