"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import HomeHeader from "@/app/_elements/HomeHeader";
import Footer from "@/app/_elements/Footer";
import { PublicPosterTypeSchema } from "@/types/poster";

interface ClientPosterPageProps {
  posterType: PublicPosterTypeSchema;
}

export default function ClientPosterPage({ posterType }: ClientPosterPageProps) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const handleSearchChange = (query: string) => {
    setSearchInput(query);
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handlePrevPreview = () => {
    if (!posterType?.preview_videos || posterType.preview_videos.length === 0) return;
    setCurrentPreviewIndex((prev) => 
      prev === 0 ? posterType.preview_videos!.length - 1 : prev - 1
    );
  };

  const handleNextPreview = () => {
    if (!posterType?.preview_videos || posterType.preview_videos.length === 0) return;
    setCurrentPreviewIndex((prev) => 
      prev === posterType.preview_videos!.length - 1 ? 0 : prev + 1
    );
  };

  // Generate FAQ Schema
  const faqSchema = posterType.faqs && posterType.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": posterType.faqs
      .sort((a, b) => a.order_to_display - b.order_to_display)
      .map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
  } : null;

  // Generate Video Schema for main preview video
  const videoSchema = posterType.main_preview_video_url ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": posterType.poster_type_name,
    "description": posterType.description_to_display || "",
    "thumbnailUrl": posterType.icon_url || "",
    "contentUrl": posterType.main_preview_video_url,
    "uploadDate": new Date().toISOString(),
  } : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* FAQ Schema */}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Video Schema */}
      {videoSchema && (
        <Script
          id="video-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      <HomeHeader showNavigation={false} onSearch={handleSearchChange} searchValue={searchInput} />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="order-2 md:order-1">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {posterType.poster_type_name}
              </h1>

              {/* Details */}
              <div className="space-y-3 mb-8">
                {/* Creator */}
                {posterType.creator && (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-medium min-w-[80px]">Creator</span>
                    <Link
                      href={`/creator/${posterType.creator.username}`}
                      className="flex items-center gap-2 hover:bg-gray-800/50 rounded-full px-2 py-1 transition-colors cursor-pointer"
                    >
                      {posterType.creator.profile_photo_url ? (
                        <Image
                          src={posterType.creator.profile_photo_url}
                          alt={posterType.creator.creator_name}
                          width={24}
                          height={24}
                          className="rounded-full"
                          loading="lazy"
                          unoptimized
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                          <span className="text-xs text-white">👤</span>
                        </div>
                      )}
                      <span className="text-white font-medium">
                        {posterType.creator.username || posterType.creator.creator_name}
                      </span>
                    </Link>
                  </div>
                )}

                {/* Model */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-medium min-w-[80px]">Model</span>
                  <span className="text-white font-semibold">{posterType.default_model_name}</span>
                </div>

                {/* Credits */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-medium min-w-[80px]">Credits</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">{posterType.credit_required}</span>
                    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                {posterType.tags && posterType.tags.length > 0 && (
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-medium min-w-[80px]">Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {posterType.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {posterType.description_to_display || "No description available."}
                </p>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="order-1 md:order-2">
              <div className="sticky top-24">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                  {/* Preview Label with Navigation */}
                  <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Preview</span>
                    {posterType.preview_videos && posterType.preview_videos.length > 0 && (
                      <div className="flex items-center gap-2">
                        {posterType.preview_videos.length > 1 && (
                          <button
                            onClick={handlePrevPreview}
                            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                            aria-label="Previous preview"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}
                        <span className="text-xs text-gray-400">
                          {currentPreviewIndex + 1} / {posterType.preview_videos.length}
                        </span>
                        {posterType.preview_videos.length > 1 && (
                          <button
                            onClick={handleNextPreview}
                            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                            aria-label="Next preview"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Preview Content */}
                  <div className="p-4 flex justify-center bg-black">
                    <div className="relative aspect-[9/16] w-full max-w-sm">
                      {posterType.preview_videos && posterType.preview_videos.length > 0 ? (
                        <video
                          key={posterType.preview_videos[currentPreviewIndex].video_url}
                          src={posterType.preview_videos[currentPreviewIndex].video_url}
                          className="w-full h-full object-cover rounded-lg"
                          controls
                          loop
                          playsInline
                        />
                      ) : posterType.main_preview_video_url ? (
                        <video
                          src={posterType.main_preview_video_url}
                          className="w-full h-full object-cover rounded-lg"
                          controls
                          loop
                          playsInline
                        />
                      ) : posterType.icon_url ? (
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center rounded-lg">
                          <Image
                            src={posterType.icon_url}
                            alt={posterType.poster_type_name}
                            width={200}
                            height={200}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center rounded-lg">
                          <div className="text-gray-400 text-6xl">🎨</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Use this idea button */}
                  <div className="p-4">
                    <Link
                      href="https://app.wizad.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-center py-3 px-6 rounded-full transition-colors shadow-lg"
                    >
                      Use this idea
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs - Full Width Below */}
          {posterType.faqs && posterType.faqs.length > 0 && (
            <div className="w-full">
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="grid gap-4">
                {posterType.faqs
                  .sort((a, b) => a.order_to_display - b.order_to_display)
                  .map((faq) => (
                    <div key={faq.faq_id} className="bg-gray-800/50 rounded-lg p-6">
                      <h3 className="font-semibold text-white mb-3 text-lg">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
