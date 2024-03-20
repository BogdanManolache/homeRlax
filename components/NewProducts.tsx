import Link from 'next/link';
import { Button } from './ui/button';

export default function TopProducts() {
  return (
    <section className=" mb-16 flex max-w-2xl flex-col items-center justify-between gap-16 pt-2 sm:pt-8 md:max-w-7xl">
      <h2 className="text-xl font-semibold text-primary sm:text-2xl">
        Best Sellers
      </h2>
      <div className="flex w-full flex-col items-center gap-6 bg-red-50 sm:flex-row">
        <div className="h-40 flex-1 bg-orange-100">1</div>
        <div className="h-40 flex-1 bg-orange-100">2</div>
        <div className="h-40 flex-1 bg-orange-100">3</div>
      </div>
      <Button variant={'link'} className="self-end">
        <Link href="/products">See All...</Link>
      </Button>
    </section>
  );
}
