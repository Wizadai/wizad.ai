"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
};

export default function BusinessLogosWrapper(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div
      ref={emblaRef}
      className="absolute mt-12 w-screen overflow-hidden md:static md:w-full"
    >
      <div className="backface-hidden relative flex h-20 w-full gap-2 px-8 md:gap-10 md:px-56">
        {props.children}
      </div>
    </div>
  );
}
