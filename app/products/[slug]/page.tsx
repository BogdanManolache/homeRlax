import { Button } from '@/components/ui/button';
import { getData } from '@/lib/sanity';
import { Product } from '@/types';
import { Truck, ShoppingCart, ArrowRightIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Slug = {
  slug: string;
};

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs: Slug[] = await getData(
    `*[_type == "product"]{"slug":slug.current}`,
  );
  return slugs;
}

export async function generateMetadata({ params: { slug } }: ProductPageProps) {
  const product: Product = await getData(
    `*[_type == "product" && slug.current == "${slug}"][0]{name}`,
  );

  return {
    title: product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const query = `
*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
  name,
  price,
  "imageUrl":image.asset->url,
  "slug":slug.current,
  "categoryName":category->name,
  description
}
`;

  const product: Product = await getData(query);

  return (
    <section className="mb-32 mt-24 flex max-w-2xl items-center justify-center px-4 py-2 sm:px-8 sm:py-4 md:max-w-7xl">
      <article className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={1000}
            height={667}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="mb-2 md:mb-3">
            <span className="text-md mb-2 inline-block uppercase text-muted-foreground">
              {product.categoryName}
            </span>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              {product.name}
            </h2>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-foreground md:text-2xl">
                {product.price} &euro;
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                {product.price + 50} &euro;
              </span>
            </div>

            <span className="text-sm text-muted-foreground">
              Incl. VAT plus shipping
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <Truck className="h-6 w-6" />
            <span className="text-xs">2-4 Day Shipping</span>
          </div>

          {true ? (
            <div className="mb-4 flex gap-4">
              <Button className="flex items-center gap-1">
                <span>Add to Cart</span>
                <ShoppingCart />
              </Button>
              <Button variant="outline" className="flex items-center gap-1">
                <span>Go to Checkout</span>
                <ArrowRightIcon />
              </Button>
            </div>
          ) : (
            <Link href="/sign-in" className="mb-4">
              <Button className="flex items-center gap-1">
                <span className="capitalize">Log In to buy</span>
                <User />
              </Button>
            </Link>
          )}

          <p className="text-base tracking-wide text-muted-foreground">
            {product.description}
          </p>
        </div>
      </article>
    </section>
  );
}
