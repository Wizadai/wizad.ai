import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import Header from "@/app/_elements/Header";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogFromSlug, getBlogPosts } from "@/app/blogs/utils";
import { baseUrl } from "@/app/sitemap";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Image from "next/image";
import {
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaMeta,
  FaThreads,
  FaTwitter,
} from "react-icons/fa6";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogFromSlug(params.slug);
  if (!blog) {
    throw Error("404 Page Not Found");
  }

  const title = blog.metadata.title;
  const description = blog.metadata.summary;
  const image = blog.metadata.image;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: blog.metadata.publishedAt,
      url: `${baseUrl}/blogs/${blog.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogPosts();
  return blogs.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const blogs = await getBlogPosts();
  const otherBlogs = blogs.filter((b) => b.slug !== params.slug).slice(0, 4);
  const blog = await getBlogFromSlug(params.slug);

  if (!blog) {
    return;
  }

  return (
    <main className="flex flex-col">
      <Header />

      <section className="flex flex-col w-full py-10 px-4 md:py-24">
        <div className="flex flex-col gap-10 w-full mx-auto items-center px-4 max-w-7xl">
          <div className="flex flex-col items-center gap-5">
            <span className="text-zinc-500 text-sm space-x-1">
              <span>{blog.readingDuration} Min</span>
              <span> • </span>
              <time dateTime={blog.metadata.publishedAt}>
                {blog.metadata.publishedAt}
              </time>
              <span> • </span>
              <span className="uppercase text-white">
                {blog.metadata.category}
              </span>
            </span>
            <h1 className="text-3xl md:text-7xl/tight font-medium bg-gradient-to-r from-[#E293FE] to-[#38CEFB] inline-block text-transparent bg-clip-text text-center">
              {blog.metadata.title}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-white/65 font-light">Share to</span>
            <ShareLinks />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full py-3 px-4">
        <div className="flex flex-col md:gap-12 gap-6 bg-zinc-900 rounded-2xl py-5 px-3 md:py-10 md:px-60 max-w-7xl mx-auto">
          {blog.metadata.image && (
            <Image
              className="rounded-2xl overflow-hidden w-full"
              src={blog.metadata.image}
              alt="blog cover image"
              width={320}
              height={124}
            />
          )}

          <article className="prose md:mx-auto md:prose-xl prose-zinc prose-invert">
            <Markdown content={blog.content} />
          </article>

          <div className="flex items-center justify-end gap-4">
            <span className="text-white/65 font-light">Share to</span>
            <ShareLinks />
          </div>
        </div>
      </section>

      {!!otherBlogs.length && (
        <section className="flex flex-col max-w-7xl mx-auto md:px-20 md:py-24 py-10 px-4 gap-10">
          <div>
            <span className="text-2xl font-hero">Read next</span>
          </div>
          <ul>
            {otherBlogs.map((blog) => (
              <li key={blog.slug} id={blog.slug}>
                <BlogTile blog={blog} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <CustomerSupport />
      <Footer />
    </main>
  );
}

const ShareLinks = () => {
  return (
    <div className="flex gap-6 items-center text-white/70">
      <button>
        <FaLink className="size-6" />
      </button>
      <button>
        <FaInstagram className="size-6" />
      </button>
      <button>
        <FaLinkedin className="size-6" />
      </button>
      <button>
        <FaTwitter className="size-6" />
      </button>
      <button>
        <FaMeta className="size-6" />
      </button>
      <button>
        <FaThreads className="size-6" />
      </button>
    </div>
  );
};
