import Hero from '@/components/Hero';
import NewProducts from '@/components/new-products/NewProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  // const query = `*[_type == "product"][0]`;
  // const product = await getData(query);
  // console.log(product);

  return (
    <>
      <Hero />
      <NewProducts />
      {/* <Image
        src={urlFor(product.image).url()}
        alt="image"
        width={400}
        height={400}
      /> */}
    </>
  );
}
