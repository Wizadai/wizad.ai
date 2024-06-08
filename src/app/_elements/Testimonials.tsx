import TestimonialsData from "../../../public/assets/testimonials.json";
import Image from "next/image";
import { BiLogoProductHunt } from "react-icons/bi";

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
      className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 px-4 py-12 md:gap-12 md:px-32 md:py-32"
    >
      <h1 className="md:px-18 text-center text-2xl font-medium text-white/90 md:pb-12 md:text-6xl">
        See why people love wizad
      </h1>

      <ul className="flex flex-col gap-4 md:hidden">
        {TestimonialsData.slice(1, 8).map((obj) => (
          <li key={obj.ref}>
            <TestimonialCard data={obj} />
          </li>
        ))}
      </ul>
      <ul className="hidden max-h-[80vh] items-start flex-wrap gap-4 overflow-x-auto md:flex">
        {TestimonialsData.slice(1, 14).map((obj) => (
          <li key={obj.ref}>
            <TestimonialCard data={obj} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  return (
    <a href={data.ref} target="_blank" rel="noopener">
      <div className="flex flex-col gap-4 rounded-3xl bg-neutral-920 p-6 md:max-w-96">
        <div className="flex justify-between">
          <div className="flex flex-row gap-4">
            <Image
              src={data.authorAvatarUrl}
              alt="Avatar of author"
              width={48}
              height={48}
              className="overflow-clip rounded-full md:size-12"
            />
            <span>
              <p className="font-semibold text-white/80">{data.authorName}</p>
              <p className="font-mono text-sm text-white/60">
                @{data.authorAlias}
              </p>
            </span>
          </div>
          <BiLogoProductHunt className="text-2xl text-white/70" />
        </div>

        <span className="font-medium">{data.content}</span>
      </div>
    </a>
  );
};
