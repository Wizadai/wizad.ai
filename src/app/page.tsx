import Footer from "@/app/_elements/Footer";
import HeroSection from "@/app/_elements/Hero";
import Features from "@/app/_elements/Features";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Testimonials from "@/app/_elements/Testimonials";

// TODO:
// - update envs
// - https://nextjs.org/docs/getting-started/project-structure#seo

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <CustomerSupport />
      <Testimonials />
      <Footer />
    </>
  );
}
