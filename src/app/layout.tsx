import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "NovaForge AI",
  description: "Next.js + Tailwind AI tools station with pricing and Stripe payments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main className="min-h-[calc(100vh-128px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
