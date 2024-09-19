import { getBlogPosts } from "@/app/blogs/utils";
import Wrapper from "@/app/demo/preview/blogs/[...filename]/_components/Wrapper";
import client from "tina/databaseClient";

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.blog({
    relativePath: `${params.filename[0]}.mdx`,
  });
  const blogs = await getBlogPosts();
  const otherBlogs = blogs
    .filter((b) => b.slug !== params.filename[0])
    .slice(0, 4);

  return (
    <Wrapper {...JSON.parse(JSON.stringify(data))} otherBlogs={otherBlogs} />
  );
}
