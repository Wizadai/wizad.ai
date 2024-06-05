import Image from "next/image";
import logo from "@/assets/logo-footer.png";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoMeta,
  BiLogoTwitter,
} from "react-icons/bi";
import SubscribeToNewsletter from "@/app/_elements/SubscribeToNewsletter";
import AppDownloadQRCode from "@/app/_elements/AppDownloadQR";
import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import { FaCheck } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col gap-2 w-full">
      <section className="flex flex-col gap-10 md:gap-20 justify-center items-center bg-hero-gradient md:bg-cover bg-bottom px-4 py-12 md:px-60 md:py-32">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full max-w-[1440px] mx-auto">
          <span className="italic font-medium text-center text-xl md:text-2xl max-w-2xl ">
            {`"You don't have a choice on whether you do social media, The question is how well you do it"`}
          </span>

          <h2 className="inline-flex text-5xl md:text-8xl font-hero text-center font-bold italic max-w-6xl">
            Start creating designs with Wizad.
          </h2>

          <span className="text-white/80 font-semibold text-center max-w-52 md:max-w-none md:text-2xl">
            Take charge of your brand by yourself and fire up.
          </span>

          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-10">
            <AppDownloadButton store="appstore" />
            <AppDownloadButton store="playstore" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full mx-auto">
          {[
            "Get started for free",
            "Generate on-brand designs instantly",
            "Unlimited Designs",
            "Mobile Friendly",
            "Android & Apple",
          ].map((text) => (
            <div className="flex gap-2 items-center text-white/70" key={text}>
              <FaCheck />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1720px] px-4 pt-12 md:px-24 md:pt-32 mx-auto gap-6 md:gap-16">
        <div className="flex flex-col bg-[#121212] justify-start rounded-3xl md:rounded-[40px] p-5 md:p-14">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">
            The easiest way to get on brand designs for your business.
          </h2>
          <a
            href="https://www.producthunt.com/posts/wizad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wizad"
            target="_blank"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=453705&theme=dark"
              alt="Wizad - Social&#0032;media&#0032;posters&#0032;in&#0032;one&#0032;click&#0032;with&#0032;GenAI&#0032; | Product Hunt"
              className="w-[250px] h-[54px]"
              width="250"
              height="54"
            />
          </a>
          <span className="flex flex-col justify-start text-zinc-400 text-sm mt-6 md:mt-20">
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L1}</p>
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L2}</p>
            <p>{process.env.NEXT_PUBLIC_ADDRESS_L3}</p>
          </span>

          <div className="my-9 md:my-8 h-px bg-zinc-800" />

          <div className="flex flex-wrap justify-between text-sm">
            <a
              className="text-zinc-500 hover:text-zinc-400 transition-all duration-200 ease-in-out"
              href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL}
              rel="license"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              className="text-zinc-500 hover:text-zinc-400 transition-all duration-200 ease-in-out"
              href={process.env.NEXT_PUBLIC_TERMS_AND_CONDITIONS_URL}
              rel="license"
              target="_blank"
            >
              Terms & Conditions
            </a>
            <a
              className="text-zinc-500 hover:text-zinc-400 transition-all duration-200 ease-in-out"
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`}
              target="_blank"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_MAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-11">
          <div className="flex flex-col bg-[#121212] justify-start rounded-3xl md:rounded-[40px] p-5 md:p-14">
            <h2 className="text-xl md:text-2xl mb-6 md:mb-7 text-white/70 font-light">
              Blog & Newsletter
            </h2>
            <span className="text-white/80 font-light">
              Receive must-read articles and trends on social media, branding,
              marketing, and ever changing AI creative industry.
            </span>

            <SubscribeToNewsletter />
          </div>

          <div className="flex flex-row justify-between">
            {[
              {
                title: "Instagram",
                logo: (
                  <BiLogoInstagramAlt className="size-5 md:size-10 text-zinc-200" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
              },
              {
                title: "LinkedIn",
                logo: (
                  <BiLogoLinkedinSquare className="size-5 md:size-10 text-zinc-200" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
              },
              {
                title: "X",
                logo: (
                  <BiLogoTwitter className="size-5 md:size-10 text-zinc-200" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_X,
              },
              {
                title: "Meta",
                logo: (
                  <BiLogoMeta className="size-5 md:size-10 text-zinc-200" />
                ),
                link: process.env.NEXT_PUBLIC_SOCIAL_META,
              },
            ].map((social) => (
              <a
                className="bg-[#121212] p-7 rounded-3xl"
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

        <div className="hidden md:flex flex-col bg-[#121212] justify-start rounded-3xl md:rounded-[40px] py-8 px-14">
          <AppDownloadQRCode />
        </div>
      </section>

      <Image src={logo} alt="Logo of Wizad" className="w-full" />
    </footer>
  );
}
