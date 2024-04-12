'use client';

import { AnimatePresence } from 'framer-motion';
import NavbarMotionLink from './NavbarMotionLink';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
];

export default function Navbar() {
  return (
    <nav className="hidden flex-1 md:block">
      <ul className="flex justify-center gap-2 lg:gap-12">
        <AnimatePresence>
          {links.map((link, index) => (
            <NavbarMotionLink key={index} link={link} />
          ))}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
