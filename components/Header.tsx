import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-6 flex items-center justify-between border-b bg-[hsl(142,71%,45%)] pr-4 sm:pr-6">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={200}
          height={120}
          alt="homeRlax logo image"
          priority
        />
      </Link>
      <Navbar />
      <div className="flex items-center">[cart and login]</div>
    </header>
  );
}
