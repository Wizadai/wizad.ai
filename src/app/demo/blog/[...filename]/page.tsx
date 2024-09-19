import Post from './client-page'
import { databaseClient } from '../../../../../tina/__generated__/databaseClient'

export async function generateStaticParams() {
  const pages = await databaseClient.queries.postConnection()
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export default async function PostPage({
  params,
}: {
  params: { filename: string[] }
}) {
  const data = await databaseClient.queries.post({
    // relativePath: `${params.filename}.md`,
    relativePath: 'hello-world.md',
  })

  return (
   <Post data={JSON.parse(JSON.stringify(data.data))} query={data.query} variables={data.variables} />
  )
}