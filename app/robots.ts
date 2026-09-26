import type { MetadataRoute } from "next";
import { hospital } from "@/data/hospital";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${hospital.url}/sitemap.xml`,
  };
}
