"use client";
import { BsTwitterX } from "react-icons/bs";
import RiLink from "@/../public/assets/ri_link-m.png";
import { BiLogoLinkedinSquare, BiLogoFacebookSquare } from "react-icons/bi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { useState } from "react";

export default function ShareLinks({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  const pathname = usePathname();

  const [copied, setCopied] = useState(false);

  // @ts-ignore
  const linkToCopy = getBaseUrl() + pathname;

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareOnLinkedIn = () => {
    const urlToShare = encodeURIComponent(linkToCopy);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${title} - ${summary} Link: ${urlToShare}`;
    window.open(linkedInUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const urlToShare = encodeURIComponent(linkToCopy);
    const twitterUrl = `https://twitter.com/share?url=${urlToShare}&text=${summary}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const urlToShare = encodeURIComponent(linkToCopy);
    const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${urlToShare}`;
    window.open(facebookShareUrl, "_blank");
  };

  return (
    <div className="flex items-center gap-6 text-white/70">
      <button
        className="relative aspect-square rounded bg-neutral-800 p-2"
        onClick={copyLinkToClipboard}
      >
        {copied ? (
          <span className="absolute -top-8 left-1/2 z-10 min-w-max -translate-x-1/2 rounded bg-neutral-920 px-3 py-1 text-xs text-white shadow-md after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-x-8 after:border-b-0 after:border-t-8 after:border-x-transparent after:border-t-neutral-920 after:content-['']">
            Copied to clipboard!
          </span>
        ) : null}
        <Image
          src={RiLink}
          alt="ri-link"
          className="size-5 transform transition-transform duration-500 hover:scale-125"
          style={{ objectFit: "contain" }}
        />
      </button>
      <button onClick={shareOnLinkedIn}>
        <BiLogoLinkedinSquare className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button onClick={shareOnTwitter}>
        <BsTwitterX className="size-5 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button onClick={shareOnFacebook}>
        <BiLogoFacebookSquare className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
    </div>
  );
}
