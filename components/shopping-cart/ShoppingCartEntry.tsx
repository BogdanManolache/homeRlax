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
    <li className="mx-auto flex max-w-2xl items-center p-6">
      <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={entry.imageUrl}
          alt={entry.name}
          width={96}
          height={64}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between text-base  font-medium">
          <h3 className="flex-1">
            <Link href="#">{entry.name}</Link>
          </h3>
          <div className="flex flex-1 items-center justify-center gap-2">
            <Button
              variant="outline"
              className="h-8 w-8 rounded-full text-lg"
              onClick={() => incrementItem(entry.id)}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 rounded-full text-lg"
              onClick={() => decrementItem(entry.id)}
            >
              -
            </Button>
          </div>
          <p className="ml-4 flex flex-1 justify-end">
            {entry.price * entry.quantity} &euro;
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-muted-foreground">
            {entry.quantity} {entry.quantity > 1 ? 'items' : 'item'}
          </p>

          <div className="flex">
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
