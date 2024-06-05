import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import PostersDesktop from "@/assets/posters-desktop.png";
import PostersMobile from "@/assets/posters-mobile.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col bg-hero-gradient bg-cover bg-center">
      <div className="mx-auto mt-24 flex max-w-6xl flex-col gap-6 px-4 text-center md:gap-10">
        <h1 className="max-w-[825px] font-hero text-4xl font-bold md:text-8xl">
          <div>Never run out</div>
          <div>of social media</div>
          <div>designs, anymore.</div>
        </h1>
        <span className="text-base font-medium text-white md:text-xl">
          <p>
            Still messing with long prompts or spending hours editing canva
            templates?
          </p>
          <p>
            Wizad gives you on brand posters in a click. Start creating form
            your mobile now.
          </p>
        </span>
        <div className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-10">
          <AppDownloadButton store="playstore" />
          <AppDownloadButton store="appstore" />
        </div>
      </div>
      <div>
        <Image
          src={PostersDesktop}
          alt="Posters made with Wizad"
          className="hidden w-full md:block"
        />
        <Image
          src={PostersMobile}
          alt="Posters made with Wizad"
          className="w-full md:hidden"
        />
      </div>
    </section>
  );
}
