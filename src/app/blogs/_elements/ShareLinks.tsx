import { FaThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import RiLink from "@/../public/assets/ri_link-m.png";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import Image from "next/image";

export default function ShareLinks() {
  return (
    <div className="flex items-center gap-6 text-white/70">
      <button className="aspect-square rounded bg-neutral-800 p-2">
        <Image
          src={RiLink}
          alt="ri-link"
          placeholder="blur"
          className="size-5 transform transition-transform duration-500 hover:scale-125"
          style={{ objectFit: "contain" }}
        />
      </button>
      <button>
        <BiLogoInstagramAlt className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button>
        <BiLogoLinkedinSquare className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button>
        <BsTwitterX className="size-5 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button>
        <BiLogoFacebookSquare className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
      <button>
        <FaThreads className="size-6 transform transition-transform duration-500 hover:scale-125" />
      </button>
    </div>
  );
}
