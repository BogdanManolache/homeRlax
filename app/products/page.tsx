import ProductsFilter from '@/components/ProductsFilter';

type ProductsPageProps = {
  searchParams: { category: string | undefined };
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = searchParams;
  console.log(category);

  return (
    <section className="mb-8 mt-4 flex max-w-2xl flex-col justify-between gap-4 sm:gap-8 md:max-w-7xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Our <span className="text-primary">comfy</span> products
        </h2>
        <ProductsFilter />
      </div>
      <ul>{category}</ul>
    </section>
  );
}
