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
import { Andada_Pro, Exo } from "next/font/google";

const exo = Exo({ style: "italic", weight: ["600"] });

export default function Features() {
  return (
    <div className="px-4 md:px-28 md:py-20">
      <section className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6">
        <div className="w-full md:w-2/5">
          <div className="flex flex-col pb-5">
            <h1 className="text-xl font-medium md:text-7xl/tight">
              Built for one purpose -
            </h1>
            <h1 className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-xl font-medium text-transparent md:text-7xl/tight">
              To grow your brand.
            </h1>
          </div>

          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="flex w-full flex-col justify-between">
              <span className="text-base text-white/80 md:max-w-md md:pt-5 md:text-2xl">
                Wizad ensures brand identity by generating designs specific to
                your industry by keeping the Colors, Fonts, Tone and Imagery in
                mind.
              </span>

              <div className="flex max-w-min flex-col space-y-4 divide-y whitespace-nowrap">
                {[
                  "100% Unique and creative licensing",
                  "Generate multiple options in seconds",
                  "Keep brand uniformity across all designs",
                ].map((text, key) => (
                  <p key={key} className="flex items-center gap-4 pt-4">
                    {/* <span className="font-medium text-xl md:text-3xl">
                      {first}
                    </span> */}
                    <span className="font-light md:text-xl">{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full min-w-80 max-w-[680px] md:w-2/5"
          src={FeaturesScreen1}
          alt="Features"
        />
      </section>

      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-6 px-4 pb-10 pt-12 md:flex-row-reverse md:items-center md:gap-20 md:px-60 md:pb-24 md:pt-32">
        <div className="flex flex-1 flex-col justify-between gap-6 md:gap-20">
          <h1 className="text-2xl font-medium md:text-5xl">
            Optimized for all your social media design needs
          </h1>

          <span className="space-y-4 text-base font-light text-white/80 md:max-w-md md:pt-5 md:text-xl">
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
      <section className="flex flex-col items-center justify-center px-4 py-6">
        <div className="flex flex-wrap rounded-3xl bg-[#131313] p-3 md:p-10">
          <div className="w-full md:w-2/5">
            <div className="flex items-center space-x-2">
              <Image src={PartyPopper} alt="Party Popper" />
              <span className={`${exo.className} text-sm`}>
                Festival & Trending Days
              </span>
            </div>
            <h1 className="text-wrap py-4 text-3xl font-medium">
              Don&apos;t let a trend pass you by
            </h1>
            <span className="space-y-6 text-base font-light text-white/80 md:max-w-md md:pt-5">
              <p>
                Effortlessly captivate your audience with eye-catching designs
                tailored to festivals, celebrations, special days and trending
                topics.
              </p>
              <p>
                From #NewYear to #Christmas - No matter the occasion, ensure
                your brand shines bright.
              </p>
              <p className="font-semibold text-white">
                Choose the day -&gt; Generate Designs!
              </p>
              <p className="relative inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </span>
          </div>
          <div className="w-full min-w-80 pt-10 md:w-3/5">
            <Image src={SpecialDays} alt="Special Days" />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-screen-2xl flex-col items-start gap-6 px-4 pb-12 md:flex-row md:gap-14 md:px-60 md:pb-32">
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

      <section className="mx-4 my-12 flex max-w-screen-2xl flex-col items-center justify-center gap-10 rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB] text-black md:mx-auto md:w-full md:gap-12">
        <h2 className="max-w-5xl px-4 py-6 text-center font-hero text-4xl font-bold italic md:pb-10 md:pt-28 md:text-7xl">
          Get multiple design options in a single click.
        </h2>
        <Image className="w-56 md:w-96" src={FeaturesScreen3} alt="Features" />
      </section>

      <section className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 px-4 py-12 md:gap-0 md:px-32 md:py-32">
        <h1 className="max-w-7xl text-3xl font-medium md:text-7xl/tight">
          Made for emerging brand owners, online, e-commerce, instagram sellers,
          creators, marketers and more.
        </h1>

        <div className="grid grid-cols-1 gap-10 md:-mt-12 md:grid-cols-2 md:gap-20">
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

          <div className="flex md:row-span-2 md:items-end md:justify-end md:px-6">
            <Image
              className="md:w-[680px]"
              src={FeaturesScreen4}
              alt="Features"
            />
          </div>

          <div className="flex flex-col items-start justify-end gap-10">
            <span className="text-2xl md:text-3xl">
              {`“Best choice if you want to market online. Wizad will create daily posters for posts and stories, so you don’t need to worry on it! Thankyou team Wizad, long way to go!”`}
            </span>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Image
                src={TestimonialHighlightAuthor}
                className="size-[52px] overflow-clip rounded-full"
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

      <section className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 overflow-clip px-4 py-12 md:gap-20 md:px-60 md:py-32">
        <div className="flex flex-col items-center justify-center gap-12 text-white/70">
          <span className="text-sm font-medium md:text-xl">
            Businesses that already designs with Wizad
          </span>
          <div className="flex gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((entry, key) => (
              <div
                key={key}
                className="h-8 w-20 animate-pulse rounded-lg bg-zinc-800"
              ></div>
            ))}
          </div>
        </div>

        <div className="md:pr-8">
          <span className="text-3xl font-medium text-white/80 md:text-5xl/tight">
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

        <div className="flex flex-col gap-7 md:flex-row md:gap-20">
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
    </div>
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
    <div className="flex flex-1 flex-col gap-1 border-t border-white/80 pt-5 md:pt-8">
      <div className="pb-4 text-2xl">{icon}</div>
      <h2 className="font-hero text-3xl font-bold md:text-lg">{title}</h2>
      <span className="font-light text-white/80">{desc}</span>
    </div>
  );
};
