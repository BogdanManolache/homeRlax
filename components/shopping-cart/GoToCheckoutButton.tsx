'use client';

import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function GoToCheckoutButton({
  variant,
}: {
  variant: 'outline' | 'default';
}) {
  return (
    <Button variant={variant} className="flex items-center gap-1">
      <span className="capitalize">Go to Checkout</span>
      <ArrowRightIcon />
    </Button>
  );
}
