import { baseUrl } from "@/app/sitemap";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: ["/bg-hero-gradient.png"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
