import Hero from '@/components/Hero';
import NewProducts from '@/components/new-products/NewProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <>
      <Hero />
      <NewProducts />
    </>
  );
}
