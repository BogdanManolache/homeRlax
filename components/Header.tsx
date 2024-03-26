import Image from 'next/image';
import Link from 'next/link';

import Navbar from './navbar/Navbar';
import NavbarMobile from './navbar/NavbarMobile';
import logoSvg from '../public/Logo.svg';

import { Button } from './ui/button';
import { User } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import ShoppingCartDrawer from './shopping-cart/ShoppingCartDrawer';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-2xl items-center justify-between border-b pr-4 sm:pr-6 md:max-w-7xl">
      <div className="flex items-center">
        <NavbarMobile />
        <Link
          href="/"
          className="sm:md-0 ml-4 mr-4 flex items-center py-2 md:ml-6"
        >
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
        {/* <Button
          variant={'ghost'}
          className="flex flex-col gap-1 sm:h-20 sm:w-20"
        >
          <ShoppingCart />
          <span className="hidden text-xs sm:block">Cart</span>
        </Button> */}
        <ShoppingCartDrawer />
      </div>
    </header>
  );
}
