import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://plan.7ka.fit";
  const now = new Date();

  const curatedDestinations = [
    "kyoto",
    "tokyo",
    "beijing",
    "shanghai",
    "xian",
    "chengdu",
    "qingdao",
    "yanji",
    "xiamen",
    "hongkong",
    "singapore",
    "taipei",
  ];

  const destinationRoutes: MetadataRoute.Sitemap = curatedDestinations.map(
    (dest) => ({
      url: `${baseUrl}/?dest=${dest}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/?lang=en`,
          zh: `${baseUrl}/?lang=zh`,
        },
      },
    },
    {
      url: `${baseUrl}/?lang=en`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/?lang=zh`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...destinationRoutes,
  ];
}
