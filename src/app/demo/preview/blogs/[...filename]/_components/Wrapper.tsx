"use client";

import { getBlogPosts } from "@/app/blogs/utils";
import { useTina } from "tinacms/dist/react";
import BlogPage from "@/app/demo/blogs/[...filename]/_components/BlogPage";
import { Exact, BlogQuery, Scalars } from "tina/types";

export default function Wrapper(props: {
  data: BlogQuery;
  query: string;
  variables: Exact<{
    relativePath: Scalars["String"]["input"];
  }>;
  otherBlogs: Awaited<ReturnType<typeof getBlogPosts>>;
}) {
  const { otherBlogs } = props;
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  return <BlogPage blog={data.blog} otherBlogs={otherBlogs} />;
}
