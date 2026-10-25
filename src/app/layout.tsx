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
    default: "7ka · AI Trip Planner & Custom Itinerary Builder",
    template: "%s | 7ka Trip Planner",
  },
  description:
    "Self-guided AI trip planner and custom itinerary builder for independent travelers visiting Beijing, Shanghai, Tokyo, Kyoto, Singapore, and beyond — with zero-backtrack routes, taxi driver flashcards, and offline export.",
  keywords: [
    "7ka",
    "AI trip planner",
    "custom travel itinerary builder",
    "self-guided trip planner",
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
    "智能行程规划工具",
    "自由行路线定制",
    "无障碍旅行",
    "家庭亲子慢行",
    "出境游双语闪卡",
    "外国人来华旅游指南",
  ],
  authors: [{ name: "7ka Trip Planner" }],
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
    title: "7ka · AI Trip Planner & Custom Itinerary Builder",
    description:
      "Plan your own self-guided APAC itinerary across Beijing, Shanghai, Tokyo, Kyoto, and Singapore with verified drop-offs, bilingual taxi driver flashcards, and offline export.",
    url: "https://7ka.fit",
    siteName: "7ka Trip Planner",
    images: [
      {
        url: "/images/spot_badaguan.jpg",
        width: 1200,
        height: 630,
        alt: "7ka AI Trip Planner",
      },
    ],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7ka · AI Trip Planner & Custom Itinerary Builder",
    description:
      "Plan your own self-guided APAC itinerary across Beijing, Shanghai, Tokyo, Kyoto, and Singapore with verified drop-offs, bilingual taxi driver flashcards, and offline export.",
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
