"use client";

import React, { useState, useRef } from "react";

export default function TestimonialsWrapper({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      buttonRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
    <div
        className={`relative ${isExpanded ? "h-auto" : "h-[46.875rem] md:h-[50rem]"} overflow-hidden md:mx-auto md:max-w-9xl`}
      >
        {children}
        {!isExpanded && (
          <span className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent" />
        )}
      </div>
      <button
        className="mx-auto max-w-max rounded-md bg-[#2E2E2E] px-6 py-2"
        onClick={handleExpand}
        ref={buttonRef}
      >
        See {isExpanded ? "less" : "more"}
      </button>
      </>
  );
}