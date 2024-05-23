import Footer from "@/app/_elements/Footer";
import Header from "@/app/_elements/Header";
import HeroSection from "@/app/_elements/Hero";
import Features from "@/app/_elements/Features";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Testimonials from "@/app/_elements/Testimonials";

// TODO:
// - update envs
// - https://nextjs.org/docs/getting-started/project-structure#seo

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroSection />
      <Features />
      <CustomerSupport />
      <Testimonials />
      <Footer />
    </main>
  );
}
