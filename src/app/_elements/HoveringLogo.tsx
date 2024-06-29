"use client";
import { useScroll, motion, useMotionValueEvent, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HoveringLogo({
  children,
  logo,
}: {
  children: React.ReactNode;
  logo: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const translateYSpring = useSpring(0, { stiffness: 50, damping: 20 });

  useMotionValueEvent(scrollYProgress, "change", (latestProgress) => {
    if (containerRef.current && logoRef.current) {
      const parentHeight = containerRef.current.offsetHeight;
      const logoHeight = logoRef.current.offsetHeight;
      const maxTranslateY = parentHeight - logoHeight;
      const translateYValue = latestProgress * maxTranslateY;
      translateYSpring.set(translateYValue);
    }
  });

  return (
    <div className="relative w-full" ref={containerRef}>
      <motion.div
        className={`$absolute left-0 right-0 top-0 mx-auto flex h-screen items-center justify-center`}
        style={{ translateY: translateYSpring }}
        ref={logoRef}
      >
        {logo}
      </motion.div>
      {children}
    </div>
  );
}
