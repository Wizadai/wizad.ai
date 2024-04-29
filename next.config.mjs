/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

export default nextConfig;
