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

      <section className="flex w-full flex-col px-4 py-10 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4">
          <div className="flex flex-col items-center gap-5">
            <span className="space-x-1 text-sm text-zinc-500">
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
            <h1 className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-center text-3xl font-medium text-transparent md:text-7xl/tight">
              {blog.metadata.title}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="font-light text-white/65">Share to</span>
            <ShareLinks />
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-zinc-900 px-3 py-5 md:gap-12 md:px-60 md:py-10">
          {blog.metadata.image && (
            <Image
              className="w-full overflow-hidden rounded-2xl"
              src={blog.metadata.image}
              alt="blog cover image"
              width={320}
              height={124}
            />
          )}

          <article className="prose prose-zinc prose-invert md:prose-xl md:mx-auto">
            <Markdown content={blog.content} />
          </article>

          <div className="flex items-center justify-end gap-4">
            <span className="font-light text-white/65">Share to</span>
            <ShareLinks />
          </div>
        </div>
      </section>

      {!!otherBlogs.length && (
        <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 md:px-20 md:py-24">
          <div>
            <span className="font-hero text-2xl">Read next</span>
          </div>
          <ul className="flex flex-col gap-8 md:gap-12">
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
    <div className="flex items-center gap-6 text-white/70">
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
