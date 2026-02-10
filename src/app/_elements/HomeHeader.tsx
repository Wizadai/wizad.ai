"use client";

import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import logo from "@/../public/assets/logo-full.webp";
import { useState } from "react";

interface HomeHeaderProps {
  onSearch?: (query: string) => void;
  searchValue?: string;
  showNavigation?: boolean;
}

export default function HomeHeader({ onSearch, searchValue = "", showNavigation = true }: HomeHeaderProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Wizad Logo"
            width={100}
            height={40}
            className="w-20 md:w-24"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4 md:mx-8">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="text"
              placeholder="Search keywords"
              value={searchValue}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 pl-10 bg-gray-900/50 border border-gray-700 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 -translate-y-1/2"
            >
              <IoSearch className="text-gray-400 size-5 hover:text-purple-400 transition-colors" />
            </button>
          </form>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {showNavigation && (
            <>
              <Link
                href="/how-to-use"
                className="hidden md:block text-sm font-medium hover:text-purple-400 transition-colors"
              >
                How to use?
              </Link>
              <Link
                href="/join-creator"
                className="hidden md:block text-sm font-medium hover:text-purple-400 transition-colors"
              >
                Join as creator
              </Link>
            </>
          )}
          <Link
            href="https://app.wizad.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 md:px-6 md:py-2.5 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-semibold transition-colors"
          >
            Open the App
          </Link>
        </div>
      </div>
    </div>
  );
}
