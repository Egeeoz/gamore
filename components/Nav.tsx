import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';

const gelateriaItems = [
  {
    label: 'Glassprovning',
    href: '/',
  },
  {
    label: 'Glasstårta',
    href: '/',
  },
  {
    label: 'Vegansk Gelato',
    href: '/',
  },
  {
    label: 'Tårta',
    href: '/',
  },
];

export default function Nav() {
  return (
    // Förbättrings ide, samla drop downs till en sida, separera beställ online knapp så den sticker ut mer för användare, ska smörgåstårta ligga under catering drop down? Beställ online knapp byta till dropdown, passar mer in i menyn som består av fler dropdown

    <header className="sticky top-0">
      <nav className="flex items-center justify-center gap-14 py-3.5 bg-background">
        <Image
          src="/logo-gamore.png"
          alt="Gelateria Amore Logo"
          loading="eager"
          width={183}
          height={99}
        />
        <ul className="flex gap-14 uppercase text-sm">
          <li>
            <a href="#">Hem</a>
          </li>
          <li>beställ online</li>
          <li>
            <NavDropdown title="GELATERIA" items={gelateriaItems} />
          </li>
          <li>
            <a href="#">smörgåstårta</a>
          </li>
          <li>catering</li>
          <li>om oss</li>
        </ul>
      </nav>
    </header>
  );
}
