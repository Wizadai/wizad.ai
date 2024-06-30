export default async function Page() {
  const datas = (await import("../abc/page.mdx")).data;
  return <text>{JSON.stringify(datas)}</text>;
}
