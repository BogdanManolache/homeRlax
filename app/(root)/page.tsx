import Hero from '@/components/Hero';
import NewProducts from '@/components/new-products/NewProducts';

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
