import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

import heroImg from '../public/images/hero.jpg';

export default function Hero() {
  return (
    <section className="mb-8 flex max-w-2xl flex-col items-center justify-between gap-2 pt-2 sm:mb-16 sm:flex-row sm:items-center sm:pt-8 md:max-w-7xl">
      <div className="order-last flex flex-1 flex-col justify-center gap-8 sm:order-1 sm:pl-12">
        <h1 className="mb-4 text-2xl font-bold tracking-wide sm:mb-0 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
          Meet your <span className="text-primary">cozy furniture</span> online
          shop!
        </h1>
        <div className="hidden gap-4 sm:flex">
          <Link href="/products">
            <Button>Shop Now</Button>
          </Link>

          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 sm:order-2">
        <Image
          src={heroImg}
          alt="A table and some comfy chairs"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
