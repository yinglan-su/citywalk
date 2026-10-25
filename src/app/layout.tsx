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
  metadataBase: new URL("https://7ka.fit"),
  title: {
    default: "7ka · Bespoke Slow Travel",
    template: "%s | 7ka",
  },
  description:
    "Bespoke APAC slow travel for EU & US travelers visiting Beijing, Shanghai, Tokyo, Kyoto, Singapore, Hong Kong, and beyond — with zero-backtrack routes, native-script taxi driver flashcards, and point-to-order menus.",
  keywords: [
    "7ka",
    "APAC slow travel",
    "Asia travel planner for US and EU visitors",
    "Beijing travel itinerary",
    "Shanghai slow travel",
    "Tokyo gentle walk",
    "Singapore accessible itinerary",
    "Kyoto slow travel",
    "Hong Kong itinerary",
    "China travel for foreigners",
    "zero language barrier travel",
    "bilingual taxi driver flashcards",
    "point to order menu travel guide",
    "senior friendly travel",
    "barrier free travel",
    "family travel planner",
    "Forbidden City accessible route",
    "Chengdu panda base tour",
    "offline travel guide",
    "无障碍旅行",
    "家庭亲子慢行",
    "舒适旅行规划",
    "出境游双语闪卡",
    "外国人来华旅游指南",
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
    canonical: "https://7ka.fit",
    languages: {
      "en-US": "https://7ka.fit/?lang=en",
      "zh-CN": "https://7ka.fit/?lang=zh",
    },
  },
  openGraph: {
    title: "7ka · Bespoke APAC Slow Travel",
    description:
      "Effortless APAC itineraries across Beijing, Shanghai, Tokyo, Kyoto, and Singapore with verified drop-offs, bilingual taxi driver flashcards, and point-to-order menus.",
    url: "https://7ka.fit",
    siteName: "7ka",
    images: [
      {
        url: "/images/spot_badaguan.jpg",
        width: 1200,
        height: 630,
        alt: "7ka Bespoke APAC Slow Travel",
      },
    ],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7ka · Bespoke APAC Slow Travel",
    description:
      "Effortless APAC itineraries across Beijing, Shanghai, Tokyo, Kyoto, and Singapore with verified drop-offs, bilingual taxi driver flashcards, and point-to-order menus.",
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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <meta name="geo.region" content="GLOBAL" />
        <meta name="geo.placename" content="Bespoke APAC Slow Travel" />
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
