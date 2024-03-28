import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center gap-4 sm:max-w-7xl">
      <h2 className="text-3xl md:text-5xl">Not Found</h2>
      <p className="text-sm md:text-base">
        Oops! We couldn&apos;t find the requested page...
      </p>
      <Link href="/" className="mt-4">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
