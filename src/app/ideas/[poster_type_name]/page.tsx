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
    
    while (true) {
      console.log(`[ideas generateStaticParams] Fetching page ${page}...`);
      
      const response = await fetch(
        `${API_BASE_URL}/poster/public/poster-types?page=${page}&page_size=${pageSize}`,
        { cache: 'no-store' }
      );
      
      if (!response.ok) {
        console.error(`[ideas generateStaticParams] Failed to fetch page ${page}`);
        break;
      }
      
      const data = await response.json();
      const posters = data.poster_types || [];
      
      if (posters.length === 0) break;
      
      allPosters.push(...posters);
      
      if (posters.length < pageSize) break;
      
      page++;
    }
    
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
