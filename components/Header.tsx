import Image from 'next/image';
import Link from 'next/link';

import Navbar from './navbar/Navbar';
import NavbarMobile from './navbar/NavbarMobile';

import { ModeToggle } from './ModeToggle';
import ShoppingCartDrawer from './shopping-cart/ShoppingCartDrawer';
import { auth } from '@clerk/nextjs';
import UserInfo from './UserInfo';

export default function Header() {
  const { userId } = auth();
  const isLoggedIn = Boolean(userId);

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
          <Image
            src="/Logo.png"
            width={80}
            height={80}
            alt="homeRlax logo image"
            priority
          />
        </Link>
      </div>

      <Navbar />

      <div className="flex items-center gap-1 md:gap-2">
        <ModeToggle />

        <ShoppingCartDrawer isLoggedIn={isLoggedIn} />

        <UserInfo />
      </div>
    </header>
  );
}
