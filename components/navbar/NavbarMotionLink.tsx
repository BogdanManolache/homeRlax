'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  type MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number,
) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;

  return (value: number) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const setTransform = (
  item: HTMLElement & EventTarget,
  event: React.PointerEvent,
  x: MotionValue,
  y: MotionValue,
) => {
  const bounds = item.getBoundingClientRect();
  const relativeX = event.clientX - bounds.left;
  const relativeY = event.clientY - bounds.top;
  const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  x.set(xRange * 10);
  y.set(yRange * 10);
};

export default function NavbarMotionLink({
  link,
}: {
  link: { name: string; href: string };
}) {
  const pathname = usePathname();
  const MotionLink = motion(Link);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const textX = useTransform(x, latest => latest * 0.5);
  const textY = useTransform(y, latest => latest * 0.5);

  return (
    <motion.li
      onPointerMove={e => {
        const item = e.currentTarget;
        setTransform(item, e, x, y);
      }}
      onPointerLeave={e => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: textX, y: textY }}
    >
      <MotionLink
        href={link.href}
        className={cn(
          'relative rounded-md px-4 py-2 font-medium text-foreground transition-all duration-300 ease-out hover:bg-primary/20 lg:text-lg',
          pathname === link.href ? 'bg-primary/10' : '',
        )}
      >
        <motion.span className="relative z-10">{link.name}</motion.span>
        {pathname === link.href ? (
          <motion.div
            transition={{ type: 'spring' }}
            layoutId="underline"
            className="absolute bottom-0 left-0 h-full w-full rounded-md bg-primary/15"
          ></motion.div>
        ) : null}
      </MotionLink>
    </motion.li>
  );
}
