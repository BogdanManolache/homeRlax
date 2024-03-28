'use client';

import { CheckIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function StripeSuccessPage() {
  const { clearCart } = useShoppingCart();

  // clear cart after payment success
  useEffect(() => {
    if (localStorage.getItem('persist:root')) {
      localStorage.removeItem('persist:root');
    }
  }, []);

  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center gap-4 sm:max-w-7xl">
      <h2 className="mb-8 flex items-center gap-2 text-2xl md:text-4xl">
        <CheckIcon className="h-16 w-16 text-green-500" />
        <span>Thank you for your purchase!</span>
      </h2>
      <p className="text-sm md:text-base">
        Now it&apos;s our turn to be as quick as possible with the delivery.
        You&apos;ll be hearing from us sooner than you think! 😁
      </p>
    </div>
  );
}
