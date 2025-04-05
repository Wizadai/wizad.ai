"use client";
import TestimonialsData from "@/../public/assets/testimonials.json";
import Image from "next/image";
import { RiProductHuntFill } from "react-icons/ri";
import TestimonialsWrapper from "@/app/_elements/TestimonialsWrapper";

type Testimonial = (typeof TestimonialsData)[number];

export default function Testimonials() {
  const reversedTestimonialsData = [...TestimonialsData].reverse();

  return (
    <section
      id="testimonials"
      className="mx-auto flex w-full max-w-11xl flex-col gap-6 px-4 py-12 md:gap-12 md:px-32 md:py-32"
    >
      <h1 className="md:px-18 text-center text-2xl font-medium text-white/90 md:text-5xl md:font-normal">
        See why people love wizad
      </h1>

      <TestimonialsWrapper>
        <ul className="items-start md:columns-2 md:px-20 lg:columns-3 xl:columns-4">
          {reversedTestimonialsData.map((obj) => (
            <li key={obj.ref} className="aspect-video py-2">
              <TestimonialCard data={obj} />
            </li>
          ))}
        </ul>
      </TestimonialsWrapper>
    </section>
  );
}

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  return (
    <a
      href={data.ref}
      target="_blank"
      rel="noopener"
      className="break-inside-avoid"
    >
      <div className="flex break-inside-avoid flex-col gap-4 rounded-3xl bg-neutral-920 p-6 md:max-w-96">
        <div className="flex break-inside-avoid justify-between">
          <div className="flex break-inside-avoid gap-4">
            <Image
              src={data.authorAvatarUrl}
              alt="Avatar of author"
              width={48}
              height={48}
              className="aspect-square overflow-clip rounded-full md:size-12"
              style={{
                objectFit: "contain",
              }}
            />
            <span>
              <p className="text-white/80 md:text-sm">{data.authorName}</p>
              <p className="break-all text-sm text-white/60 md:text-xs">
                @{data.authorAlias}
              </p>
            </span>
          </div>
          <RiProductHuntFill className="text-2xl text-white/70" />
        </div>

        <span className="break-inside-avoid md:text-[0.825rem]">
          {data.content}
        </span>
      </div>
    </a>
  );
};
