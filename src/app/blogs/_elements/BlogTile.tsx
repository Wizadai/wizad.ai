import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {
  blog: Awaited<ReturnType<typeof getBlogPosts>>[number];
};

export default function BlogTile({ blog }: Props) {
  return (
    <div className="p-4 md:px-32 md:py-10 rounded-2xl flex flex-col md:flex-row md:justify-between md:gap-24 gap-4 bg-zinc-900">
      <div className="flex flex-col gap-4 md:gap-6">
        <span className="text-zinc-500 text-sm">
          {blog.readingDuration} Min •{" "}
          <time dateTime={blog.metadata.publishedAt}>
            {blog.metadata.publishedAt}
          </time>
        </span>

        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-2xl">{blog.metadata.title}</h2>
          <p className="text-white/60">{blog.metadata.summary}</p>
          <Link
            href={`/blogs/${blog.slug}`}
            className="flex items-center gap-1.5"
          >
            Learn More
            <TfiArrowTopRight />
          </Link>
        </div>
      </div>
      {blog.metadata.image && (
        <Image
          className="rounded-2xl overflow-hidden md:w-[480px]"
          src={blog.metadata.image}
          alt="blog cover image"
          width={320}
          height={124}
        />
      )}
    </div>
  );
}
