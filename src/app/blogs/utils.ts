import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

type Metadata = {
  title: string;
  publishedAt: string;
  category: string;
  summary: string;
  featured?: boolean;
  image?: string;
};

export function getReadingDuration(content: string, wordsPerMinute = 200) {
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

export async function getWordCount(dirName: string): Promise<number> {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "bog",
    "(posts)",
    dirName,
    "page.mdx",
  );
  try {
    const content = await fs.promises.readFile(filePath, "utf8");
    const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML/JSX tags
    const words = text.trim().split(/\s+/); // Split by whitespace
    console.log("Word count:", words.length);
    return words.length;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return 0;
  }
}

async function getMDXFilesRecursively(dir: string): Promise<string[]> {
  let entries = await readdir(dir, { withFileTypes: true });
  let files = await Promise.all(entries.map(async (entry) => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getMDXFilesRecursively(res) : res;
  }));
  return files.flat();
}

async function getMDXFiles(dir: string) {
  const allFiles = await getMDXFilesRecursively(dir);
  const mdxFiles = allFiles.filter(file => path.extname(file) === '.mdx');

  return Promise.all(
    mdxFiles
      // .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const { data: metadata, content } = matter(
          await readFile(file, "utf-8"),
        );

        return {
          metadata: metadata as Metadata,
          slug: path.basename(path.dirname(file)),
          readingDuration: getReadingDuration(content),
        };
      }),
  );
}

export async function getBlogPosts() {
  return await getMDXFiles(path.join(process.cwd(), "src", "app", "bog", "(posts)"));
}

export async function getBlogFromSlug(slug: string) {
  const blogs = await getBlogPosts();
  return blogs.find((blog) => blog.slug === slug);
}
