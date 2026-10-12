import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "7ka · Bespoke Slow Travel | 私人实操级旅行规划",
  description:
    "AI-powered gentle travel engine with zero-backtrack routes, verified drop-offs & family-friendly dining. 适老适幼精准落客与深度漫步定制平台。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body className="antialiased font-sans bg-[#FAF9F6] text-zinc-900 min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
