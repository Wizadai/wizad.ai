"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import WhatsApp from "@/../public/assets/whatsapp.png";

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
            <NavLinks />
          </nav>
        </div>
      </Slideover>

      <div className="flex items-center justify-between p-4 md:mx-44">
        <div className="flex items-center gap-10">
          <Image
            src={logo}
            alt="Logo of Wizad"
            width={284}
            className="w-24 md:w-56"
          />
          <nav className="hidden md:flex md:items-center md:gap-10 md:text-[0.8rem]">
            <NavLinks />
          </nav>
        </div>

        <div className="flex h-10 items-center justify-center gap-3">
          <Link
            href={process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || ""}
            className="flex items-center gap-2 rounded-lg bg-[#181818] p-2 md:px-5"
          >
            <span className="hidden md:block md:text-sm md:font-normal">
              Chat with us on
            </span>
            <div className="size-5 md:size-6">
              <Image src={WhatsApp} alt="whatsapp" />
            </div>
          </Link>
          <div className="flex justify-center items-center h-9 w-9 rounded-lg bg-[#181818] md:hidden">
            <button onClick={() => setDrawerOpened(true)}>
              <IoMenu className="size-6 md:size-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const NavLinks = () => {
  return (
    <>
      <Link href="/">Home</Link>
      {/* <Link href="/professional">Professional</Link> */}
      <Link href="/blogs">Blogs & News</Link>
      {/* <Link href="/pricing">Pricing</Link> */}
    </>
  );
};
