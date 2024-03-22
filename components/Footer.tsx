import Image from 'next/image';
import logoImg from '../app/favicon.ico';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="grid gap-8 bg-foreground px-4 py-2 text-background sm:grid-cols-2">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-0.5">
          <span>H</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
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
        <h4 className="text-md mb-[24px] pt-4 text-center text-background">
          Company
        </h4>
        <ul className="flex flex-col flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <li>Shop</li>
          <li>About Us</li>
          <li>Privacy policy</li>
          <li>Shipping</li>
        </ul>
      </div>
      <p className="col-span-2 my-4 text-center text-xs text-muted-foreground">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
