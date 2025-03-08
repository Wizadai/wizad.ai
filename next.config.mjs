import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "api.producthunt.com",
        protocol: "https",
      },
      {
        hostname: "api.qrserver.com",
        protocol: "https",
      },
      {
        hostname: "ph-avatars.imgix.net",
        protocol: "https",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
