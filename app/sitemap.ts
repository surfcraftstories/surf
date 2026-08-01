import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://surfcraftstories.pl/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
