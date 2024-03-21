import Link from 'next/link';
import { Button } from './ui/button';
import { getData } from '@/lib/sanity';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type NewProduct = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  imageUrl: string;
};

const query = `
*[_type == "product"]|order(_createdAt desc) [0...4]{
  _id,
  name,
  price,
  "imageUrl":image.asset->url,
  "slug":slug.current,
  "categoryName":category->name
}
`;

export default async function NewProducts() {
  const newProducts: NewProduct[] = await getData(query);
  console.log(newProducts);

  return (
    <section className=" gapt-4 mb-16 flex max-w-2xl flex-col justify-between pt-2 sm:gap-8 sm:pt-8 md:max-w-7xl">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        Our newest products
      </h2>
      <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {newProducts.map(product => (
          <li key={product._id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-card group-hover:opacity-75 lg:h-80">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={425}
                height={260}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-card-foreground">
                  <Link href={`/products/${product.slug}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.categoryName}
                </p>
              </div>
              <p className="text-sm font-bold text-foreground">
                {product.price} &euro;
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Button variant={'link'} className="self-end">
        <Link href="/products" className="flex items-center gap-1">
          <span>All products</span>
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
