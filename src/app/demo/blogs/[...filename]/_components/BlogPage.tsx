import { getBlogPosts } from "@/app/blogs/utils";
import { BlogQuery } from "tina/types";
import Image, { ImageProps } from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import BlogTile from "@/app/blogs/_elements/BlogTile";
import CustomerSupport from "@/app/_elements/CustomerSupport";
import Footer from "@/app/_elements/Footer";
import BlogTitle from "@/app/blogs/_elements/BlogTitle";
import ShareLinks from "@/app/blogs/_elements/ShareLinks";

export default function BlogPage({
  blog,
  otherBlogs,
}: {
  blog: BlogQuery["blog"];
  otherBlogs: Awaited<ReturnType<typeof getBlogPosts>>;
}) {
  return (
    <>
      <BlogTitle
        publishedAt={blog.publishedAt}
        category={blog.category}
        readingDuration={blog.readingDuration}
        summary={blog.summary}
        title={blog.title}
      />
      <section className="flex w-full flex-col px-4 py-3">
        <div className="mx-auto flex max-w-10xl flex-col gap-6 rounded-2xl bg-neutral-920 px-3 py-5 md:w-[90%] md:gap-8 md:px-48 md:py-10">
          {blog.image && (
            <Image
              className="h-full max-h-[31.25rem] w-full rounded-2xl md:mx-auto md:max-w-max"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              src={blog.image}
              alt="blog cover image"
            />
          )}

          <article className="prose prose-zinc prose-invert md:prose-xl prose-h1:my-4 prose-h1:text-3xl prose-h1:font-medium prose-h2:my-4 prose-h2:text-2xl prose-h2:font-medium prose-h3:my-2 prose-h3:text-xl prose-h4:my-1 prose-h4:text-lg prose-p:text-base prose-blockquote:text-base prose-figure:my-0 prose-figcaption:my-1 prose-figcaption:text-sm prose-ul:text-base prose-table:text-center prose-table:text-base prose-img:mx-auto prose-img:max-h-[40rem] prose-hr:block md:mx-auto md:w-[60%] md:prose-h1:my-6 md:prose-h2:my-6 md:prose-h3:my-3 md:prose-h4:my-[0.3rem] md:prose-p:text-sm/normal md:prose-blockquote:text-sm/normal md:prose-figcaption:text-xs/normal md:prose-ul:text-sm/normal md:prose-table:text-sm/normal">
            <TinaMarkdown
              components={{
                Image: (blog: any) => (
                  <Image
                    src={blog.image as string}
                    className="mx-auto h-full max-h-[40rem] w-full"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    alt="Image"
                  />
                ),
                QuoteWithPicture: (blog: any) => {
                  return (
                    <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-2">
                      <div className="my-2 h-max w-full border px-2 xl:w-[48%]">
                        <TinaMarkdown content={blog.children} />
                      </div>
                      <div className="w-full xl:w-[48%]">
                        <Image
                          src={blog.image as string}
                          className="mx-auto h-full max-h-[40rem] w-full"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                          alt="Image with quote"
                        />
                      </div>
                    </div>
                  );
                },
                TwoImages: (blog: any) => {
                  return (
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                      <div className="w-full xl:w-[48%]">
                        <Image
                          src={blog.image1 as string}
                          className="mx-auto my-0 h-full max-h-[40rem] w-full md:my-0"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                          alt="Image 1"
                        />
                      </div>
                      <div className="w-full xl:w-[48%]">
                        <Image
                          src={blog.image2 as string}
                          className="mx-auto my-0 h-full max-h-[40rem] w-full md:my-0"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                          alt="Image 2"
                        />
                      </div>
                    </div>
                  );
                },
              }}
              content={blog.body}
            />
          </article>
          <div className="mx-auto flex flex-col items-center justify-end gap-4 md:w-[60%] md:flex-row">
            <span className="font-light text-white/65">Share to</span>
            <ShareLinks title={blog.title} summary={blog.summary} />
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
                {/* @ts-ignore */}
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
