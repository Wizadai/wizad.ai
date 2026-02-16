import HomePageClient from "./HomePageClient";
import {
  PublicPaginatedPosterTypeListResponse,
  PublicTagListResponse,
  PublicCreatorListResponse,
} from "@/types/poster";
import { Metadata } from "next";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Metadata for the homepage
export const metadata: Metadata = {
  title: "Wizad - AI Designer Powered by Real Creators",
  description: "Build your brand with personalized content in one click — powered by global creators.",
  openGraph: {
    title: "Wizad - AI Designer Powered by Real Creators",
    description: "Build your brand with personalized content in one click — powered by global creators.",
    images: [
      {
        url: "/assets/hero-ai-creators.jpg",
        width: 1200,
        height: 630,
        alt: "Wizad AI Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wizad - AI Designer Powered by Real Creators",
    description: "Build your brand with personalized content in one click — powered by global creators.",
    images: ["/assets/hero-ai-creators.jpg"],
  },
};

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'edge'; // Required for Cloudflare Pages

// Server Component - fetches data at request time
export default async function HomePage() {
  // First fetch page 1 to get total count and determine the correct starting page
  const metadataRes = await fetch(
    `${API_BASE_URL}/poster/public/poster-types?page=1&page_size=8`,
    { cache: 'no-store' }
  );
  const metadata: PublicPaginatedPosterTypeListResponse = await metadataRes.json();
  
  // Calculate which page to fetch (last complete page if last page is incomplete)
  const totalCount = metadata.total_count || 0;
  const pageSize = 8;
  const totalPages = metadata.total_pages || 1;
  const lastPageItemCount = totalCount % pageSize;
  const isLastPageIncomplete = lastPageItemCount > 0 && lastPageItemCount < pageSize;
  
  // Fetch from the last complete page to avoid content flash
  const startingPage = isLastPageIncomplete && totalPages > 1 ? totalPages - 1 : totalPages;
  
  // Fetch initial data server-side
  const [postersRes, tagsRes, creatorsRes] = await Promise.all([
    fetch(`${API_BASE_URL}/poster/public/poster-types?page=${startingPage}&page_size=8`, {
      cache: 'no-store'
    }),
    fetch(`${API_BASE_URL}/poster/public/tags`, {
      cache: 'no-store'
    }),
    fetch(`${API_BASE_URL}/poster/public/creators`, {
      cache: 'no-store'
    })
  ]);

  const initialPosters: PublicPaginatedPosterTypeListResponse = await postersRes.json();
  const tagsData: PublicTagListResponse = await tagsRes.json();
  const creatorsData: PublicCreatorListResponse = await creatorsRes.json();

  return (
    <HomePageClient
      initialPosters={initialPosters}
      initialTags={tagsData.tags}
      initialCreators={creatorsData.creators}
    />
  );
}
