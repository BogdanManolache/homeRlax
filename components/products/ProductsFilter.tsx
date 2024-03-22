'use client';

import { Button } from '../ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductsFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const category = params.get('category');

  return (
    <div className="flex cursor-pointer divide-x overflow-hidden rounded-lg border bg-background">
      <Button
        variant={
          category === 'All' || category === null ? 'secondary' : 'ghost'
        }
        className="rounded-none text-muted-foreground hover:text-muted-foreground"
        onClick={() => router.push('/products?category=All')}
      >
        All
      </Button>
      <Button
        variant={category === 'Beds' ? 'secondary' : 'ghost'}
        className="rounded-none text-muted-foreground hover:text-muted-foreground"
        onClick={() => router.push('/products?category=Beds')}
      >
        Beds
      </Button>
      <Button
        variant={category === 'Chairs' ? 'secondary' : 'ghost'}
        className="rounded-none text-muted-foreground hover:text-muted-foreground"
        onClick={() => router.push('/products?category=Chairs')}
      >
        Chairs
      </Button>
      <Button
        variant={category === 'Sofas' ? 'secondary' : 'ghost'}
        className="rounded-none text-muted-foreground hover:text-muted-foreground"
        onClick={() => router.push('/products?category=Sofas')}
      >
        Sofas
      </Button>
    </div>
  );
}
