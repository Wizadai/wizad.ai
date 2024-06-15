"use client";
import { useRouter } from "next/navigation";
import { StoreLinks } from "@/app/_elements/AppDownloadButton";
import { getOS } from "@/utils/getOS";

export default function GetStartedNow() {
  const router = useRouter();
  
  const routeToStore = () => {
    const os = getOS();
    if (os === "iOS") {
      router.push(StoreLinks.appstore);
    } else if (os === "Android") {
      router.push(StoreLinks.playstore);
    } else {
      router.push(StoreLinks.playstore);
    }
  };

  return (
    <button
      className="relative z-10 inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent hover:cursor-pointer"
      onClick={routeToStore}
    >
      Get started now
      <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
    </button>
  );
}
