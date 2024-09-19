import { Form, TinaCMS, type Collection } from "tinacms";

const getWordCount = (node: any): number => {
  if (node.type === "text") {
    return node.text.split(/\s+/).filter(Boolean).length;
  }
  if (node.children) {
    return node.children.reduce(
      (count: number, child: any) => count + getWordCount(child),
      0,
    );
  }
  return 0;
};

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog",
  path: "content/blogs",
  format: "mdx",
  ui: {
    router: ({ document }) => `demo/preview/blogs/${document._sys.filename}`,
    filename: {
      readonly: true,
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string}
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
    beforeSubmit: async ({
      form,
      cms,
      values,
    }: {
      form: Form;
      cms: TinaCMS;
      values: Record<string, any>;
    }) => {
      const wordCount = getWordCount(values.body);
      console.log(wordCount);
      return {
        ...values,
        readingDuration: Math.ceil(wordCount / 200),
      };
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "publishedAt",
      label: "Published At",
      required: true,
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      required: true,
      options: ["Social Media", "Tutorials"],
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      required: true,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "number",
      name: "readingDuration",
      required: true,
      ui: {
        component: null,
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {
          name: "Image",
          label: "Image",
          fields: [
            {
              name: "image",
              label: "Image",
              type: "image",
            },
          ],
        },
        {
          name: "QuoteWithPicture",
          label: "Quote with Picture",
          fields: [
            {
              name: "children",
              label: "CTA",
              type: "rich-text",
            },
            {
              name: "image",
              label: "Image",
              type: "image",
            },
          ],
        },
        {
          name: "TwoImages",
          label: "Two Images",
          fields: [
            {
              name: "image1",
              label: "Image 1",
              type: "image",
            },
            {
              name: "image2",
              label: "Image 2",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
