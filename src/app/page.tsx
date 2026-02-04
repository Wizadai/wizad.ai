import HomePageClient from "./HomePageClient";
import {
  PublicPaginatedPosterTypeListResponse,
  PublicTagListResponse,
  PublicCreatorListResponse,
} from "@/types/poster";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

// Server Component - fetches data at build/request time
export default async function HomePage() {
  // Fetch initial data server-side
  const [postersRes, tagsRes, creatorsRes] = await Promise.all([
    fetch(`${API_BASE_URL}/poster/public/poster-types?page=1&page_size=8`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    }),
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

  return (
    <HomePageClient
      initialPosters={initialPosters}
      initialTags={tagsData.tags}
      initialCreators={creatorsData.creators}
    />
  );
}
