import { type Product } from '@/types';
import NewProductsListItem from './NewProductsListItem';

export default function NewProductsList({
  newProducts,
}: {
  newProducts: Product[];
}) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {newProducts.map(product => (
        <NewProductsListItem key={product._id} product={product} />
      ))}
    </ul>
  );
}
