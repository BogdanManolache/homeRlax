'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:gap-1 lg:gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            'px-4 py-2 font-medium text-foreground duration-200 hover:text-primary lg:text-lg',
            pathname === link.href ? 'text-primary' : '',
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
