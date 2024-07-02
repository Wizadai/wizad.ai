import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        className="mx-auto h-full max-h-[40rem] w-full"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
        alt={props.alt as string}
      />
    ),
    h2: (props) => <h2 {...props} className="hidden" />,
    hr: (props) => <hr {...props} className="hidden" />,
  };
}
