import { getBlogPosts } from "@/app/blogs/utils";
import { MetadataRoute } from "next";
import { PublicPosterTypeSchema, CreatorDetailSchema } from "@/types/poster";

export const baseUrl = process.env.NEXT_PUBLIC_URL!;
const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

type Site = ArrayElement<MetadataRoute.Sitemap>;

// Convert poster name to URL-friendly slug
function posterNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function getPosterPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const allPosters: PublicPosterTypeSchema[] = [];
    let page = 1;
    const pageSize = 100;
    
    while (true) {
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
        { 
          next: { revalidate: 3600 }
        }
      );
      
      if (!response.ok) break;
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) break;
      
      allPosters.push(...posters);
      
      if (posters.length < pageSize) break;
      
      page++;
    }
    
    // Return only /ideas/[poster_type_name] URLs
    return allPosters.map((poster) => ({
      url: `${baseUrl}/ideas/${posterNameToSlug(poster.poster_type_name)}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.9,
    }));
  } catch (error) {
    console.error("Error generating poster sitemap:", error);
    return [];
  }
}

async function getCreatorPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/poster/public/creators`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    const creators = data.creators || [];
    
    return creators.map((creator: CreatorDetailSchema) => ({
      url: `${baseUrl}/creator/${creator.username}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating creator sitemap:", error);
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
  const creators = await getCreatorPages();

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
    ...creators,
    ...posters,
  ];
}
