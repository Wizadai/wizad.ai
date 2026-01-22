import { getBlogPosts } from "@/app/blogs/utils";
import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_URL!;
const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

type Site = ArrayElement<MetadataRoute.Sitemap>;

async function getPosterPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const allPosters: { poster_type_id: number }[] = [];
    let page = 1;
    const pageSize = 100;
    
    while (true) {
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
        { cache: 'no-store' }
      );
      
      if (!response.ok) break;
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) break;
      
      allPosters.push(...posters);
      
      if (posters.length < pageSize) break;
      
      page++;
    }
    
    return allPosters.map((poster) => ({
      url: `${baseUrl}/poster/${poster.poster_type_id}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating poster sitemap:", error);
    return [];
  }
}

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

  const posters = await getPosterPages();

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
    ...posters,
  ];
}
