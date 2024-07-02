import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  category: string;
  summary: string;
  featured?: boolean;
  image?: string;
};

export async function getReadingDuration(
  contentOrDirName: string,
  isDirectory: boolean = false,
  wordsPerMinute: number = 200,
): Promise<number> {
  let plainText: string;

  if (isDirectory) {
    // If it's a directory name, read the file and process its content
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "blogs",
      "(posts)",
      contentOrDirName,
      "page.mdx",
    );
    try {
      const { content } = matter(await readFile(filePath, "utf-8"));
      plainText = content;
    } catch (error) {
      console.error("Error reading MDX file:", error);
      return 0;
    }
  } else {
    // If it's content, use it directly
    plainText = contentOrDirName;
  }

  // Process the text to remove HTML tags and code blocks
  plainText = plainText
    .replace(/<code>.*?<\/code>/gs, "")
    .replace(/```[^`]+```/gs, "")
    .replace(/<[^>]*>/g, "");

  const words = plainText.split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}

async function getMDXFilesRecursively(dir: string): Promise<string[]> {
  let entries = await readdir(dir, { withFileTypes: true });
  let files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getMDXFilesRecursively(res) : res;
    }),
  );
  return files.flat();
}

async function getMDXFiles(dir: string) {
  const allFiles = await getMDXFilesRecursively(dir);
  const mdxFiles = allFiles.filter((file) => path.extname(file) === ".mdx");

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
  return await getMDXFiles(
    path.join(process.cwd(), "src", "app", "blogs", "(posts)"),
  );
}
