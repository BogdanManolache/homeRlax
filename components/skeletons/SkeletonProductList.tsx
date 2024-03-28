import { Product } from '@/types';
import { Skeleton } from '../ui/skeleton';

export default function SkeletonProductList({
  productsList,
}: {
  productsList: Product[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {productsList.map(product => (
        <li key={product._id} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Skeleton className="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>

          <Skeleton className="mt-4 h-6 w-32" />

          <Skeleton className=" mt-1 h-6 w-32" />
        </li>
      ))}
    </ul>
  );
}
