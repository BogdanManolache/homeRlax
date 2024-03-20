import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'u4qzuc0f',
  dataset: 'production',
  apiVersion: '2024-03-06',
  useCdn: true,
});

//
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

//
export async function getData(query: string) {
  return await client.fetch(query);
}
