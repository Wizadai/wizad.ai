"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import logo from "@/../public/assets/logo-full.webp";
import { useState } from "react";
import Slideover from "@/components/Slideover";

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <Slideover
        open={drawerOpened}
        setOpen={setDrawerOpened}
        slideFrom="right"
        backdropBlur
        dialogClass="w-full max-w-sm sm:max-w-md md:max-w-[75rem]"
      >
        <div className="h-screen">
          <nav className="flex h-full flex-col items-center gap-10 p-20 text-white">
            <NavLinks onClick={() => setDrawerOpened(false)} />
          </nav>
        </div>
      </Slideover>

      <div className="flex items-center justify-between p-4 md:mx-44">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo of Wizad"
              width={284}
              className="w-24 transform transition-transform duration-500 hover:scale-110 md:w-56"
            />
          </Link>
          <nav className="hidden md:flex md:items-center md:gap-10 md:text-[0.8rem]">
            <NavLinks onClick={() => {}} />
          </nav>
        </div>

        <div className="flex h-10 items-center justify-center gap-3">
          <Link
            href={process.env.NEXT_PUBLIC_YOUTUBE_DEMO_LINK || ""}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#181818] p-2 px-3 hover:bg-white/20 md:px-5"
          >
            <span className="block text-xs font-normal md:text-sm">
              Watch demo
            </span>
            <FaYoutube className="hidden size-5 text-red-600 md:block md:size-6" />
          </Link>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#181818] md:hidden">
            <button onClick={() => setDrawerOpened(true)}>
              <IoMenu className="size-6 md:size-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const NavLinks = ({ onClick }: { onClick: () => void }) => {
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);

  return (
    <>
      <Link
        href="/"
        className="transform transition-transform duration-500 hover:scale-110"
        onClick={() => onClick()}
      >
        Home
      </Link>
      <Link
        href="/blogs"
        className="transform transition-transform duration-500 hover:scale-110"
        onClick={() => onClick()}
      >
        Blogs & News
      </Link>
      <div className="relative">
        <button
          onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
          className="flex items-center gap-1 transform transition-transform duration-500 hover:scale-110"
        >
          For Enterprises
          <IoChevronDown
            className={`size-4 transition-transform duration-300 ${
              isEnterpriseOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isEnterpriseOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-[#181818] shadow-lg overflow-hidden z-50">
            <Link
              href="/enterprises/insurance-banking"
              className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200"
              onClick={() => {
                setIsEnterpriseOpen(false);
                onClick();
              }}
            >
              Insurance Brands
            </Link>
            <Link
              href="/enterprises/retail-chains"
              className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200"
              onClick={() => {
                setIsEnterpriseOpen(false);
                onClick();
              }}
            >
              Supermarket Chains
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
