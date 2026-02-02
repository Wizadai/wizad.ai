"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import HomeHeader from "@/app/_elements/HomeHeader";
import PosterCard from "@/app/_elements/PosterCard";
import { VideoPlaybackProvider } from "@/app/_elements/VideoPlaybackContext";
import {
  PublicPaginatedPosterTypeListResponse,
  TagSchema,
  CreatorDetailSchema,
} from "@/types/poster";

const API_BASE_URL = "https://wizad-dev-backend.azurewebsites.net";

interface HomePageClientProps {
  initialPosters: PublicPaginatedPosterTypeListResponse;
  initialTags: TagSchema[];
  initialCreators: CreatorDetailSchema[];
  preSelectedCreatorId?: number;
}

function HomePageContent({ initialPosters, initialTags, initialCreators, preSelectedCreatorId }: HomePageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearchQuery = searchParams.get('search') || '';
  const urlCreatorId = searchParams.get('creator');
  
  const [posterTypes, setPosterTypes] = useState<PublicPaginatedPosterTypeListResponse>(initialPosters);
  const [tags] = useState<TagSchema[]>(initialTags);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [creators] = useState<CreatorDetailSchema[]>(initialCreators);
  const [selectedCreator, setSelectedCreator] = useState<CreatorDetailSchema | null>(null);
  const [searchInput, setSearchInput] = useState(urlSearchQuery);
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  // Set selected creator from URL params or preSelectedCreatorId
  useEffect(() => {
    if (preSelectedCreatorId && creators.length > 0) {
      const creator = creators.find(c => c.creator_id === preSelectedCreatorId);
      if (creator) {
        setSelectedCreator(creator);
      }
    } else if (urlCreatorId && creators.length > 0) {
      const creator = creators.find(c => c.creator_id === parseInt(urlCreatorId));
      if (creator) {
        setSelectedCreator(creator);
      }
    }
  }, [urlCreatorId, creators, preSelectedCreatorId]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch poster types when filters change
  useEffect(() => {
    // Skip initial load - we already have initialPosters
    if (page === 1 && !searchQuery && selectedTags.length === 0 && !selectedCreator) {
      return;
    }

    const fetchPosterTypes = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          page_size: pageSize.toString(),
        });

        if (searchQuery.trim()) {
          params.append("search", searchQuery.trim());
        }

        selectedTags.forEach((tagId) => {
          params.append("tag_ids", tagId.toString());
        });

        if (selectedCreator) {
          params.append("creator_id", selectedCreator.creator_id.toString());
        }

        const url = `${API_BASE_URL}/poster/public/poster-types?${params.toString()}`;
        const response = await fetch(url);
        const data: PublicPaginatedPosterTypeListResponse = await response.json();
        setPosterTypes(data);
      } catch (error) {
        console.error("Error fetching poster types:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosterTypes();
  }, [page, searchQuery, selectedTags, selectedCreator]);

  const handleTagClick = (tagId: number) => {
    setSelectedTags((prev) => {
      if (prev.includes(tagId)) {
        return prev.filter((id) => id !== tagId);
      } else {
        return [...prev, tagId];
      }
    });
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
  };

  const handleCreatorClick = (creator: CreatorDetailSchema) => {
    setSelectedCreator(creator);
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <VideoPlaybackProvider>
      <div className="min-h-screen bg-black text-white">
        <HomeHeader onSearch={handleSearchChange} searchValue={searchInput} />

        <main className="container mx-auto px-4 py-6">
          {/* Category/Tag Filter Bar */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex gap-3 pb-2">
              <button
                onClick={() => {
                  setSelectedTags([]);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedTags.length === 0
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {tags.map((tag) => (
                <button
                  key={tag.tag_id}
                  onClick={() => handleTagClick(tag.tag_id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedTags.includes(tag.tag_id)
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tag.tag_name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Creator Info */}
          {selectedCreator && (
            <div className="mb-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-6 relative">
              <button
                onClick={() => {
                  setSelectedCreator(null);
                  setPage(1);
                }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                aria-label="Clear filter"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {selectedCreator.profile_photo_url ? (
                    <Image
                      src={selectedCreator.profile_photo_url}
                      alt={selectedCreator.username}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-2 border-purple-500"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl">
                      👤
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pr-8">
                  <h2 className="text-xl font-bold text-white mb-1">{selectedCreator.username}</h2>
                  {selectedCreator.bio && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedCreator.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          )}

          {/* Poster Grid */}
          {!loading && posterTypes && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {posterTypes.poster_types.map((poster) => (
                  <PosterCard 
                    key={poster.poster_type_id} 
                    poster={poster}
                    onCreatorClick={handleCreatorClick}
                  />
                ))}
              </div>

              {/* Pagination */}
              {posterTypes.total_pages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-400">
                    Page {page} of {posterTypes.total_pages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(posterTypes.total_pages, p + 1))}
                    disabled={page === posterTypes.total_pages}
                    className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Results Count */}
              <div className="text-center mt-4 text-sm text-gray-400">
                Showing {(page - 1) * pageSize + 1} to{" "}
                {Math.min(page * pageSize, posterTypes.total_count)} of{" "}
                {posterTypes.total_count} poster types
              </div>
            </>
          )}

          {/* Empty State */}
          {!loading && posterTypes && posterTypes.poster_types.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No poster types found. Try adjusting your filters.
              </p>
            </div>
          )}
        </main>
      </div>
    </VideoPlaybackProvider>
  );
}

export default function HomePageClient(props: HomePageClientProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    }>
      <HomePageContent {...props} />
    </Suspense>
  );
}
