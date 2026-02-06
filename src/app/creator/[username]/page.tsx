import { notFound } from "next/navigation";
import { CreatorDetailSchema } from "@/types/poster";
import HomePageClient from "../../HomePageClient";
import {
  PublicPaginatedPosterTypeListResponse,
  PublicTagListResponse,
  PublicCreatorListResponse,
} from "@/types/poster";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Enable dynamic params to handle new creators not pre-rendered at build time
export const dynamicParams = true;

// Revalidate every 1 hour - pages will be regenerated in background when accessed
export const revalidate = 3600;

// Fetch all creators for static generation at build time
export async function generateStaticParams() {
  try {
    console.log(`[creator generateStaticParams] Fetching creators...`);
    
    const response = await fetch(
      `${API_BASE_URL}/poster/public/creators`,
      { cache: 'no-store' }
    );
    
    if (!response.ok) {
      console.error(`[creator generateStaticParams] Failed to fetch creators`);
      return [];
    }
    
    const data = await response.json();
    const creators = data.creators || [];
    
    console.log(`\n=== Generated ${creators.length} creator routes for /creator/* ===`);
    
    return creators.map((creator: CreatorDetailSchema) => ({
      username: creator.username,
    }));
  } catch (error) {
    console.error("[creator generateStaticParams] Error:", error);
    return [];
  }
}

// Find creator by username
async function getCreatorByUsername(username: string): Promise<CreatorDetailSchema | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/poster/public/creators`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const creators = data.creators || [];
    
    const creator = creators.find((c: CreatorDetailSchema) => c.username === username);
    
    if (creator) {
      console.log(`[creator] Found: ${creator.creator_name} (@${username})`);
    }
    
    return creator || null;
  } catch (error) {
    console.error(`[creator] Error:`, error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { username: string } }) {
  const creator = await getCreatorByUsername(params.username);
  
  if (!creator) {
    return { title: "Creator Not Found" };
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/creator/${params.username}`;
  
  return {
    title: `${creator.creator_name} (@${creator.username}) - Wizad.ai`,
    description: creator.bio || `View poster designs by ${creator.creator_name} on Wizad.ai`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${creator.creator_name} (@${creator.username})`,
      description: creator.bio || "",
      images: creator.profile_photo_url ? [creator.profile_photo_url] : [],
      url: canonicalUrl,
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${creator.creator_name} (@${creator.username})`,
      description: creator.bio || "",
      images: creator.profile_photo_url ? [creator.profile_photo_url] : [],
    },
  };
}

// Server Component - renders homepage with creator filter applied
export default async function CreatorPage({ params }: { params: { username: string } }) {
  const creator = await getCreatorByUsername(params.username);

  if (!creator) {
    notFound();
  }

  // Fetch initial data with creator filter applied
  const [postersRes, tagsRes, creatorsRes] = await Promise.all([
    fetch(
      `${API_BASE_URL}/poster/public/poster-types?page=1&page_size=8&creator_id=${creator.creator_id}`,
      { next: { revalidate: 3600 } }
    ),
    fetch(`${API_BASE_URL}/poster/public/tags`, {
      next: { revalidate: 3600 }
    }),
    fetch(`${API_BASE_URL}/poster/public/creators`, {
      next: { revalidate: 3600 }
    })
  ]);

  const initialPosters: PublicPaginatedPosterTypeListResponse = await postersRes.json();
  const tagsData: PublicTagListResponse = await tagsRes.json();
  const creatorsData: PublicCreatorListResponse = await creatorsRes.json();

  // Render the homepage with creator pre-selected
  return (
    <HomePageClient
      initialPosters={initialPosters}
      initialTags={tagsData.tags}
      initialCreators={creatorsData.creators}
      preSelectedCreatorId={creator.creator_id}
      totalPages={initialPosters.total_pages || 1}
    />
  );
}
