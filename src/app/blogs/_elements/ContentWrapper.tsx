import Image from "next/image";
import ShareLinks from "@/app/blogs/_elements/ShareLinks";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import { getBlogPosts } from "@/app/blogs/utils";
import BlogTile from "@/app/blogs/_elements/BlogTile";

export default async function ContentWrapper({
  children,
  slug,
  imageSrc,
}: {
  children: React.ReactNode;
  slug: string;
  imageSrc?: string;
}) {
  const blogs = await getBlogPosts();
  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 4);
  return (
    <>
      <section className="flex w-full flex-col px-4 py-3">
        <div className="mx-auto flex max-w-10xl flex-col gap-6 rounded-2xl bg-neutral-920 px-3 py-5 md:w-[90%] md:gap-8 md:px-48 md:py-10">
          {imageSrc && (
            <div className="relative h-[31.25rem] w-full overflow-hidden rounded-2xl">
              <Image
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={imageSrc}
                alt="blog cover image"
              />
            </div>
          )}

          <article className="prose prose-zinc prose-invert md:prose-xl prose-h1:my-4 prose-h1:text-3xl prose-h1:font-medium prose-h2:my-4 prose-h2:block prose-h2:text-2xl prose-h2:font-medium prose-p:text-base prose-ul:text-base prose-img:mx-auto prose-img:max-h-[40rem] prose-hr:block md:mx-auto md:w-[60%] md:prose-h1:my-6 md:prose-h2:my-6 md:prose-p:text-sm/normal md:prose-ul:text-sm/normal">
            {children}
          </article>
          <div className="mx-auto flex flex-col items-center justify-end gap-4 md:w-[60%] md:flex-row">
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
    </>
  );
}
