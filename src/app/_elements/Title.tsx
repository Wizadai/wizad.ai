export default function BlogTitle({ title }: { title: string }) {
  return (
    <section className="flex w-full flex-col px-4 py-10 md:pb-12 md:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center gap-5">
          <h1 className="inline-block bg-gradient-to-r from-[#E293FE] to-[#38CEFB] bg-clip-text text-center text-3xl/tight font-medium text-transparent md:max-w-4xl md:text-6xl/tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
