import { getBlogPosts } from "@/app/blogs/utils";
import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_URL!;

type Site = ArrayElement<MetadataRoute.Sitemap>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: MetadataRoute.Sitemap = (await getBlogPosts()).map((post) => {
    const site: Site = {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      changeFrequency: "never",
      priority: 0.7,
    };
    return site;
  });

  const highPriorityStaticRoutes: MetadataRoute.Sitemap = [""].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "never",
      priority: 1,
    };
    return site;
  });

  const midPriorityStaticRoutes: MetadataRoute.Sitemap = [
    "/tutorials",
    "/social-media",
  ].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "never",
      priority: 0.7,
    };
    return site;
  });

  const dynamicRoutes: MetadataRoute.Sitemap = ["/blogs"].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1,
    };
    return site;
  });

  return [
    ...highPriorityStaticRoutes,
    ...midPriorityStaticRoutes,
    ...dynamicRoutes,
    ...blogs,
  ];
}
