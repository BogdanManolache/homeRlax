import imageUrlBuilder from '@sanity/image-url';
import next from 'next';
import { QueryParams, createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'u4qzuc0f',
  dataset: 'production',
  apiVersion: '2024-03-06',
  useCdn: false,
});

//
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

//
export async function getData({
  query,
  queryParams,
}: {
  query: string;
  queryParams?: QueryParams;
}) {
  return await client.fetch(query, queryParams, {
    cache: 'force-cache',
    next: { tags: ['product'] },
  });
}
