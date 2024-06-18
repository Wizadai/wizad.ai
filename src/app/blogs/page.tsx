import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import FeaturedCarousel from "@/app/blogs/_elements/FeaturedCarousel";
import CarouselTile from "@/app/blogs/_elements/CarouselTile";

export default async function Page() {
  const blogs = await getBlogPosts();

  const featuredBlogs = blogs.filter((blog) => blog.metadata.featured);

  const socialMediaBlogs = blogs.filter(
    (blog) => blog.metadata.category === "Social Media",
  );

  const tutorialBlogs = blogs.filter(
    (blog) => blog.metadata.category === "Tutorials",
  );

  return (
    <>
      <section className="flex w-full flex-col bg-hero-gradient bg-cover bg-top py-14">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 md:items-start md:gap-10">
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
      </section>

      <section className="flex max-w-11xl flex-col px-4 py-10 md:py-20">
        <FeaturedCarousel options={{ dragFree: true }}>
          {featuredBlogs.map((blog) => (
            <CarouselTile key={blog.slug} blog={blog} />
          ))}
        </FeaturedCarousel>
      </section>

      {socialMediaBlogs.length > 0 && (
        <section className="mx-auto flex max-w-11xl flex-col px-4 py-10 md:px-20 md:py-20">
          <h2 className="pb-8 font-hero text-2xl not-italic">Social Media</h2>
          <ul className="flex flex-col gap-8 md:gap-12">
            {socialMediaBlogs.map((blog) => (
              <li key={blog.slug} id={blog.slug}>
                <BlogTile blog={blog} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {tutorialBlogs.length > 0 && (
        <section className="mx-auto flex max-w-11xl flex-col px-4 py-10 md:px-20 md:py-24">
          <h2 className="pb-8 font-hero text-2xl not-italic">Tutorials</h2>
          <ul className="flex flex-col gap-8 md:gap-12">
            {tutorialBlogs.map((blog) => (
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
