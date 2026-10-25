import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://7ka.fit";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Googlebot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "Amazonbot",
        ],
        allow: ["/", "/destinations/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
