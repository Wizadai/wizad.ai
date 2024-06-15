import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import Header from "@/app/_elements/Header";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import { getBlogFromSlug, getBlogPosts } from "@/app/blogs/utils";
import { baseUrl } from "@/app/sitemap";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Image from "next/image";
import { FaThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import RiLink from "@/../public/assets/ri_link-m.png";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";

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

      <section className="flex w-full flex-col px-4 py-10 md:pb-12 md:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4">
          <div className="flex flex-col items-center gap-5">
            <span className="space-x-1 text-sm text-zinc-500 md:text-xs">
              <span>{blog.readingDuration} Min</span>
              <span> • </span>
              <time dateTime={blog.metadata.publishedAt}>
                {blog.metadata.publishedAt}
              </time>
              <span> • </span>
              <span className="uppercase text-white/80">
                {blog.metadata.category}
              </span>
            </span>
            <h1 className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-center text-3xl/tight font-medium text-transparent md:max-w-4xl md:text-6xl/tight">
              {blog.metadata.title}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <span className="font-extralight text-white/70 md:text-sm">
              Share to
            </span>
            <ShareLinks />
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col px-4 py-3">
        <div className="mx-auto flex max-w-10xl flex-col gap-6 rounded-2xl bg-neutral-920 px-3 py-5 md:w-[90%] md:gap-8 md:px-48 md:py-10">
          {blog.metadata.image && (
            <div className="relative h-[31.25rem] w-full overflow-hidden rounded-2xl">
              <Image
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={blog.metadata.image}
                alt="blog cover image"
              />
            </div>
          )}

          <article className="prose prose-zinc prose-invert md:prose-xl prose-h2:my-4 prose-h2:text-2xl prose-h2:font-medium prose-p:text-base md:mx-auto md:w-[60%] md:prose-h2:my-6 md:prose-p:text-sm/normal">
            <Markdown content={blog.content} />
          </article>

          <div className="mx-auto flex flex-col md:flex-row items-center justify-end gap-4 md:w-[60%]">
            <span className="font-light text-white/65">Share to</span>
            <ShareLinks />
          </div>
        </div>
      </section>

      {!!otherBlogs.length && (
        <section className="mx-auto flex max-w-10xl flex-col gap-10 px-4 py-10 md:px-20 md:py-24">
          <div>
            <span className="font-hero text-2xl not-italic">Read next</span>
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
      <button className="rounded bg-neutral-800 p-2">
        <Image
          src={RiLink}
          alt="ri-link"
          placeholder="blur"
          className="size-5"
        />
      </button>
      <button>
        <BiLogoInstagramAlt className="size-6" />
      </button>
      <button>
        <BiLogoLinkedinSquare className="size-6" />
      </button>
      <button>
        <BsTwitterX className="size-5" />
      </button>
      <button>
        <BiLogoFacebookSquare className="size-6" />
      </button>
      <button>
        <FaThreads className="size-6" />
      </button>
    </div>
  );
};
