"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicPosterTypeSchema, CreatorDetailSchema } from "@/types/poster";
import { useRef, useState, useEffect } from "react";
import { useVideoPlayback } from "./VideoPlaybackContext";

interface PosterCardProps {
  poster: PublicPosterTypeSchema;
  onCreatorClick?: (creator: CreatorDetailSchema) => void;
}

export default function PosterCard({ poster, onCreatorClick }: PosterCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentPlayingId, setCurrentPlaying } = useVideoPlayback();
  const videoId = `video-${poster.poster_type_id}`;

  // Pause this video if another video starts playing
  useEffect(() => {
    if (currentPlayingId !== videoId && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentPlayingId, videoId, isPlaying]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setCurrentPlaying(null);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setCurrentPlaying(videoId);
      }
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800/50 to-transparent backdrop-blur-sm">
      {/* Main Preview Image/Video - Full container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
        {poster.main_preview_video_url ? (
          <>
            <video
              ref={videoRef}
              src={poster.main_preview_video_url}
              className="h-full w-full object-cover cursor-pointer"
              loop
              playsInline
              onClick={handleVideoClick}
            />
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10"
                onClick={handleVideoClick}
              >
                <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm hover:bg-black/70 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : poster.icon_url ? (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <Image
              src={poster.icon_url}
              alt={poster.poster_type_name}
              width={120}
              height={120}
              className="object-contain"
              unoptimized
            />
          </div>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-gray-400 text-4xl">🎨</div>
          </div>
        )}

        {/* Top Right - Model Name and Credit */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 flex items-center gap-2">
            <span className="text-xs font-medium text-white">Model</span>
            <span className="text-xs font-semibold text-white">{poster.default_model_name}</span>
            <div className="flex items-center gap-1 bg-emerald-600 rounded px-1.5 py-0.5">
              <span className="text-[10px] font-bold text-white">{poster.credit_required}</span>
                <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section - Overlayed on video */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          {/* Creator Info */}
          {poster.creator && (
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onCreatorClick) {
                    onCreatorClick(poster.creator!);
                  }
                }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 hover:bg-white/20 transition-colors cursor-pointer"
              >
                {poster.creator.profile_photo_url ? (
                  <Image
                    src={poster.creator.profile_photo_url}
                    alt={poster.creator.creator_name}
                    width={20}
                    height={20}
                    className="rounded-full"
                    unoptimized
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-[10px] text-white">👤</span>
                  </div>
                )}
                <span className="text-xs font-medium text-white">
                  {poster.creator.username || poster.creator.creator_name}
                </span>
              </button>
            </div>
          )}

          {/* Description */}
          <h3 className="text-sm font-medium text-white mb-3 line-clamp-2">
            {poster.poster_type_name}
          </h3>
          
          {/* Use this idea button */}
          <Link
            href={`/poster/${poster.poster_type_id}`}
            onClick={() => {
              // Cache the poster data for instant loading on detail page
              sessionStorage.setItem(`poster_${poster.poster_type_id}`, JSON.stringify(poster));
            }}
            className="block w-full bg-white hover:bg-gray-100 text-black font-semibold text-sm py-2.5 px-4 rounded-full transition-all duration-200 shadow-lg text-center"
          >
            Use this idea
          </Link>
        </div>
      </div>
    </div>
  );
}
