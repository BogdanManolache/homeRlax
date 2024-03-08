import Navbar from '@/components/Navbar';
import { client } from '@/lib/sanity';

export default async function Home() {
  // const products = await client.fetch(`*[_type == "product"]`);
  // console.log(products);

  return <div>[Home Page]</div>;
}
