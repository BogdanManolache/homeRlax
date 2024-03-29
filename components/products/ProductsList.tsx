import { Product } from '@/types';
import ProductsListItem from './ProductsListItem';

export default function ProductsList({
  productsList,
}: {
  productsList: Product[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {productsList.map(product => (
        <ProductsListItem key={product._id} product={product} />
      ))}
    </ul>
  );
}
