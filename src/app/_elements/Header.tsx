"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import logo from "@/assets/logo-full.png";
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
        dialogClass="w-full max-w-sm sm:max-w-md md:max-w-[1200px]"
      >
        <div className="h-screen">
          <nav className="flex flex-col h-full items-center gap-10 text-white p-20">
            <NavLinks />
          </nav>
        </div>
      </Slideover>

      <div className="flex justify-between items-center p-4 md:mx-44">
        <div className="flex gap-10 items-center">
          <Image
            src={logo}
            alt="Logo of Wizad"
            width={284}
            className="w-24 md:w-72"
          />
          <nav className="hidden md:flex md:items-center md:gap-10">
            <NavLinks />
          </nav>
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href={process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || ""}
            className="flex items-center p-3 md:px-6 gap-3"
          >
            <span className="hidden md:block">Chat with us</span>
            <FaWhatsapp className="size-5 md:size-6" />
          </Link>
          <button
            className="block md:hidden p-3"
            onClick={() => setDrawerOpened(true)}
          >
            <IoMenu className="size-5 md:size-6" />
          </button>
        </div>
      </div>
    </>
  );
}

const NavLinks = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/professional">Professional</Link>
      <Link href="/blogs">Blogs & News</Link>
      <Link href="/pricing">Pricing</Link>
    </>
  );
};
