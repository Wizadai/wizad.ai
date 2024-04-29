import TestimonialsData from "@/assets/testimonials.json";
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
      className="flex flex-col gap-6 md:gap-12 w-full max-w-screen-2xl px-4 py-12 md:px-32 md:py-32 mx-auto"
    >
      <h1 className="text-2xl md:text-6xl font-medium text-white/90 text-center md:pb-12 md:px-18">
        See why people love wizad
      </h1>

      <ul className="flex md:hidden flex-col gap-4">
        {TestimonialsData.slice(1, 8).map((obj) => (
          <li key={obj.ref}>
            <TestimonialCard data={obj} />
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex flex-col flex-wrap gap-4 max-h-[80vh] overflow-x-auto">
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
      <div className="flex flex-col gap-4 bg-[#131313] rounded-3xl md:max-w-96 p-6">
        <div className="flex justify-between">
          <div className="flex flex-row gap-4">
            <Image
              src={data.authorAvatarUrl}
              alt="Avatar of author"
              width={48}
              height={48}
              className="md:size-12 rounded-full overflow-clip"
            />
            <span>
              <p className="text-white/80 font-semibold">{data.authorName}</p>
              <p className="text-white/60 font-mono text-sm">
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
