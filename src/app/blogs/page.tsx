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

      <section className="flex w-full flex-col bg-hero-gradient bg-cover bg-top py-14 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 md:items-start md:gap-10">
          <h1 className="max-w-3xl font-hero text-4xl font-semibold italic md:text-8xl">
            Articles to help you get started
          </h1>
          <span className="max-w-3xl text-base font-medium text-white/70 md:text-2xl">
            Must-read articles and trends on social media, branding, marketing,
            and ever changing AI creative industry.
          </span>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col px-4 py-10 md:px-20 md:py-24">
        <ul className="flex flex-col gap-8 md:gap-12">
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
