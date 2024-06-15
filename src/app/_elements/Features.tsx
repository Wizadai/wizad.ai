import FeaturesScreen1 from "../../../public/assets/feature-screen1.png";
import FeaturesScreen2 from "../../../public/assets/feature-screen2.png";
import FeaturesScreen3 from "../../../public/assets/feature-screen3.png";
import FeaturesScreen4 from "../../../public/assets/feature-screen4.png";
import TestimonialHighlightAuthor from "../../../public/assets/testimonial-highlight-author-avatar.png";
import PartyPopper from "../../../public/assets/party-popper.png";
import SpecialDays from "../../../public/assets/special-days.png";
import SpecialDaysList from "../../../public/assets/special-days-list.png";
import Boxes from "../../../public/assets/boxes.png";
import Calender from "../../../public/assets/calender.png";
import Thunderbolt from "../../../public/assets/thunderbolt.png";
import Feature5M from "../../../public/assets/feature5-m.svg";
import Feature5D from "../../../public/assets/feature5-d.png";
import EmojiM from "../../../public/assets/emojis-M.png";
import EmojiD from "../../../public/assets/emojis-D.png";

import Image from "next/image";
import { ReactNode } from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";

export default function Features() {
  return (
    <div className="mx-auto max-w-[375px] px-4 md:max-w-[1920px] md:px-28 md:py-20">
      <section className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6 py-12 md:gap-20">
        <div className="w-full md:w-2/5">
          <h1 className="pb-4 text-2xl font-medium md:self-start md:pb-7 md:text-6xl/tight">
            {"Built for one purpose - "}
            <span className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-transparent md:inline">
              to grow your brand.
            </span>
          </h1>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="flex w-full flex-col justify-between gap-4 md:gap-7">
              <span className="text-base text-white/80 md:max-w-md md:pt-5 md:text-lg">
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
      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-6 py-12 md:flex-row-reverse md:items-center md:gap-20 md:pb-24 md:pt-32">
        <div className="flex w-full flex-col justify-between gap-6 md:w-2/5 md:gap-16 md:self-start md:pt-6">
          <h1 className="text-2xl font-medium md:text-6xl/tight">
            Optimized for all your social media design needs
          </h1>
          <span className="space-y-4 text-base font-light text-white/80 md:max-w-md md:pt-5 md:text-xl">
            <p>
              Say goodbye to the hassle of hiring designers or spending hours
              tweaking templates.
            </p>
          </span>
        </div>
        <Image
          className="w-full min-w-80 max-w-[680px] md:w-2/5"
          src={FeaturesScreen2}
          alt="Features"
        />
      </section>
      {/* Don't let trend pass you */}
      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center py-6 md:py-20">
        <div className="flex w-full flex-wrap rounded-t-3xl bg-neutral-920 p-3 md:p-10">
          <div className="w-full md:w-2/5">
            <div className="flex items-center space-x-2">
              <Image src={PartyPopper} alt="Party Popper" width={16} />
              <span className="font-hero text-sm font-medium italic md:text-xl">
                Festival & Trending Days
              </span>
            </div>
            <h1 className="text-wrap py-4 text-3xl font-medium md:text-6xl md:leading-tight">
              Don&apos;t let trends pass you by
            </h1>
            <span className="space-y-6 text-base font-light text-white/80 md:max-w-md md:pt-5 md:text-lg md:font-normal">
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
              <p className="relative inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent hover:cursor-pointer">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </span>
          </div>
          <div className="w-full min-w-80 pt-10 md:w-3/5">
            <Image src={SpecialDays} alt="Special Days" />
          </div>
        </div>
        <div className="relative h-[120px] w-full bg-neutral-920 md:h-64">
          <Image
            // sizes="(max-width: 1536px) 100vw, 33vw"
            src={SpecialDaysList}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "left",
            }}
            alt="Special Days List"
          />
        </div>
      </section>
      {/* Turn product images in your mobile gallery to professional posters */}
      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center py-6 md:py-20">
        <div className="flex w-full flex-wrap rounded-3xl bg-neutral-920 p-3 md:p-10">
          <div className="w-full md:w-3/5">
            <div className="flex items-center space-x-2">
              <Image src={Boxes} alt="Boxes" width={16} />
              <span
                className={`font-hero text-sm font-medium italic md:text-xl`}
              >
                Product Photography Posters
              </span>
            </div>
            <h1 className="text-wrap py-4 text-3xl font-medium md:text-6xl md:leading-tight">
              Turn product images in your mobile gallery to professional
              posters!
            </h1>
            <span className="space-y-6 text-base font-light text-white/80 md:max-w-md md:pt-5 md:text-lg md:font-normal">
              <p className="md:leading-normal">
                Save money on professional product photography with Wizad. Stand
                out with impressive product visuals!
              </p>
              <p className="font-semibold text-white">
                Upload from gallary -&gt; Generate Designs!
              </p>
              <p className="relative inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent hover:cursor-pointer">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </span>
          </div>
          {/* images */}
        </div>
      </section>
      {/* Be in-front of your customers everyday. */}
      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center py-6 md:py-20">
        <div className="relative flex w-full h-[750px] overflow-clip rounded-3xl bg-neutral-920 md:h-[850px]">
          <div className="w-full p-3 md:w-1/2 md:p-10">
            <div className="flex items-center space-x-2">
              <Image src={Calender} alt="Calender" width={16} />
              <span
                className={`font-hero text-sm font-medium italic md:text-xl`}
              >
                Post daily
              </span>
            </div>
            <h1 className="text-wrap py-4 text-3xl font-medium md:text-6xl md:leading-tight">
              Be in-front of your customers everyday.
            </h1>
            <span className="space-y-6 text-base font-light text-white/80 md:max-w-md md:pt-5 md:text-lg md:font-normal">
              <p className="md:leading-normal md:text-nowrap">
                {"Everyone knows consistent posting on social media is key to "}
                <br className="hidden md:block" />
                {"build brand awareness. But how? "}
              </p>
              <p className="md:leading-normal md:text-nowrap">
                {"Keeping your audience engaged with regular "}
                <br className="hidden md:block" />
                {"updates to increase your brand visibility is now "}
                <br className="hidden md:block" />
                {"much easier. Wizad gives you multiple options in "}
                <br className='hidden md:block' />
                different formats like stories, posts, etc.
              </p>
              <p className="font-semibold text-white">
                Generate Designs -&gt; Share to the world!
              </p>
              <p className="relative inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent hover:cursor-pointer">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </span>
          </div>
          <div className="absolute bottom-0 left-0 mx-auto max-h-[350px] w-full min-w-80 pt-10 md:hidden md:h-0 md:w-0">
            <Image
              src={EmojiM}
              alt="Emojis"
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="absolute hidden w-0 justify-end md:bottom-0 md:right-0 md:flex md:w-full">
            <Image
              src={EmojiD}
              alt="Emoji"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </section>

      {/* Take control of your marketing campaigns */}
      <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center py-6 md:py-20">
        <div className="relative flex h-[640px] w-full flex-col flex-wrap overflow-hidden rounded-3xl bg-neutral-920 px-3 pt-3 md:h-[1000px] md:px-10 md:pt-10">
          <div className="w-full md:w-3/5">
            <div className="flex items-center space-x-2">
              <Image src={Thunderbolt} alt="Thunderbolt" width={16} />
              <span
                className={`font-hero text-xs font-medium italic md:text-xl`}
              >
                Maximize Impact
              </span>
            </div>
            <h1 className="text-wrap py-4 text-3xl font-medium md:text-6xl md:leading-tight">
              Take control of your marketing campaigns
            </h1>
            <div className="space-y-6 text-base font-light text-white/80 md:pt-5 md:text-lg md:font-normal">
              <p className="md:leading-normal md:text-nowrap">
                {"Content wont be your bottle neck anymore. Wizad simplifies "}
                <br className="hidden md:block" />
                {"the entire marketing material creation process, empowering "}
                <br className="hidden md:block" />
                you to drive traffic, leads, and conversions for your business.
              </p>
              <p className="font-semibold text-white">
                Create content -&gt; Distribute!
              </p>
              <p className="relative inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text font-semibold text-transparent hover:cursor-pointer">
                Get started now
                <span className="absolute inset-x-0 bottom-0 h-[0.25] bg-gradient-to-r from-[#E293FE] to-[#38CEFB]"></span>
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 mx-auto max-h-[350px] w-full min-w-80 pt-10 md:hidden md:h-0 md:w-0">
            <Image
              src={Feature5M}
              alt="Feature Screen 5"
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="absolute hidden w-0 justify-end md:bottom-0 md:right-0 md:flex md:w-[80%]">
            <Image
              src={Feature5D}
              alt="Feature Screen 5"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-screen-2xl flex-col gap-6 px-4 py-12 md:gap-0 md:px-20 md:py-28">
        <h1 className="max-w-7xl text-3xl font-medium md:text-6xl/tight md:text-nowrap">
          {"Made for emerging brand owners, "}
          <br className="hidden md:block" />
          {"e-commerce, instagram sellers, "}
          <br className="hidden md:block" />
          {"creators, marketers "}
          <br className="hidden md:block" />
          and more.
        </h1>

        <div className="grid grid-cols-1 gap-10 md:-mt-12 md:grid-cols-2 md:gap-12">
          <div className="flex items-end text-sm/normal font-light text-white/80 md:w-[90%] md:pt-20 md:text-xl">
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

          <div className="flex md:row-span-2 md:flex-grow md:items-end md:justify-end md:self-start md:px-6">
            <Image
              className="md:w-[680px]"
              src={FeaturesScreen4}
              alt="Features"
            />
          </div>

          <div className="flex flex-col items-start justify-end gap-10">
            <span className="text-xl font-light md:w-[90%] md:text-2xl">
              {`“Best choice if you want to market online. Wizad will create daily posters for posts and stories, so you don’t need to worry on it! Thankyou team Wizad, long way to go!”`}
            </span>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Image
                src={TestimonialHighlightAuthor}
                className="size-[40px] overflow-clip rounded-full"
                width={52}
                height={52}
                alt="Amrutha S Kammath"
              />

              <span className="flex flex-col justify-start text-xs">
                <p className="font-medium">Amrutha S Kammath</p>
                <p className="text-white/80">
                  Owner and Operations Head of Over Treasures, Kochi
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 my-12 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 rounded-3xl bg-gradient-to-br from-[#FAECFF] to-[#38CEFB] text-black md:mx-auto md:w-full md:gap-12">
        <h2 className="max-w-5xl px-4 py-6 text-center font-hero text-4xl font-bold italic md:pb-10 md:pt-28 md:text-7xl">
          Get multiple design options in a single click.
        </h2>
        <Image className="w-56 md:w-96" src={FeaturesScreen3} alt="Features" />
      </section>

      <section className="flex w-full max-w-screen-2xl flex-col gap-8 overflow-clip px-4 py-12 md:gap-20 md:px-20 md:py-32">
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

        <div className="w-full">
          <span className="text-2xl font-medium text-white/80 md:text-5xl/tight">
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

        <div className="flex w-full flex-col gap-7 md:flex-row md:gap-20">
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
      <div className="w-full md:w-[85%]">
        <div className="pb-2 text-2xl">{icon}</div>
        <h2 className="pb-4 font-hero text-2xl font-semibold italic md:text-3xl">
          {title}
        </h2>
        <span className="font-light text-white/80 md:text-2xl">{desc}</span>
      </div>
    </div>
  );
};
