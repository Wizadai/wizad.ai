import TestimonialsData from "@/../public/assets/testimonials.json";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";

type Testimonial = (typeof TestimonialsData)[number];

// type Testimonial = {
//   source: "ProductHunt";
//   ref: string;

//   authorName: string;
//   authorAlias: string;
//   authorAvatarUrl: string;

//   content: string;
//   createdAt: string;
// };

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto flex w-full max-w-[1920px] flex-col gap-6 px-4 py-12 md:gap-12 md:px-32 md:py-32"
    >
      <h1 className="md:px-18 text-center text-2xl font-medium text-white/90 md:text-5xl md:font-normal">
        See why people love wizad
      </h1>

      <ul className="flex flex-col gap-4 md:hidden">
        {TestimonialsData.slice(1, 8).map((obj) => (
          <li key={obj.ref}>
            <TestimonialCard data={obj} />
          </li>
        ))}
      </ul>
      <ul className="hidden items-start md:block md:max-w-[1440px] md:columns-3xs md:px-20">
        {TestimonialsData.slice(1, 14).map((obj) => (
          <li key={obj.ref} className="aspect-video py-2">
            <TestimonialCard data={obj} />
          </li>
        ))}
      </ul>
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
              <p className="text-sm text-white/60 md:text-xs">
                @{data.authorAlias}
              </p>
            </span>
          </div>
          <TiSocialTwitter className="text-2xl text-white/70" />
        </div>

        <span className="break-inside-avoid md:text-[0.825rem]">
          {data.content}
        </span>
      </div>
    </a>
  );
};
