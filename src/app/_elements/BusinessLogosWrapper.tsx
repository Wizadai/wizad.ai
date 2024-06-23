"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};

export default function BusinessLogosWrapper(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="backface-hidden flex w-full gap-10 relative h-20">
        {props.children}
      </div>
    </div>
  );
}
