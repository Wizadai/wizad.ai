const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_IS_LOCAL
  ) {
    return src;
  }
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
