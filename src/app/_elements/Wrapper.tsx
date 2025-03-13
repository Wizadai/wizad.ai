import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";

export default async function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex w-full flex-col px-4 py-3">
        <div className="mx-auto flex max-w-10xl flex-col gap-6 rounded-2xl bg-neutral-920 px-3 py-5 md:w-[90%] md:gap-8 md:px-48 md:py-10">
          <article className="prose prose-zinc prose-invert md:prose-xl prose-h1:my-4 prose-h1:text-3xl prose-h1:font-medium prose-h2:my-4 prose-h2:block prose-h2:text-2xl prose-h2:font-medium prose-h3:my-2 prose-h3:text-xl prose-h4:my-1 prose-h4:text-lg prose-p:text-base prose-figure:my-0 prose-figcaption:my-1 prose-figcaption:text-sm prose-ul:text-base prose-li:text-base prose-table:text-center prose-table:text-base prose-img:mx-auto prose-img:max-h-[40rem] prose-hr:block md:mx-auto md:w-[60%] md:prose-h1:my-6 md:prose-h2:my-6 md:prose-h3:my-3 md:prose-h4:my-[0.3rem] md:prose-p:text-sm/normal md:prose-figcaption:text-xs/normal md:prose-ul:text-sm/normal md:prose-li:text-sm/normal md:prose-table:text-sm/normal">
            {children}
          </article>
        </div>
      </section>
      <CustomerSupport />
      <Footer />
    </>
  );
}
