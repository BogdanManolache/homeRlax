import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-4 pt-8 sm:max-w-7xl">
      <h2 className="text-5xl">Not Found</h2>
      <p>Oops! We couldn&apos;t find the requested page...</p>
      <Link href="/" className="mt-4">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
