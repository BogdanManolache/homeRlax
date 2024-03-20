import Link from 'next/link';
import { Button } from './ui/button';
import { getData } from '@/lib/sanity';

type NewProduct = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  image: unknown;
};

const query = `*[_type == "product"][1...4]{
  _id,
  name,
  price,
  image,
  "slug":slug.current,
  "categoryName":category->name
}`;

export default async function NewProducts() {
  const newProducts = await getData(query);
  console.log(newProducts);

  return (
    <section className=" mb-16 flex max-w-2xl flex-col items-center justify-between gap-16 pt-2 sm:pt-8 md:max-w-7xl">
      <h2 className="text-xl font-semibold capitalize text-primary sm:text-2xl">
        Our newest products
      </h2>
      <div className="flex w-full flex-col items-center gap-6 bg-red-50 md:flex-row">
        {newProducts.map((newProduct: NewProduct) => (
          <div key={newProduct._id} className="flex-1">
            {newProduct.name}
          </div>
        ))}
      </div>
      <Button variant={'link'} className="self-end capitalize">
        <Link href="/products">See all...</Link>
      </Button>
    </section>
  );
}
