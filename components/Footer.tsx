import Image from 'next/image';
import logoImg from '../app/favicon.ico';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto grid max-w-2xl gap-8 p-4 sm:grid-cols-2 md:max-w-7xl">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center">
          <span className="tracking-wider text-primary">HOME</span>
          <Image src={logoImg} alt="Logo" />
        </div>
        <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
          <li className="text-sm">
            Address: 13 Comfortable Road, 123456, Cozy City
          </li>
          <li className="text-sm">Telephone: (+999) 555 123456</li>
          <li className="text-sm">E-mail: comfy@homerlax.com</li>
        </ul>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div>
        <h4 className="text-md mb-[24px] pt-4 text-center text-primary">
          Company
        </h4>
        <ul className="flex flex-col flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <li>Shop</li>
          <li>About Us</li>
          <li>Privacy policy</li>
          <li>Shipping</li>
        </ul>
      </div>
      <p className="my-4 text-center text-xs text-muted-foreground sm:col-span-2">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
