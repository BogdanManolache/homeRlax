'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ShoppingCartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={'ghost'}
          className="flex flex-col gap-1 sm:h-20 sm:w-20"
        >
          <ShoppingCart />
          <span className="hidden text-xs sm:block">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-5/6">
        <SheetHeader>
          <SheetTitle>My Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y">[TBD]</ul>
          </div>

          <div className="border-t px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal:</p>
              <p>[Total Price] &euro;</p>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6 text-center">
              <Button>Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
              <p>
                OR{' '}
                <Link
                  href="/products"
                  className=" font-medium text-primary duration-300 hover:text-primary/80"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
