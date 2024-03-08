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
    <nav className="hidden gap-2 md:flex">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`px-4 py-2 lg:text-lg ${pathname === link.href ? 'font-semibold text-white' : 'font-semibold text-foreground duration-200 hover:text-white'}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
