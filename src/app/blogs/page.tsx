import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

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

      <section className="flex max-w-11xl flex-col px-4 py-10 md:px-20 md:py-20">
        <div className="flex items-center justify-center rounded-2xl bg-neutral-920 p-3 w-full md:py-10">
          <div className="relative flex flex-col overflow-hidden md:justify-center md:w-[89%]">
            <h2 className="mb-4 w-full text-2xl/tight font-medium text-white md:w-[60%] md:text-4xl/none">
              {featuredBlogs[0].metadata.title}
            </h2>
            {featuredBlogs[0].metadata.image && (
              <div className="relative h-[16.75rem] md:h-72 w-full overflow-clip rounded-2xl">
                <Image
                  src={featuredBlogs[0].metadata.image}
                  alt="image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <span className="mb-4 pt-4 text-sm md:text-xs text-zinc-500">
              {featuredBlogs[0].readingDuration} Min •{" "}
              <time dateTime={featuredBlogs[0].metadata.publishedAt}>
                {featuredBlogs[0].metadata.publishedAt}
              </time>
              <span> • </span>
              <span className="uppercase text-white/80">
                {featuredBlogs[0].metadata.category}
              </span>
            </span>
            <Link
              href={`/blogs/${featuredBlogs[0].slug}`}
              className="flex items-center gap-1.5 text-white hover:underline w-max"
            >
              Learn More
              <TfiArrowTopRight />
            </Link>
          </div>
        </div>
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
