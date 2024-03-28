'use client';

import { useShoppingCart } from 'use-shopping-cart';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import GoToCheckoutButton from './GoToCheckoutButton';
import ShoppingCartEntry from './ShoppingCartEntry';

export default function ShoppingCartDrawer() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative flex flex-col gap-1 sm:h-20 sm:w-20"
        >
          {cartCount !== 0 && (
            <div className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500  sm:right-3 sm:top-3">
              <span className="text-sm text-white">{cartCount}</span>
            </div>
          )}
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
            {cartCount !== 0 ? (
              <ul className="divide-y">
                {Object.values(cartDetails || {}).map(entry => (
                  <ShoppingCartEntry key={entry.id} entry={entry} />
                ))}
              </ul>
            ) : (
              <p>The shopping cart is empty.</p>
            )}
          </div>

          <div className="border-t px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-semibold">
              <p>Subtotal:</p>
              {totalPrice === 0 ? null : <p>{totalPrice} &euro;</p>}
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6 flex justify-center">
              <GoToCheckoutButton />
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
              <p>
                OR{' '}
                <Link
                  href="/products"
                  className=" font-medium text-primary duration-300 hover:text-primary/80"
                  onClick={() => handleCartClick()}
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
