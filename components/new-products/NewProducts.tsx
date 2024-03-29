import Link from 'next/link';
import { Button } from '../ui/button';
import { getData } from '@/lib/sanity';
import { ArrowRight } from 'lucide-react';
import { type Product } from '@/types';
import NewProductsList from './NewProductsList';

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
  const newProducts: Product[] = await getData({ query });

  return (
    <section className="mx-auto mb-16 flex max-w-2xl flex-col justify-between gap-4 pt-4 sm:gap-8 sm:pt-8 md:max-w-7xl">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        Our newest arrivals
      </h2>
      <NewProductsList newProducts={newProducts} />
      <Button variant={'link'} className="self-end">
        <Link href="/products?category=All" className="flex items-center gap-1">
          <span>All products</span>
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
