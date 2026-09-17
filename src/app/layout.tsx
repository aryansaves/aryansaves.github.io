import type { Metadata } from "next";
import localFont from "next/font/local";
import { identity } from "@/lib/content";
import { publicUrl } from "@/lib/urls";
import "./globals.css";

const displayFont = localFont({
  src: "../../public/type/fraunces-variable.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { default: `${identity.name} — ${identity.role}`, template: `%s — ${identity.name}` },
  description: "Aryan Kumar Srivastava. Backend engineer based in Delhi. Projects, education, contact, and resume.",
  icons: { icon: publicUrl("/identity.jpg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={displayFont.variable}>{children}</body></html>;
}
