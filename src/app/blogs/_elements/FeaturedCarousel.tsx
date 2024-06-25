"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};

export default function FeaturedCarousel(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="backface-hidden flex gap-2 md:mx-16 md:gap-10">
        {props.children}
      </div>
    </div>
  );
}
