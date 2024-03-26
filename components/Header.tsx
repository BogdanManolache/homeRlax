import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

import logoSvg from '../public/Logo.svg';
import { Button } from './ui/button';
import { ShoppingCart, User } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import NavbarMobile from './NavbarMobile';

export default function Header() {
  return (
    <header className="mx-auto mb-6 flex max-w-2xl items-center justify-between border-b pr-4 sm:pr-6 md:max-w-7xl">
      <div className="flex items-center">
        <NavbarMobile />
        <Link href="/" className="ml-4 flex items-center py-2 md:ml-6">
          <span className="hidden text-3xl tracking-wider text-primary md:inline-block">
            HOME
          </span>
          <Image src={logoSvg} width={80} alt="homeRlax logo image" priority />
        </Link>
      </div>

      <Navbar />

      <div className="flex items-center gap-0.5 md:gap-2">
        <ModeToggle />
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
