'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type CartEntry } from 'use-shopping-cart/core';
import { Button } from '../ui/button';
import { Trash2Icon } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

type ShoppingCartEntryProps = {
  entry: CartEntry;
};

export default function ShoppingCartEntry({ entry }: ShoppingCartEntryProps) {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();

  return (
    <li className="mx-auto flex max-w-2xl flex-col items-center gap-4 p-6 sm:flex-row sm:gap-0">
      <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={entry.imageUrl}
          alt={entry.name}
          width={96}
          height={64}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex w-full flex-col gap-2 sm:flex-1">
        <div className="flex items-center justify-between text-sm font-medium sm:text-base">
          <h3>
            <Link
              href={`/products/${entry.name.toLowerCase().split(' ').join('-')}`}
            >
              {entry.name}
            </Link>
          </h3>

          <p>{entry.price * entry.quantity} &euro;</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="flex-1 text-muted-foreground">
            {entry.quantity} {entry.quantity > 1 ? 'items' : 'item'}
          </p>

          <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2">
            <Button
              variant="outline"
              className="flex h-6 w-6 items-center justify-center rounded-full p-0 text-sm sm:h-8 sm:w-8 sm:text-lg"
              onClick={() => incrementItem(entry.id)}
            >
              <span>&#43;</span>
            </Button>
            <Button
              variant="outline"
              className="h-6 w-6 items-center justify-center rounded-full p-0 text-sm sm:h-8 sm:w-8 sm:text-lg"
              onClick={() => decrementItem(entry.id)}
            >
              <span>&minus;</span>
            </Button>
          </div>

          <div className="flex flex-1 justify-end">
            <Button
              variant="ghost"
              className="text-xs"
              onClick={() => removeItem(entry.id)}
            >
              <Trash2Icon />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
