import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import PostersDesktop from "@/../public/assets/posters-desktop.png";
import PostersMobile from "@/../public/assets/posters-mobile.png";
import HeroGradient from "@/../public/bg-hero-gradient.png";
import MadeWithWizad from "@/../public/assets/made-with-wizad.png";
import Image from "next/image";
import HoveringLogo from "./HoveringLogo";

export default function HeroSection() {
  return (
    <section className="relative flex w-full flex-col overflow-clip">
      <div className="mx-auto mt-24 flex max-w-6xl flex-col gap-6 px-4 text-center md:gap-10">
        <h1 className="max-w-[51.5625rem] font-hero text-4xl/none font-bold italic md:text-8xl/none">
          <div>Never run out</div>
          <div>of social media</div>
          <div>designs, anymore.</div>
        </h1>
        <span className="text-base font-medium leading-relaxed text-white md:text-xl md:font-normal md:leading-7">
          <p>
            Still messing with long prompts or spending hours editing canva
            templates?
          </p>
          <p className="hidden md:block">
            Wizad gives you on brand posters in a click. Start creating from
            your mobile now.
          </p>
          <p className="block md:hidden">
            Wizad gives you on brand posters in a click.
            <br />
            Start creating form your mobile now.
          </p>
        </span>
        <div className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <AppDownloadButton store="playstore" />
          <AppDownloadButton store="appstore" />
        </div>
      </div>
      <div>
        <div className="hidden w-0 md:block md:w-full">
          <HoveringLogo
            logo={
              <Image
                src={MadeWithWizad}
                alt="Made with Wizad"
                className="pt-10 w-[40%]"
                style={{ objectFit: "contain" }}
              />
            }
          >
            <Image
              src={PostersDesktop}
              alt="Posters made with Wizad"
              className="hidden w-0 md:block md:w-full"
            />
          </HoveringLogo>
        </div>
        <Image
          src={PostersMobile}
          alt="Posters made with Wizad"
          className="w-full md:hidden md:w-0"
        />
        <span className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="absolute -top-20 left-0 -z-50 h-full w-full md:-top-56">
        <Image
          src={HeroGradient}
          alt="Hero Gradient"
          fill
          loading="eager"
          quality={1}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </section>
  );
}
