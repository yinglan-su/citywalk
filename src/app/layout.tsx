import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "7ka · 私人实操级旅行规划",
  description: "基于大模型的精准落客、预约防坑与适老适幼多目的地定制平台",
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
        {children}
      </body>
    </html>
  );
}
