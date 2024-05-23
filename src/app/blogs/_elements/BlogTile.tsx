import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {
  blog: Awaited<ReturnType<typeof getBlogPosts>>[number];
};

export default function BlogTile({ blog }: Props) {
  return (
    <div className="relative flex flex-col md:flex-row rounded-2xl bg-zinc-900 overflow-hidden">
      <div className="flex flex-col md:w-full p-4 md:p-8 z-10">
        <span className="text-zinc-500 text-sm mb-4">
          {blog.readingDuration} Min •{" "}
          <time dateTime={blog.metadata.publishedAt}>
            {blog.metadata.publishedAt}
          </time>
        </span>
        <h2 className="font-medium text-2xl text-white mb-4">
          {blog.metadata.title}
        </h2>
        <p className="text-white/60 mb-4">{blog.metadata.summary}</p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex items-center gap-1.5 text-white"
        >
          Learn More
          <TfiArrowTopRight />
        </Link>
      </div>
      {blog.metadata.image && (
        <div className="relative md:w-3/5 h-48 md:h-auto">
          <Image
            src={blog.metadata.image}
            alt="blog cover image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 md:bg-gradient-to-l from-transparent to-zinc-900 to-95%"></div>
        </div>
      )}
    </div>
  );
}
