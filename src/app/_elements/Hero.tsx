import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import PostersDesktop from "@/assets/posters-desktop.png";
import PostersMobile from "@/assets/posters-mobile.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col w-full bg-hero-gradient bg-cover bg-center">
      <div className="flex flex-col gap-6 md:gap-10 mt-24 mx-auto text-center px-4 max-w-6xl">
        <h1 className="text-4xl md:text-9xl font-bold font-hero">
          Never run out of social media designs, anymore.
        </h1>
        <span className="font-medium text-base md:text-2xl text-white/70">
          <p>
            Still messing with long prompts or spending hours editing canva
            templates?
          </p>
          <p>
            Wizad gives you design in a click. Start creating form your mobile
            now!
          </p>
        </span>
        <div className="flex flex-col md:flex-row gap-4 items-center md:gap-10 mx-auto">
          <AppDownloadButton store="playstore" />
          <AppDownloadButton store="appstore" />
        </div>
      </div>
      <div>
        <Image
          src={PostersDesktop}
          alt="Posters made with Wizad"
          className="w-full hidden md:block"
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
