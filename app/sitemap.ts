import type { MetadataRoute } from "next";
import { hospital } from "@/data/hospital";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = hospital.url;
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/doctor`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
