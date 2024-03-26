'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
];

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="ml-4 md:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full md:hidden">
        <nav className="flex flex-col items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="cursor-pointer px-4 py-2 font-medium text-foreground  duration-200 hover:text-primary lg:text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/*
<nav className="flex flex-col items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-4 py-2 font-medium text-foreground  duration-200 hover:text-primary lg:text-lg"
          >
            {link.name}
          </Link>
        ))}
      </nav>
*/
