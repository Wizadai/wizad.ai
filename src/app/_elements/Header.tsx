"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import WhatsApp from "@/../public/assets/whatsapp.png";
import { FaYoutube } from "react-icons/fa";

import logo from "@/../public/assets/logo-full.png";
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
          <Link
            href={process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || ""}
            className="flex items-center gap-2 rounded-lg bg-[#181818] p-2 hover:bg-white/20 md:px-5"
          >
            <span className="hidden md:block md:text-sm md:font-normal">
              Chat with us on
            </span>
            <div className="size-5 md:size-6">
              <Image src={WhatsApp} alt="whatsapp" />
            </div>
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
    </>
  );
};
