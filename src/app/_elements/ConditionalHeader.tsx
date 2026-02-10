"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Don't show the old header on pages that have their own headers
  if (
    pathname === "/" || 
    pathname.startsWith("/poster/") || 
    pathname.startsWith("/ideas/") || 
    pathname.startsWith("/creator/") ||
    pathname === "/join-creator"
  ) {
    return null;
  }

  return <Header />;
}
