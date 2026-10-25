import { MetadataRoute } from "next";
import { DESTINATION_DIRECTORY } from "@/lib/destination-slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://7ka.fit";
  const now = new Date();

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATION_DIRECTORY.map(
    (dest, idx) => ({
      url: `${baseUrl}/destinations/${dest.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: idx < 6 ? 0.9 : 0.8,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...destinationRoutes,
  ];
}
