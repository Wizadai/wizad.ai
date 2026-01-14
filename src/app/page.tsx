"use client";

import { useEffect, useState } from "react";
import HomeHeader from "@/app/_elements/HomeHeader";
import PosterCard from "@/app/_elements/PosterCard";
import { VideoPlaybackProvider } from "@/app/_elements/VideoPlaybackContext";
import {
  PublicPaginatedPosterTypeListResponse,
  PublicTagListResponse,
  TagSchema,
} from "@/types/poster";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://0.0.0.0:8000";

export default function HomePage() {
  const [posterTypes, setPosterTypes] =
    useState<PublicPaginatedPosterTypeListResponse | null>(null);
  const [tags, setTags] = useState<TagSchema[]>([]);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  // Fetch tags on mount
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/poster/public/tags`);
        const data: PublicTagListResponse = await response.json();
        setTags(data.tags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  // Debounced search - trigger search after 500ms pause
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1); // Reset to first page when search changes
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch poster types when filters change
  useEffect(() => {
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

        const url = `${API_BASE_URL}/poster/public/poster-types?${params.toString()}`;
        console.log("Fetching:", url, "Page:", page);
        
        const response = await fetch(url);
        const data: PublicPaginatedPosterTypeListResponse =
          await response.json();
        
        console.log("Received data:", {
          page: data.current_page,
          total: data.total_count,
          items: data.poster_types.length
        });
        
        setPosterTypes(data);
      } catch (error) {
        console.error("Error fetching poster types:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosterTypes();
  }, [page, searchQuery, selectedTags]);

  const handleTagClick = (tagId: number) => {
    setSelectedTags((prev) => {
      if (prev.includes(tagId)) {
        return prev.filter((id) => id !== tagId);
      } else {
        return [...prev, tagId];
      }
    });
    setPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
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
                <PosterCard key={poster.poster_type_id} poster={poster} />
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
                  onClick={() =>
                    setPage((p) => Math.min(posterTypes.total_pages, p + 1))
                  }
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
