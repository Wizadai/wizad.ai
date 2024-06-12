import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {
  blog: Awaited<ReturnType<typeof getBlogPosts>>[number];
};

export default function BlogTile({ blog }: Props) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-neutral-920 md:flex-row">
      <div className="z-10 flex flex-col p-4 md:w-full md:p-8">
        <span className="mb-4 text-sm text-zinc-500">
          {blog.readingDuration} Min •{" "}
          <time dateTime={blog.metadata.publishedAt}>
            {blog.metadata.publishedAt}
          </time>
        </span>
        <h2 className="mb-4 text-2xl font-medium text-white md:text-4xl">
          {blog.metadata.title}
        </h2>
        <p className="mb-4 line-clamp-3 font-light text-white/60 md:line-clamp-2 md:font-normal">
          {blog.metadata.summary}
        </p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex items-center gap-1.5 text-white"
        >
          Learn More
          <TfiArrowTopRight />
        </Link>
      </div>
      {blog.metadata.image && (
        <div className="relative h-48 md:h-auto md:w-3/5">
          <Image
            src={blog.metadata.image}
            alt="blog cover image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 from-transparent to-zinc-900 to-95% md:bg-gradient-to-l"></div>
        </div>
      )}
    </div>
  );
}
