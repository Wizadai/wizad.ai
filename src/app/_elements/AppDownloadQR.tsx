"use client";

import { StoreLinks } from "@/app/_elements/AppDownloadButton";
import Image from "next/image";
import { useState } from "react";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export default function AppDownloadQRCode() {
  const [selected, setSelected] = useState<keyof typeof StoreLinks>("appstore");

  return (
    <>
      <div className="mx-auto flex gap-6 pb-6">
        <button
          className={`flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-lg ${
            selected === "appstore"
              ? "bg-[#282828] text-white"
              : "bg-[#1D1D1D] bg-opacity-50 text-zinc-500"
          } transition-all duration-200 ease-in-out`}
          onClick={() => setSelected("appstore")}
        >
          <IoLogoAppleAppstore className="text-2xl" />
          <span>App Store</span>
        </button>
        <button
          className={`flex items-center justify-center gap-3 rounded-lg px-2 py-1 text-lg ${
            selected === "playstore"
              ? "bg-[#282828] text-white"
              : "bg-[#1D1D1D] bg-opacity-50 text-white/60"
          }`}
          onClick={() => setSelected("playstore")}
        >
          <IoLogoGooglePlaystore className="text-2xl" />
          <span>Play Store</span>
        </button>
      </div>

      <div className="rounded-xl mx-auto aspect-square bg-white p-8">
        <Image
          className="size-auto"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=288x288&data=${StoreLinks[selected]}`}
          title="Scan the QR code to start experiencing Wizad now!"
          alt="QR Code for the selected store"
          width={288}
          height={288}
        />
      </div>

      <span className="mx-auto pt-6 text-center text-2xl text-white/70">
        Scan QR to download the mobile app
      </span>
    </>
  );
}
