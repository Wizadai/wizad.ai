import AppDownloadButton from "@/app/_elements/AppDownloadButton";
import { FaCheck } from "react-icons/fa";

export default function PreFooter() {
  return (
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
  );
}
