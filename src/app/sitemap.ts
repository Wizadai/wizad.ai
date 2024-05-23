import { getBlogPosts } from "@/app/blogs/utils";

export const baseUrl = process.env.NEXT_PUBLIC_URL!;

export default async function sitemap() {
  const blogs = (await getBlogPosts()).map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
