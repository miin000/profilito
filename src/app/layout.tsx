import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Phạm Quang Minh — Backend Developer",
  description: "Portfolio of Phạm Quang Minh, Backend Developer (Intern) focused on NestJS, TypeScript, PostgreSQL, and business analysis.",
  openGraph: { title: "Phạm Quang Minh — Backend Developer", description: "Backend development, business analysis, and selected projects.", type: "website", images: ["/og-image.svg"] },
  icons: { icon: "/favicon.svg" }
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0e17" }, { media: "(prefers-color-scheme: light)", color: "#f7f9fc" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${geist.variable} ${mono.variable}`}><Providers>{children}</Providers></body></html>;
}
