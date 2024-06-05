import FeaturesScreen1 from "@/assets/feature-screen1.png";
import FeaturesScreen2 from "@/assets/feature-screen2.png";
import FeaturesScreen3 from "@/assets/feature-screen3.png";
import FeaturesScreen4 from "@/assets/feature-screen4.png";
import TestimonialHighlightAuthor from "@/assets/testimonial-highlight-author-avatar.png";
import PartyPopper from "@/assets/party-popper.png";
import SpecialDays from "@/assets/special-days.png";
import Image from "next/image";
import { ReactNode } from "react";
import {
  BiSolidCalendar,
  BiSolidOffer,
  BiSolidParty,
  BiSolidTimeFive,
} from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { Exo } from "next/font/google";

const exo = Exo({ style: "italic", weight: ["600"] });

export default function Features() {
  return (
    <>
      <section className="flex flex-col gap-6 md:gap-12 w-full max-w-screen-2xl px-4 py-12 md:px-60 md:py-32 mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-7xl/tight font-medium">
            Built for one purpose.
          </h1>
          <h1 className="text-2xl md:text-7xl/tight font-medium bg-gradient-to-r from-[#E293FE] to-[#38CEFB] inline-block text-transparent bg-clip-text">
            To grow your brand.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div className="flex flex-col gap-6 justify-between w-full">
            <span className="text-base md:text-2xl text-white/80 md:max-w-md md:pt-5">
              Generate designs instantly, based on your poster type requirement
              on brand.
            </span>

            <div className="flex flex-col space-y-4 divide-y max-w-min whitespace-nowrap">
              {[
                ["0", "Zero Dependency on resources"],
                ["5s", "Generate multiple options in seconds"],
                ["100%", "Unique and creative licensing"],
              ].map(([first, second], key) => (
                <p key={key} className="flex gap-4 items-center pt-4">
                  <span className="font-medium text-xl md:text-3xl">
                    {first}
                  </span>
                  <span className="font-light md:text-xl">{second}</span>
                </p>
              ))}
            </div>
          </div>

          <Image src={FeaturesScreen1} alt="Features" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-20 w-full max-w-screen-2xl px-4 pt-12 pb-10 md:px-60 md:pt-32 md:pb-24 mx-auto">
        <div className="flex-1 flex flex-col justify-between gap-6 md:gap-20">
          <h1 className="text-2xl md:text-5xl font-medium">
            Optimized for all your social media design needs
          </h1>

          <span className="text-base md:text-xl text-white/80 md:max-w-md md:pt-5 space-y-4 font-light">
            <p>
              Say goodbye to the hassle of hiring designers or spending hours
              tweaking templates.
            </p>
            <p>Launch new marketing campaigns faster than ever before.</p>
          </span>
        </div>

        <Image className="flex-1" src={FeaturesScreen2} alt="Features" />
      </section>

      {/* Don't let trend pass you */}
      <section className="flex flex-col px-4 py-6 items-center justify-center">
        <div className="flex flex-wrap bg-[#131313] rounded-3xl p-3">
          <div className="max-w-md">
            <div className="flex items-center space-x-2">
              <Image src={PartyPopper} alt="Party Popper" />
              <span className={`${exo.className} text-sm`}>
                Festival & Trending Days
              </span>
            </div>
            <h1 className="text-3xl font-medium text-wrap py-4">
              Don&apos;t let a trend pass you by
            </h1>
            <span className="text-base text-white/80 md:max-w-md md:pt-5 space-y-6 font-light">
              <p>
                Effortlessly captivate your audience with eye-catching designs
                tailored to festivals, celebrations, special days and trending
                topics.
              </p>
              <p>
                From #NewYear to #Christmas - No matter the occasion, ensure your
                brand shines bright.
              </p>
              <p className="font-semibold text-white">
                Choose the day -&gt; Generate Designs!
              </p>
              <p className="font-semibold bg-gradient-to-r from-[#E293FE] to-[#38CEFB] inline-block text-transparent bg-clip-text relative">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </span>
          </div>
          <div className="w-full">
           <Image src={SpecialDays} alt="Special Days" />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start gap-6 md:gap-14 w-full max-w-screen-2xl px-4 pb-12 md:px-60 md:pb-32 mx-auto">
        <FeatureTile
          icon={<BiSolidCalendar />}
          title="Post daily"
          desc="Every day is the best day for market your business. Be in-front of your customers mind everyday."
        />
        <FeatureTile
          icon={<BiSolidParty />}
          title="Festival & Trending days"
          desc="Don't miss a trending day or topic without a content from your brand. Announce festival offers without anyones help."
        />
        <FeatureTile
          icon={<BiSolidOffer />}
          title="Product & Offer posts"
          desc="Don't miss a trending day or topic without a content from your brand. Announce festival offers without anyones help."
        />
        <FeatureTile
          icon={<IoGameController />}
          title="Gamified Content"
          desc="Make people entertained with tailor made games of your brand."
        />
      </section>

      <section className="flex flex-col items-center justify-center md:w-full gap-10 md:gap-12 mx-4 md:mx-auto my-12 max-w-screen-2xl rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB] text-black">
        <h2 className="font-hero text-4xl px-4 md:text-7xl font-bold italic max-w-5xl text-center py-6 md:pt-28 md:pb-10">
          Get multiple design options in a single click.
        </h2>
        <Image className="w-56 md:w-96" src={FeaturesScreen3} alt="Features" />
      </section>

      <section className="flex flex-col gap-6 md:gap-0 w-full max-w-screen-2xl px-4 py-12 md:px-32 md:py-32 mx-auto">
        <h1 className="text-3xl md:text-7xl/tight font-medium max-w-7xl">
          Made for emerging brand owners, online, e-commerce, instagram sellers,
          creators, marketers and more.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:-mt-12">
          <div className="flex items-end md:pt-20 md:text-xl">
            <span>
              <p>
                No need to hire expensive agencies and freelance designers
                anymore. Wizad is an agency in your phone.
              </p>
              <br />
              <p>
                Each poster will be uniquely designed for you, with your brand
                colours, font choices, brand personality, and brand tone.
              </p>
            </span>
          </div>

          <div className="flex md:justify-end md:items-end md:row-span-2 md:px-6">
            <Image
              className="md:w-[680px]"
              src={FeaturesScreen4}
              alt="Features"
            />
          </div>

          <div className="flex flex-col gap-10 justify-end items-start">
            <span className="text-2xl md:text-3xl">
              {`“Best choice if you want to market online. Wizad will create daily posters for posts and stories, so you don’t need to worry on it! Thankyou team Wizad, long way to go!”`}
            </span>

            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <Image
                src={TestimonialHighlightAuthor}
                className="rounded-full overflow-clip size-[52px]"
                width={52}
                height={52}
                alt="Amrutha S Kammath"
              />

              <span className="flex flex-col justify-start">
                <p className="font-medium">Amrutha S Kammath</p>
                <p className="text-sm text-white/80">
                  Owner and Operations Head of Over Treasures, Kochi
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col items-center justify-center md:w-full mx-4 md:mx-auto my-12 max-w-screen-2xl rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#2CF3A6] text-black overflow-clip">
        <h2 className="font-hero text-4xl px-4 md:text-7xl font-bold italic max-w-5xl text-center py-6 md:pt-28 md:pb-5">
          Get started for free & Generate designs instantly!
        </h2>
        <span>Try Wizad with our free starter plan.</span>
        <div className="md:hidden flex justify-end w-full">
          <Image
            className="w-72 mt-12 antialiased"
            src={GetStartedMobile}
            alt="Get Started"
          />
        </div>
        <div className="hidden md:flex gap-20 mt-9">
          <Image
            className="w-96 antialiased"
            src={GetStartedDesktop1}
            alt="Features"
          />
          <Image
            className="w-96 pt-16 antialiased"
            src={GetStartedDesktop2}
            alt="Features"
          />
          <Image
            className="w-96 pt-40 antialiased"
            src={GetStartedDesktop3}
            alt="Features"
          />
        </div>
      </section> */}

      <section className="flex flex-col gap-8 md:gap-20 w-full max-w-screen-2xl px-4 py-12 md:px-60 md:py-32 mx-auto overflow-clip">
        <div className="flex flex-col justify-center items-center gap-12 text-white/70">
          <span className="font-medium text-sm md:text-xl">
            Businesses that already designs with Wizad
          </span>
          <div className="flex gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((entry, key) => (
              <div
                key={key}
                className="w-20 h-8 bg-zinc-800 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        <div className="md:pr-8">
          <span className="text-white/80 text-3xl md:text-5xl/tight font-medium">
            <p>
              Wizad is now used by{" "}
              <span className="text-white">10K+ business owners</span> to create
              designs, grow their social media and improve the brand positioning
              — without any extensive design knowledge.
            </p>
            <br />
            <p>
              Since we launched, people around the world have created{" "}
              <span className="text-white">200K+ marketing collaterals</span>,{" "}
              inspiring us to make wizad even better.
            </p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-7 md:gap-20">
          <FeatureTile
            icon={<BiSolidTimeFive />}
            title="Save your valuable time"
            desc="Still taking 5 long days to create your marketing collaterals? Now get it done in 5 seconds!"
          />
          <FeatureTile
            icon={<TbCardsFilled />}
            title="Get multiple design options"
            desc="Get multiple design options on a single click. No need to play around with templates and do endless design iterations."
          />
          <FeatureTile
            icon={<FaPiggyBank />}
            title="Save design cost"
            desc="Wizad is a whole design agency in your phone. Take charge of your brand marketing by yourself."
          />
        </div>
      </section>
    </>
  );
}

const FeatureTile = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-1 border-t border-white/80 pt-5 md:pt-8">
      <div className="text-2xl pb-4">{icon}</div>
      <h2 className="font-bold text-3xl md:text-lg font-hero">
        {title}
      </h2>
      <span className="font-light text-white/80">{desc}</span>
    </div>
  );
};
