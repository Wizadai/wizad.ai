"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

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
    })
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="backface-hidden flex px-8 w-full gap-2 md:gap-10 relative h-20 md:px-56">
        {props.children}
      </div>
    </div>
  );
}
