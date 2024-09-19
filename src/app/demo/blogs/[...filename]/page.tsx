import { databaseClient } from "../../../../../tina/__generated__/databaseClient";
import { getBlogPosts } from "@/app/blogs/utils";
import BlogPage from "@/app/demo/blogs/[...filename]/_components/BlogPage";

export async function generateStaticParams() {
  const pages = await databaseClient.queries.blogConnection();
  const paths = pages.data?.blogConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await databaseClient.queries.blog({
    relativePath: `${params.filename[0]}.mdx`,
  });
  const blogs = await getBlogPosts();
  const otherBlogs = blogs
    .filter((b) => b.slug !== params.filename[0])
    .slice(0, 4);

  return (
    <BlogPage
      blog={JSON.parse(JSON.stringify(data.data.blog))}
      otherBlogs={otherBlogs}
    />
  );
}
