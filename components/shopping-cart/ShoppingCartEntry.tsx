import Image from 'next/image';
import Link from 'next/link';
import { type CartEntry } from 'use-shopping-cart/core';
import { Button } from '../ui/button';
import { Trash2Icon } from 'lucide-react';

type ShoppingCartEntryProps = {
  entry: CartEntry;
};

export default function ShoppingCartEntry({ entry }: ShoppingCartEntryProps) {
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
        <div className="flex justify-between text-base font-medium">
          <h3>
            <Link href="#">{entry.name}</Link>
          </h3>
          <p className="ml-4">{entry.price * entry.quantity} &euro;</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-muted-foreground">
            {entry.quantity} {entry.quantity > 1 ? 'items' : 'item'}
          </p>

          <div className="flex">
            <Button variant="ghost" className="text-xs">
              <Trash2Icon />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
