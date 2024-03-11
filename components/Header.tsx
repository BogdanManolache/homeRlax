import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

import logoImg from '../public/logo.png';
import { Button } from './ui/button';
import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b  pr-4 sm:pr-6">
      <Link href="/">
        <Image src={logoImg} width={180} alt="homeRlax logo image" priority />
      </Link>
      <Navbar />
      <div className="flex items-center gap-2">
        <Button
          variant={'ghost'}
          className="flex flex-col gap-1 sm:h-20 sm:w-20"
        >
          <User />
          <span className="hidden text-xs sm:block">Account</span>
        </Button>
        <Button
          variant={'ghost'}
          className="flex flex-col gap-1 sm:h-20 sm:w-20"
        >
          <ShoppingCart />
          <span className="hidden text-xs sm:block">Cart</span>
        </Button>
      </div>
    </header>
  );
}
