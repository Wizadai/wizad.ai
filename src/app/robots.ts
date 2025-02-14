import { baseUrl } from "@/app/sitemap";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: ["/bg-hero-gradient.webp"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
