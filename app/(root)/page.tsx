import Hero from '@/components/Hero';
import TopProducts from '@/components/NewProducts';
import NewProducts from '@/components/NewProducts';
import { getData, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default async function Home() {
  // const query = `*[_type == "product"][0]`;
  // const product = await getData(query);
  // console.log(product);

  return (
    <>
      <Hero />
      <TopProducts />
      {/* <Image
        src={urlFor(product.image).url()}
        alt="image"
        width={400}
        height={400}
      /> */}
    </>
  );
}
