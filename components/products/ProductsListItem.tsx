import { type Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsListItem({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}#product`} className="group">
      <li className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={465}
          height={260}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </li>
      <h3 className="mt-4 text-sm text-muted-foreground">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-foreground">
        {product.price} &euro;
      </p>
    </Link>
  );
}
