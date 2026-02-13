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
    
    // Fetch 2 pages at a time for better performance
    while (true) {
      const [response1, response2] = await Promise.all([
        fetch(
          `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
          { next: { revalidate: 3600 } }
        ),
        fetch(
          `${API_BASE_URL}/poster/public/poster-types?page=${page + 1}&page_size=${pageSize}`,
          { next: { revalidate: 3600 } }
        )
      ]);
      
      const data1 = response1.ok ? await response1.json() : null;
      const posters1 = data1?.poster_types || [];
      
      if (posters1.length === 0) break;
      
      allPosters.push(...posters1);
      
      if (posters1.length < pageSize) break;
      
      const data2 = response2.ok ? await response2.json() : null;
      const posters2 = data2?.poster_types || [];
      
      if (posters2.length === 0) break;
      
      allPosters.push(...posters2);
      
      if (posters2.length < pageSize) break;
      
      page += 2;
    }
    
    // Reverse the array so the last page (with potentially fewer items) becomes first
    allPosters.reverse();
    
    // Return only /ideas/[poster_type_name] URLs
    return allPosters.map((poster) => ({
      url: `${baseUrl}/ideas/${posterNameToSlug(poster.poster_type_name)}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
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
      lastModified: new Date(),
      changeFrequency: "daily" as const,
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
      lastModified: new Date(post.metadata.publishedAt),
      changeFrequency: "daily",
      priority: 0.5,
    };
    return site;
  });

  const posters = await getPosterPages();
  const creators = await getCreatorPages();

  const highPriorityStaticRoutes: MetadataRoute.Sitemap = [""].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    };
    return site;
  });

  const midPriorityStaticRoutes: MetadataRoute.Sitemap = [
    "/tutorials",
    "/social-media",
  ].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    };
    return site;
  });

  const dynamicRoutes: MetadataRoute.Sitemap = ["/blogs"].map((route) => {
    const site: Site = {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
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
