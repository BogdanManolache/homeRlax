'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
          className={`px-4 py-2 font-medium lg:text-lg ${pathname === link.href ? ' text-primary' : 'text-foreground duration-200 hover:text-primary'}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
