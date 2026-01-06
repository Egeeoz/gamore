import Image from 'next/image';
import NavDropdown from './NavDropdown';
import { SidebarTrigger } from './SidebarTrigger';

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

const orderOnlineItems = [
  {
    label: 'Beställ Avhämtning',
    href: '/',
  },
  {
    label: 'Beställ Online',
    href: '/',
  },
];

const aboutItems = [
  {
    label: 'Kontakta oss',
    href: '/',
  },
  {
    label: 'Historia',
    href: '/',
  },
  {
    label: 'Vanliga frågor',
    href: '/',
  },
  {
    label: 'Integritetspolicy',
    href: '/',
  },
];

const cateringItems = [
  {
    label: 'Vegansk Catering',
    href: '/',
  },
  {
    label: 'Gelato Catering',
    href: '/',
  },
  {
    label: 'Wraps Catering',
    href: '/',
  },
];

export default function Nav() {
  return (
    // Förbättrings ide, samla drop downs till en sida, separera beställ online knapp så den sticker ut mer för användare, ska smörgåstårta ligga under catering drop down? Beställ online knapp byta till dropdown, passar mer in i menyn som består av fler dropdown

    <header className="sticky top-0">
      <nav className="flex items-center justify-center md:gap-4 lg:gap-10 xl:gap-16 py-3.5 bg-background">
        <SidebarTrigger />
        <Image
          src="/logo-gamore.png"
          alt="Gelateria Amore Logo"
          loading="eager"
          preload={true}
          width={183}
          height={99}
          fetchPriority="high"
          className="mr-6 md:mr-0"
        />
        <ul className="md:flex hidden gap-0 md:gap-4 lg:gap-10 xl:gap-16 uppercase lg:text-sm text-xs">
          <li>
            <a href="#">Hem</a>
          </li>
          <NavDropdown title="BESTÄLL ONLINE" items={orderOnlineItems} />
          <li>
            <NavDropdown title="GELATERIA" items={gelateriaItems} />
          </li>
          <li>
            <NavDropdown title="CATERING" items={cateringItems} />
          </li>
          <li>
            <NavDropdown title="OM OSS" items={aboutItems} />
          </li>
          <li>
            <a href="#">smörgåstårta</a>
          </li>
          <li>
            <a href="#">pizza</a>
          </li>
        </ul>

        <div className="md:hidden"></div>
      </nav>
    </header>
  );
}
