import HomePageClient from "./HomePageClient";
import {
  PublicPaginatedPosterTypeListResponse,
  PublicTagListResponse,
  PublicCreatorListResponse,
} from "@/types/poster";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'edge'; // Required for Cloudflare Pages

// Server Component - fetches data at request time
export default async function HomePage() {
  // Fetch initial data server-side (page 1 for now, client will reverse)
  const [postersRes, tagsRes, creatorsRes] = await Promise.all([
    fetch(`${API_BASE_URL}/poster/public/poster-types?page=1&page_size=8`, {
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
