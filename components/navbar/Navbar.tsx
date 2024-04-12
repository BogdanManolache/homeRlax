'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) => {
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
    };
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-1 lg:gap-2">
        {links.map((link, index) => (
          <motion.li key={index}>
            <MotionLink
              href={link.href}
              className={cn(
                'rounded-md px-4 py-2 font-medium text-foreground duration-200 hover:text-primary lg:text-lg',
                pathname === link.href ? 'bg-primary/30' : '',
              )}
            >
              <motion.span>{link.name}</motion.span>
            </MotionLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
