import Image from "next/image";
import logo from "../../../public/assets/logo-footer.png";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import SubscribeToNewsletter from "@/app/_elements/SubscribeToNewsletter";
import AppDownloadQRCode from "@/app/_elements/AppDownloadQR";
import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import { FaCheck } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="flex w-full flex-col gap-2">
      <section className="flex flex-col items-center justify-center gap-10 bg-hero-gradient bg-bottom px-4 py-12 md:gap-20 md:bg-cover md:px-60 md:py-32">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col flex-wrap items-center justify-center gap-6 md:gap-8">
          <span className="max-w-2xl text-center text-xl font-medium italic md:text-2xl">
            {`"You don't have a choice on whether you do social media, The question is how well you do it"`}
          </span>

          <h2 className="inline-flex max-w-6xl bg-gradient-to-br from-white to-[#4BF5B3] bg-clip-text text-center font-hero text-5xl font-bold italic text-transparent md:text-8xl">
            Start creating designs with Wizad.
          </h2>

          <span className="max-w-52 text-center font-semibold text-white/80 md:max-w-none md:text-2xl">
            Take charge of your brand by yourself and fire up.
          </span>

          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
            <AppDownloadButton store="playstore" />
            <AppDownloadButton store="appstore" />
          </div>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 md:flex-row">
          {[
            "Get started for free",
            "Generate on-brand designs instantly",
            "Unlimited Designs",
            "Mobile Friendly",
            "Android & Apple",
          ].map((text) => (
            <div className="flex items-center gap-2 text-white/70" key={text}>
              <FaCheck />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="rid-cols-1 mx-auto grid w-full max-w-[375px] gap-6 px-4 pt-12 md:max-w-[1920px] md:grid-cols-3 md:gap-16 md:px-24 md:pt-32">
        <div className="flex flex-col justify-start rounded-3xl bg-[#121212] p-5 md:rounded-[40px] md:p-14">
          <h2 className="mb-6 text-2xl font-medium md:text-3xl">
            AI designer that knows your brand. Powered by legendary models.
          </h2>
          <a
            className="py-6 md:py-14"
            href="https://www.producthunt.com/posts/wizad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wizad"
            target="_blank"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=453705&theme=dark"
              alt="Wizad - Social&#0032;media&#0032;posters&#0032;in&#0032;one&#0032;click&#0032;with&#0032;GenAI&#0032; | Product Hunt"
              className="h-[54px] w-[250px]"
              width="250"
              height="54"
            />
          </a>
          <span className="flex flex-col justify-start text-sm text-zinc-400">
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L1}</p>
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L2}</p>
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L3}</p>
          </span>

          <div className="my-9 h-px bg-zinc-800 md:my-8" />

          <div className="flex flex-wrap justify-between text-sm">
            <a
              className="text-zinc-500 transition-all duration-200 ease-in-out hover:text-zinc-400"
              href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL}
              rel="license"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              className="text-zinc-500 transition-all duration-200 ease-in-out hover:text-zinc-400"
              href={process.env.NEXT_PUBLIC_TERMS_AND_CONDITIONS_URL}
              rel="license"
              target="_blank"
            >
              Terms & Conditions
            </a>
            <a
              className="text-zinc-500 transition-all duration-200 ease-in-out hover:text-zinc-400"
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`}
              target="_blank"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_MAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-start rounded-3xl bg-[#121212] p-5 md:rounded-[40px] md:p-14">
            <h2 className="mb-6 text-xl font-light text-white/70 md:mb-7 md:text-3xl">
              Blog & Newsletter
            </h2>
            <span className="text-sm font-light text-white/80 md:text-xl">
              Receive must-read articles and trends on social media, branding,
              marketing, and ever changing AI creative industry.
            </span>

            <SubscribeToNewsletter />
          </div>

          <div className="flex flex-row justify-center space-x-2 md:space-x-6">
            {[
              {
                title: "Instagram",
                logo: (
                  <BiLogoInstagramAlt className="size-7 text-white/60 md:size-10" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
              },
              {
                title: "LinkedIn",
                logo: (
                  <BiLogoLinkedinSquare className="size-7 text-white/60 md:size-10" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
              },
              {
                title: "X",
                logo: (
                  <BsTwitterX className="size-7 text-white/60 md:size-10" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_X,
              },
              {
                title: "Meta",
                logo: (
                  <BiLogoFacebookSquare className="size-7 text-white/60 md:size-10" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_META,
              },
            ].map((social) => (
              <a
                className="flex aspect-square flex-grow items-center justify-center rounded-xl bg-[#121212] p-4 transition-all duration-200 ease-in-out hover:bg-zinc-800"
                key={social.link}
                href={social.link}
                title={`Wizad on ${social.title}`}
                target="_blank"
                rel="noreferrer"
              >
                {social.logo}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden aspect-square flex-col justify-start rounded-3xl bg-[#121212] px-14 py-8 md:flex md:rounded-[40px]">
          <AppDownloadQRCode />
        </div>
      </section>

      <Image src={logo} alt="Logo of Wizad" className="w-full" />
    </footer>
  );
}
