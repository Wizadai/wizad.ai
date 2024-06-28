import { getBase64Url } from "@/utils/plaiceholder";
import { getBaseUrl } from "@/utils/getBaseUrl";
import Image, { ImageProps } from "next/image";

export default async function LogoImage({
  src,
  alt,
  ...props
}: Omit<ImageProps, "blurDataUrl" | "placeholder" | "loading">) {
  const baseUrl = getBaseUrl();
  const blurUrl = await getBase64Url(`${baseUrl}/assets/logo-footer.png`);

  return (
    <Image
      {...props}
      placeholder="blur"
      blurDataURL={blurUrl}
      alt={alt}
      src={src}
    />
  );
}
