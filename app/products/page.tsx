import SkeletonProductList from '@/components/skeletons/SkeletonProductList';
import ProductsFilter from '@/components/products/ProductsFilter';
import ProductsList from '@/components/products/ProductsList';
import { getData } from '@/lib/sanity';
import { type Product } from '@/types';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Products',
};

type ProductsPageProps = {
  searchParams: { category: string | undefined };
};

const query = `
*[_type == "product"]{
  _id,
  name,
  price,
  "imageUrl":image.asset->url,
  "slug":slug.current,
  "categoryName":category->name,
}
`;

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = searchParams;

  const products: Product[] = await getData(query);
  const productsList =
    !category || category === 'All'
      ? products
      : products.filter(prod => prod.categoryName === category);

  return (
    <section className="mx-auto mb-16 mt-2 flex max-w-2xl flex-col justify-between gap-4 sm:gap-8 md:max-w-7xl">
      <div className="sticky top-0 z-50 flex flex-col items-center justify-between gap-4 bg-background py-4 sm:flex-row">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Our <span className="text-primary">comfy</span> products
        </h2>
        <ProductsFilter />
      </div>
      <Suspense fallback={<SkeletonProductList productsList={productsList} />}>
        <ProductsList productsList={productsList} />
      </Suspense>
    </section>
  );
}
