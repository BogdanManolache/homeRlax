import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center gap-4 pt-8 sm:max-w-7xl">
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
