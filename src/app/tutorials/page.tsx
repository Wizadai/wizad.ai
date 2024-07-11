import Image from "next/image";
import HeroGradient from "@/../public/bg-hero-gradient.png";
import { getBlogPosts } from "@/app/blogs/utils";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";

export default async function SocialMediaPage() {
  const blogs = (await getBlogPosts()).sort((a, b) => {
    return (
      Number(new Date(b.metadata.publishedAt)) -
      Number(new Date(a.metadata.publishedAt))
    );
  });

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

      {tutorialBlogs.length > 0 && (
        <section className="mx-auto flex w-full max-w-11xl flex-col px-4 py-10 md:px-20 md:py-20">
          <h2 className="pb-8 font-hero text-2xl not-italic">Tutorials</h2>
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
