import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  category: string;
  summary: string;
  image?: string;
};

function getReadingDuration(content: string, wordsPerMinute = 200) {
  // Remove HTML tags (e.g., if text was converted from Markdown)
  const plainText = content
    // Remove <code> elements
    .replace(/<code>.*?<\/code>/gs, "")
    // Remove code blocks in Markdown (e.g., ```js ... ```)
    .replace(/```[^`]+```/gs, "")
    // Remove other HTML tags
    .replace(/<[^>]*>/g, "");

  const words = plainText.split(/\s+/).length;

  /*!
   *  Assuming an average reader reads around 200-230 words per minute,
   *  research can be found here: https://scholarwithin.com/average-reading-speed
   */
  return Math.ceil(words / wordsPerMinute);
}

async function getMDXFiles(dir: string) {
  const files = await readdir(dir);

  return Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const { data: metadata, content } = matter(
          await readFile(path.join(dir, file), "utf-8"),
        );

        return {
          metadata: metadata as Metadata,
          slug: path.basename(file, path.extname(file)),
          readingDuration: getReadingDuration(content),
          content,
        };
      }),
  );
}

export async function getBlogPosts() {
  return await getMDXFiles(path.join(process.cwd(), "content"));
}

export async function getBlogFromSlug(slug: string) {
  const blogs = await getBlogPosts();
  return blogs.find((blog) => blog.slug === slug);
}
