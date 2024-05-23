import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import Header from "@/app/_elements/Header";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

export default async function Page() {
  const blogs = await getBlogPosts();

  return (
    <main className="flex flex-col">
      <Header />

      <section className="flex flex-col w-full bg-hero-gradient bg-cover bg-top py-14 md:py-24">
        <div className="flex flex-col gap-6 md:gap-10 w-full mx-auto items-center md:items-start px-4 max-w-7xl">
          <h1 className="text-4xl md:text-8xl font-semibold font-hero italic max-w-3xl">
            Articles to help you get started
          </h1>
          <span className="font-medium text-base md:text-2xl text-white/70 max-w-3xl">
            Must-read articles and trends on social media, branding, marketing,
            and ever changing AI creative industry.
          </span>
        </div>
      </section>

      <section className="flex flex-col max-w-7xl mx-auto md:px-20 md:py-24 py-10 px-4">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} id={blog.slug}>
              <BlogTile blog={blog} />
            </li>
          ))}
        </ul>
      </section>

      <CustomerSupport />
      <Footer />
    </main>
  );
}
