import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogPosts } from "@/app/blogs/utils";
import FeaturedCarousel from "@/app/blogs/_elements/FeaturedCarousel";
import CarouselTile from "@/app/blogs/_elements/CarouselTile";
import HeroGradient from "@/../public/bg-hero-gradient.webp";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const blogs = (await getBlogPosts()).sort((a, b) => {
    return (
      Number(new Date(b.metadata.publishedAt)) -
      Number(new Date(a.metadata.publishedAt))
    );
  });

  const featuredBlogs = [
    ...blogs.filter((blog) => blog.metadata.featured),
  ].sort();

  const socialMediaBlogs = blogs.filter(
    (blog) => blog.metadata.category === "Social Media",
  );

  const tutorialBlogs = blogs.filter(
    (blog) => blog.metadata.category === "Tutorials",
  );

  return (
    <>
      <section className="relative flex w-full flex-col overflow-clip py-14">
        <div className="mx-auto flex w-[80%] flex-col items-center gap-6 px-4 md:items-start md:gap-10">
          <h1 className="max-w-3xl font-hero text-4xl/tight font-semibold italic md:text-7xl/none">
            <div>{"Articles to help "}</div>
            <div>you get started</div>
          </h1>
          <span className="max-w-3xl text-center text-base font-medium text-white/70 md:text-left md:text-xl">
            Must-read articles and trends on social media, branding,
            <br className="hidden md:block" />
            marketing, and ever changing AI creative industry.
          </span>
        </div>
        <div className="absolute left-0 top-0 -z-50 h-screen w-full">
          <Image
            src={HeroGradient}
            alt="Hero Gradient"
            fill
            quality={1}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </section>

      <section className="flex flex-col px-4 py-10 md:py-20">
        <FeaturedCarousel options={{ dragFree: true }}>
          {featuredBlogs.map((blog) => (
            <CarouselTile key={blog.slug} blog={blog} />
          ))}
        </FeaturedCarousel>
      </section>

      {socialMediaBlogs.length > 0 && (
        <section className="mx-auto flex w-full max-w-11xl flex-col px-4 py-10 md:px-20 md:py-20">
          <div className="flex w-full items-center justify-between">
            <h2 className="pb-8 font-hero text-2xl not-italic">Social Media</h2>
            {socialMediaBlogs.length > 3 && (
              <Link
                href="/social-media"
                className="mb-8 rounded-lg bg-[#2E2E2E] px-4 py-2 text-sm hover:bg-neutral-920"
              >
                View all
              </Link>
            )}
          </div>
          <ul className="flex flex-col gap-8 md:gap-12">
            {socialMediaBlogs.slice(0, 3).map((blog) => (
              <li key={blog.slug} id={blog.slug}>
                <BlogTile blog={blog} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {tutorialBlogs.length > 0 && (
        <section className="mx-auto flex w-full max-w-11xl flex-col px-4 py-10 md:px-20 md:py-20">
          <div className="flex w-full items-center justify-between">
            <h2 className="pb-8 font-hero text-2xl not-italic">Tutorials</h2>
            {tutorialBlogs.length > 3 && (
              <Link
                href="/tutorials"
                className="mb-8 rounded-lg bg-[#2E2E2E] px-4 py-2 text-sm hover:bg-neutral-920"
              >
                View all
              </Link>
            )}
          </div>
          <ul className="flex flex-col gap-8 md:gap-12">
            {tutorialBlogs.slice(0, 3).map((blog) => (
              <li key={blog.slug} id={blog.slug}>
                <BlogTile blog={blog} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <CustomerSupport />
      <Footer />
    </>
  );
}
