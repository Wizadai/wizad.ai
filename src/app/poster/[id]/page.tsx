import { notFound, redirect } from "next/navigation";
import { PublicPosterTypeSchema } from "@/types/poster";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Enable dynamic params to handle new posters not pre-rendered at build time
export const dynamicParams = true;

// Revalidate every 1 hour - pages will be regenerated in background when accessed
export const revalidate = 3600;

// Required for Cloudflare Pages
export const runtime = 'edge';

// Convert poster name to URL-friendly slug
function posterNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Fetch all poster IDs for static generation (for backward compatibility redirects)
export async function generateStaticParams() {
  try {
    const allPosters: PublicPosterTypeSchema[] = [];
    let page = 1;
    const pageSize = 100;
    
    while (true) {
      console.log(`[poster/id generateStaticParams] Fetching page ${page}...`);
      
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
        { cache: 'no-store' }
      );
      
      if (!response.ok) {
        console.error(`[poster/id generateStaticParams] Failed to fetch page ${page}`);
        break;
      }
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) break;
      
      allPosters.push(...posters);
      
      if (posters.length < pageSize) break;
      
      page++;
    }
    
    console.log(`\n=== Generated ${allPosters.length} poster ID redirects ===`);
    
    return allPosters.map((poster) => ({
      id: poster.poster_type_id.toString(),
    }));
  } catch (error) {
    console.error("[poster/id generateStaticParams] Error:", error);
    return [];
  }
}

// Fetch poster data from the listing endpoint by searching for the specific ID
async function getPosterData(id: string): Promise<PublicPosterTypeSchema | null> {
  try {
    const posterId = parseInt(id);
    
    if (isNaN(posterId) || posterId <= 0) {
      console.error(`[poster/id] Invalid poster ID: ${id}`);
      return null;
    }
    
    console.log(`[poster/id] Searching for poster ID: ${posterId}`);
    
    let page = 1;
    const maxPages = 50;
    
    while (page <= maxPages) {
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=100`,
        { next: { revalidate: 3600 } }
      );
      
      if (!response.ok) {
        if (page === 1) return null;
        break;
      }
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) return null;
      
      const poster = posters.find((p: PublicPosterTypeSchema) => p.poster_type_id === posterId);
      
      if (poster) {
        console.log(`[poster/id] Found poster ${id}: ${poster.poster_type_name}`);
        return poster;
      }
      
      page++;
    }
    
    return null;
  } catch (error) {
    console.error(`[poster/id] Error fetching poster ${id}:`, error);
    return null;
  }
}

// Redirect old /poster/[id] URLs to new /ideas/[poster_type_name] URLs
export default async function PosterByIdRedirectPage({ params }: { params: { id: string } }) {
  console.log(`[poster/id] Redirecting poster ID ${params.id} to /ideas route`);
  
  const posterType = await getPosterData(params.id);

  if (!posterType) {
    console.error(`[poster/id] Poster ${params.id} not found`);
    notFound();
  }

  const slug = posterNameToSlug(posterType.poster_type_name);
  console.log(`[poster/id] Redirecting to /ideas/${slug}`);
  
  // Permanent redirect to the new URL structure
  redirect(`/ideas/${slug}`);
}
