import Image, { ImageProps } from "next/image";

export default function LogoImage({
  src,
  alt,
  ...props
}: Omit<ImageProps, "placeholder" | "loading">) {
  return (
    <Image
      {...props}
      loading="lazy"
      alt={alt}
      src={src}
    />
  );
}
