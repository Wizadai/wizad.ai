import ShareLinks from "@/app/blogs/_elements/ShareLinks";

export default function BlogTitle({
  publishedAt,
  category,
  title,
  readingDuration,
  summary,
}: {
  publishedAt: string;
  category: string;
  title: string;
  readingDuration: number;
  summary: string;
}) {
  return (
    <section className="flex w-full flex-col px-4 py-10 md:pb-12 md:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center gap-5">
          <span className="space-x-1 text-sm text-zinc-500 md:text-xs">
            <span>{readingDuration} Min</span>
            <span> • </span>
            <time dateTime={publishedAt}>{publishedAt}</time>
            <span> • </span>
            <span className="uppercase text-white/80">{category}</span>
          </span>
          <h1 className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-center text-3xl/tight font-medium text-transparent md:max-w-4xl md:text-6xl/tight">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <span className="font-extralight text-white/70 md:text-sm">
            Share to
          </span>
          <ShareLinks title={title} summary={summary} />
        </div>
      </div>
    </section>
  );
}
