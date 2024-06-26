import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { auth } from '@clerk/nextjs';

export default function Hero() {
  const { userId } = auth();

  return (
    <section className="mx-auto mb-16 flex max-w-2xl flex-col items-center justify-between gap-2 pt-4 sm:flex-row sm:items-center sm:pt-8 md:max-w-7xl">
      <div className="order-last flex flex-1 flex-col justify-center gap-8 sm:order-1 sm:pl-12">
        <h1 className="mb-4 text-2xl font-semibold tracking-wider sm:mb-0 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
          Where <span className="text-primary">comfort</span> meets{' '}
          <span className="text-primary">convenience</span> in every click!
        </h1>

        <div className="hidden gap-4 sm:flex">
          <Link href="/products?category=All">
            <Button>Shop Now</Button>
          </Link>

          {!userId && (
            <Link href="/sign-in#signIn">
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 sm:order-2">
        <Image
          src="/images/hero.jpg"
          alt="A table and some comfy chairs"
          width={500}
          height={500}
          priority={true}
          className="h-full w-full rounded-md object-cover object-center"
        />
      </div>
    </section>
  );
}
