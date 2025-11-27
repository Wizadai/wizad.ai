import Footer from "@/app/_elements/Footer";
import HeroSection from "@/app/_elements/Hero";
import Features from "@/app/_elements/Features";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Testimonials from "@/app/_elements/Testimonials";
import BackedByLogos from "@/app/_elements/BackedByLogos";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    googleBot: {
      noimageindex: true,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <CustomerSupport />
      <Testimonials />
      <BackedByLogos />
      <Footer />
    </>
  );
}
