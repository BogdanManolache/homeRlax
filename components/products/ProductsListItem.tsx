'use client';

import { type Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';

export default function ProductsListItem({ product }: { product: Product }) {
  return (
    <li className="group">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={465}
            height={260}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-muted-foreground">{product.name}</h3>

        <p className="mt-1 text-lg font-medium text-foreground">
          {product.price} &euro;
        </p>
      </Link>
    </li>
  );
}
