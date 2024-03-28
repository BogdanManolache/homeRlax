import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StripeErrorPage() {
  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center gap-4 sm:max-w-7xl">
      <h2 className="text-3xl md:text-5xl">Something went wrong</h2>
      <p className="text-sm md:text-base">
        Oops! It looks like there was an issue with the payment...
      </p>
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href="/products" className="mt-4">
          <Button variant="outline">Browse Products</Button>
        </Link>
        <span>OR</span>
        <p className="text-md text-primary">
          open your shopping cart and try again
        </p>
      </div>
    </div>
  );
}
