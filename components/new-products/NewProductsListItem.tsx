import { type Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function NewProductsListItem({ product }: { product: Product }) {
  return (
    <li key={product._id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-card lg:aspect-none group-hover:opacity-75 lg:h-80">
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
          <p className="mt-1 text-xs uppercase text-muted-foreground">
            {product.categoryName}
          </p>
        </div>
        <p className="text-sm font-bold text-foreground">
          {product.price} &euro;
        </p>
      </div>
    </li>
  );
}
