import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allyship.soa.ac.in";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/event`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/discover-soa`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/collaborate`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impact`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
