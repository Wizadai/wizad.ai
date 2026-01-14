"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Don't show the old header on the home page or poster detail pages (they have their own headers)
  if (pathname === "/" || pathname.startsWith("/poster/")) {
    return null;
  }

  return <Header />;
}
