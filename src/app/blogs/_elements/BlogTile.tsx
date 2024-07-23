import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {
  blog: Awaited<ReturnType<typeof getBlogPosts>>[number];
};

export default function BlogTile({ blog }: Props) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-neutral-920 p-3 md:flex-row md:justify-center md:gap-20 md:py-10">
      <div
        className={`z-10 flex flex-col pb-4 ${blog.metadata.image ? "md:w-1/2" : "md:w-[89.5%]"} md:pb-0`}
      >
        <span className="mb-4 text-sm text-zinc-500">
          {blog.readingDuration} Min •{" "}
          <time dateTime={blog.metadata.publishedAt}>
            {blog.metadata.publishedAt}
          </time>
        </span>
        <h2 className="mb-4 text-2xl/tight font-medium text-white md:text-4xl/none">
          {blog.metadata.title}
        </h2>
        <p className="mb-4 line-clamp-3 font-light text-white/60 md:line-clamp-2 md:font-normal">
          {blog.metadata.summary}
        </p>
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex w-max items-center gap-1.5 text-white hover:underline"
        >
          Learn More
          <TfiArrowTopRight />
        </Link>
      </div>
      {blog.metadata.image && (
        <div className="relative h-48 overflow-hidden rounded-2xl md:h-auto md:w-1/3">
          <Image
            src={blog.metadata.image}
            alt="blog cover image"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
