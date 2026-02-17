import { notFound } from "next/navigation";
import { PublicPosterTypeSchema } from "@/types/poster";
import ClientPosterPage from "../../poster/[id]/ClientPosterPage";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Enable dynamic params to handle new poster types not pre-rendered at build time
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
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

// Fetch all poster types for static generation at build time
export async function generateStaticParams() {
  try {
    const allPosters: PublicPosterTypeSchema[] = [];
    let page = 1;
    const pageSize = 100;
    
    // Fetch 2 pages at a time for better performance
    while (true) {
      console.log(`[ideas generateStaticParams] Fetching pages ${page} and ${page + 1}...`);
      
      const [response1, response2] = await Promise.all([
        fetch(
          `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
          { cache: 'no-store' }
        ),
        fetch(
          `${API_BASE_URL}/poster/public/poster-types?page=${page + 1}&page_size=${pageSize}`,
          { cache: 'no-store' }
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
    
    console.log(`\n=== Generated ${allPosters.length} poster type routes for /ideas/* ===`);
    
    return allPosters.map((poster) => ({
      poster_type_name: posterNameToSlug(poster.poster_type_name),
    }));
  } catch (error) {
    console.error("[ideas generateStaticParams] Error:", error);
    return [];
  }
}

// Fetch poster data by searching for the name
async function getPosterDataBySlug(slugName: string): Promise<PublicPosterTypeSchema | null> {
  try {
    console.log(`[ideas] Searching for poster with slug: ${slugName}`);
    
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
      
      if (posters.length === 0) break;
      
      const poster = posters.find((p: PublicPosterTypeSchema) => 
        posterNameToSlug(p.poster_type_name) === slugName
      );
      
      if (poster) {
        console.log(`[ideas] Found poster: ${poster.poster_type_name}`);
        return poster;
      }
      
      page++;
    }
    
    return null;
  } catch (error) {
    console.error(`[ideas] Error finding poster:`, error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { poster_type_name: string } }) {
  const posterType = await getPosterDataBySlug(params.poster_type_name);
  
  if (!posterType) {
    return {
      title: "Poster Type Not Found",
    };
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/ideas/${params.poster_type_name}`;
  
  const currentVideoUrl = posterType.preview_videos && posterType.preview_videos.length > 0
    ? posterType.preview_videos[0].video_url
    : posterType.main_preview_video_url;
  
  const description = posterType.description_to_display || `Watch how to create amazing ${posterType.poster_type_name} with Wizad.ai. Video tutorial and examples.`;
  
  return {
    title: `${posterType.poster_type_name} Video Tutorial - Wizad.ai`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${posterType.poster_type_name} - Video Tutorial`,
      description,
      images: posterType.icon_url ? [posterType.icon_url] : [],
      url: canonicalUrl,
      type: 'video.other',
      videos: currentVideoUrl ? [{ url: currentVideoUrl }] : [],
    },
    twitter: {
      card: 'player',
      title: posterType.poster_type_name,
      description,
      images: posterType.icon_url ? [posterType.icon_url] : [],
      players: currentVideoUrl ? {
        playerUrl: currentVideoUrl,
        streamUrl: currentVideoUrl,
        width: 1080,
        height: 1920,
      } : undefined,
    },
  };
}

export default async function PosterTypeByNamePage({ params }: { params: { poster_type_name: string } }) {
  console.log(`[ideas] Rendering page for: ${params.poster_type_name}`);
  
  const posterType = await getPosterDataBySlug(params.poster_type_name);

  if (!posterType) {
    console.error(`[ideas] Poster type "${params.poster_type_name}" not found`);
    notFound();
  }

  console.log(`[ideas] Successfully loaded: ${posterType.poster_type_name}`);
  return <ClientPosterPage posterType={posterType} />;
}
