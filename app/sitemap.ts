import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/breloki-z-paracordu",
    "/phone-strapy",
    "/phone-strap-crossbody",
    "/bransoletki-z-paracordu",
    "/akcesoria-z-paracordu",
  ];

  return routes.map((route, index) => ({
    url: `https://surfcraftstories.pl${route || "/"}`,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
