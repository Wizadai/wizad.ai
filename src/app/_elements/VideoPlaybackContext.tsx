"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface VideoPlaybackContextType {
  currentPlayingId: string | null;
  setCurrentPlaying: (id: string | null) => void;
}

const VideoPlaybackContext = createContext<VideoPlaybackContextType | undefined>(undefined);

export function VideoPlaybackProvider({ children }: { children: React.ReactNode }) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  const setCurrentPlaying = useCallback((id: string | null) => {
    setCurrentPlayingId(id);
  }, []);

  return (
    <VideoPlaybackContext.Provider value={{ currentPlayingId, setCurrentPlaying }}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}

export function useVideoPlayback() {
  const context = useContext(VideoPlaybackContext);
  if (context === undefined) {
    throw new Error("useVideoPlayback must be used within a VideoPlaybackProvider");
  }
  return context;
}
