import { notFound } from "next/navigation";
import { PublicPosterTypeSchema } from "@/types/poster";
import ClientPosterPage from "./ClientPosterPage";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Enable dynamic params to handle new posters not pre-rendered at build time
export const dynamicParams = true;

// Revalidate every 1 hour - pages will be regenerated in background when accessed
export const revalidate = 3600;

// Fetch all poster IDs for static generation
export async function generateStaticParams() {
  try {
    const allPosters: { poster_type_id: number }[] = [];
    let page = 1;
    const pageSize = 100;
    
    while (true) {
      console.log(`Fetching page ${page}...`);
      
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
        { cache: 'no-store' }
      );
      
      if (!response.ok) {
        console.error(`Failed to fetch page ${page}`);
        break;
      }
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) break;
      
      allPosters.push(...posters);
      
      if (posters.length < pageSize) break;
      
      page++;
    }
    
    console.log(`\n=== Generated static params for ${allPosters.length} posters ===`);
    console.log(`Poster IDs: ${allPosters.map(p => p.poster_type_id).sort((a, b) => a - b).join(', ')}\n`);
    
    return allPosters.map((poster) => ({
      id: poster.poster_type_id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Fetch poster data from the listing endpoint by searching for the specific ID
async function getPosterData(id: string): Promise<PublicPosterTypeSchema | null> {
  try {
    const posterId = parseInt(id);
    
    // Validate ID
    if (isNaN(posterId) || posterId <= 0) {
      console.error(`[getPosterData] Invalid poster ID: ${id}`);
      return null;
    }
    
    console.log(`[getPosterData] Searching for poster ID: ${posterId}`);
    
    // Fallback: Search through paginated listing
    let page = 1;
    const maxPages = 50; // Safety limit to prevent infinite loops
    let previousPageCount = -1;
    
    // Search through pages until we find the poster
    while (page <= maxPages) {
      console.log(`[getPosterData] Fetching page ${page}...`);
      
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=100`,
        { 
          next: { revalidate: 3600 } // Cache for 1 hour, then revalidate
        }
      );
      
      if (!response.ok) {
        console.error(`[getPosterData] Failed to fetch page ${page} for poster ${id}. Status: ${response.status}`);
        
        // If first page fails, return null immediately
        if (page === 1) {
          return null;
        }
        
        // Otherwise, might have reached the end
        break;
      }
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      console.log(`[getPosterData] Page ${page}: found ${posters.length} posters`);
      
      // If we get 0 items, we've reached the end
      if (posters.length === 0) {
        console.log(`[getPosterData] No posters on page ${page}, ending search`);
        return null;
      }
      
      // Look for the poster with matching ID
      const poster = posters.find((p: PublicPosterTypeSchema) => p.poster_type_id === posterId);
      
      if (poster) {
        console.log(`[getPosterData] ✓ Found poster ${id}: ${poster.poster_type_name} on page ${page}`);
        return poster;
      }
      
      // If this page has fewer items than the previous page, we've likely reached the end
      // OR if we got the same count twice in a row and it's less than typical page size
      if (previousPageCount > 0 && posters.length < previousPageCount) {
        console.log(`[getPosterData] Decreasing page size (${posters.length} < ${previousPageCount}), likely at end`);
        return null;
      }
      
      previousPageCount = posters.length;
      page++;
    }
    
    console.error(`[getPosterData] Reached max pages limit (${maxPages}), poster ${id} not found`);
    return null;
  } catch (error) {
    console.error(`[getPosterData] Error fetching poster ${id}:`, error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const posterType = await getPosterData(params.id);
  
  if (!posterType) {
    return {
      title: "Poster Not Found",
    };
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/poster/${params.id}`;
  
  return {
    title: `${posterType.poster_type_name} - Wizad.ai`,
    description: posterType.description_to_display || `Create amazing ${posterType.poster_type_name} with Wizad.ai`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: posterType.poster_type_name,
      description: posterType.description_to_display || "",
      images: posterType.icon_url ? [posterType.icon_url] : [],
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: posterType.poster_type_name,
      description: posterType.description_to_display || "",
      images: posterType.icon_url ? [posterType.icon_url] : [],
    },
  };
}

export default async function PosterTypeDetailPage({ params }: { params: { id: string } }) {
  console.log(`[PosterPage] Rendering page for poster ID: ${params.id}`);
  
  const posterType = await getPosterData(params.id);

  if (!posterType) {
    console.error(`[PosterPage] Poster ${params.id} not found, returning 404`);
    notFound();
  }

  console.log(`[PosterPage] Successfully loaded poster: ${posterType.poster_type_name}`);
  return <ClientPosterPage posterType={posterType} />;
}
