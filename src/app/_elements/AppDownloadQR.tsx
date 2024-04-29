"use client";

import { StoreLinks } from "@/app/_elements/AppDownloadButton";
import Image from "next/image";
import { useState } from "react";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export default function AppDownloadQRCode() {
  const [selected, setSelected] = useState<keyof typeof StoreLinks>("appstore");

  return (
    <>
      <div className="flex gap-6 mx-auto pb-6">
        <button
          className={`rounded-lg text-lg flex gap-3 justify-center items-center px-3 py-2 ${
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
          className={`rounded-lg text-lg flex gap-3 justify-center items-center px-2 py-1 ${
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

      <div className="p-8 bg-white rounded-xl">
        <Image
          className="size-72"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=288x288&data=${StoreLinks[selected]}`}
          title="Scan the QR code to start experiencing Wizad now!"
          alt="QR Code for the selected store"
          width={288}
          height={288}
        />
      </div>

      <span className="text-white/70 text-2xl mx-auto text-center pt-6">
        Scan QR to download the mobile app
      </span>
    </>
  );
}
