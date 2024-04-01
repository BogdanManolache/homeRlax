'use client';

import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useShoppingCart } from 'use-shopping-cart';

export default function GoToCheckoutButton() {
  const { redirectToCheckout, cartCount } = useShoppingCart();

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (cartCount === 0) return;

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error(result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleCheckout(e: React.MouseEvent<HTMLButtonElement>) {
    handleClick(e);
  }

  return (
    <Button
      className="flex items-center gap-1"
      onClick={handleCheckout}
      disabled={cartCount === 0}
    >
      <span className="capitalize">Go to Checkout</span>
      <ArrowRightIcon />
    </Button>
  );
}
