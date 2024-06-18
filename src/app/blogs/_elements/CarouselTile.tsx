import { getBlogPosts } from "@/app/blogs/utils";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";

type Props = {
  blog: Awaited<ReturnType<typeof getBlogPosts>>[number];
};

export default function CarouselTile({ blog }: Props) {
  return (
    <div className="flex w-[95%] md:w-full shrink-0 items-center justify-center rounded-2xl bg-neutral-920 p-3 md:py-10">
      <div className="relative flex flex-col overflow-hidden md:w-[89%] md:justify-center">
        <h2 className="mb-4 w-full text-2xl/tight font-medium text-white md:w-[60%] md:text-4xl/none">
          {blog.metadata.title}
        </h2>
        {blog.metadata.image && (
          <div className="relative h-[16.75rem] w-full overflow-clip rounded-2xl md:h-72">
            <Image
              src={blog.metadata.image}
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <span className="mb-4 pt-4 text-sm text-zinc-500 md:text-xs">
          {blog.readingDuration} Min •{" "}
          <time dateTime={blog.metadata.publishedAt}>
            {blog.metadata.publishedAt}
          </time>
          <span> • </span>
          <span className="uppercase text-white/80">
            {blog.metadata.category}
          </span>
        </span>
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex w-max items-center gap-1.5 text-white hover:underline"
        >
          Learn More
          <TfiArrowTopRight />
        </Link>
      </div>
    </div>
  );
}
