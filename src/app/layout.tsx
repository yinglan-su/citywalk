import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import { StructuredData } from "@/components/Seo/StructuredData";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://plan.7ka.fit"),
  title: {
    default: "7ka · Bespoke Slow Travel | 慢调旅行 · 专属定制",
    template: "%s | 7ka",
  },
  description:
    "Thoughtful, gentle travel planning with smooth routes, step-free access, and curated dining across Kyoto, Tokyo, Beijing, Shanghai, Chengdu, and beyond.",
  keywords: [
    "7ka",
    "slow travel",
    "bespoke travel itinerary",
    "senior friendly travel",
    "barrier free travel",
    "family travel planner",
    "Kyoto slow travel",
    "Tokyo gentle walk",
    "Forbidden City accessible route",
    "Chengdu panda base tour",
    "Qingdao seaside villas",
    "Yanji border travel",
    "offline travel guide",
    "慢调旅行",
    "适老化旅行定制",
    "无障碍旅行",
    "家庭亲子慢行",
    "舒适慢行规划",
  ],
  authors: [{ name: "7ka Bespoke Travel" }],
  creator: "7ka",
  publisher: "7ka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://plan.7ka.fit",
    languages: {
      "en-US": "https://plan.7ka.fit/?lang=en",
      "zh-CN": "https://plan.7ka.fit/?lang=zh",
    },
  },
  openGraph: {
    title: "7ka · Bespoke Slow Travel",
    description:
      "Craft gentle, zero-backtrack travel itineraries with verified drop-offs, accessibility notes, and handpicked dining.",
    url: "https://plan.7ka.fit",
    siteName: "7ka",
    images: [
      {
        url: "/images/spot_badaguan.jpg",
        width: 1200,
        height: 630,
        alt: "7ka Bespoke Slow Travel",
      },
    ],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7ka · Bespoke Slow Travel",
    description:
      "Craft gentle, zero-backtrack travel itineraries with verified drop-offs, accessibility notes, and handpicked dining.",
    images: ["/images/spot_badaguan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "travel",
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
        <meta name="geo.region" content="GLOBAL" />
        <meta name="geo.placename" content="Bespoke Slow Travel" />
        <StructuredData />
      </head>
      <body className={`${playfair.variable} antialiased font-sans bg-[#FAF9F6] text-zinc-900 min-h-screen`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
