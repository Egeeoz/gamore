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
    label: 'Vegansk gelato',
    href: '/',
  },
  {
    label: 'Tårta',
    href: '/',
  },
];

const orderOnlineItems = [
  {
    label: 'Beställ avhämtning',
    href: 'https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup',
  },
  {
    label: 'Beställ med leverans',
    href: 'https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan',
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

// const cateringItems = [
//   {
//     label: 'Vegansk Catering',
//     href: '/',
//   },
//   {
//     label: 'Gelato Catering',
//     href: '/',
//   },
//   {
//     label: 'Wraps Catering',
//     href: '/',
//   },
// ];

export default function Nav() {
  return (
    // Förbättrings ide, samla drop downs till en sida, separera beställ online knapp så den sticker ut mer för användare, ska smörgåstårta ligga under catering drop down? Beställ online knapp byta till dropdown, passar mer in i menyn som består av fler dropdown

    <header className="sticky top-0 z-10">
      <nav className="flex items-center justify-center md:gap-2 lg:gap-8 xl:gap-14 py-3.5 bg-background">
        <SidebarTrigger />
        <Image
          src="/logo-gamore.png"
          alt="Gelateria Amore Logo"
          width={185}
          height={100}
          className="mr-6 md:mr-0"
          loading="eager"
          style={{ width: '185px', height: '100px' }}
        />
        <ul className="md:flex hidden gap-0 md:gap-4 lg:gap-10 xl:gap-16 uppercase lg:text-sm text-xs">
          <li>
            <a href="#" className="hover:text-[#C59D5F] ease-in-out transition">
              Hem
            </a>
          </li>
          <li>
            <NavDropdown
              title="BESTÄLL ONLINE"
              items={orderOnlineItems}
              rel="noopener noreferrer"
              target="_blank"
            />
          </li>
          <li>
            <NavDropdown title="GELATERIA" items={gelateriaItems} />
          </li>
          <li>
            <NavDropdown title="OM OSS" items={aboutItems} />
          </li>
          <li>
            <a href="#" className="hover:text-[#C59D5F] ease-in-out transition">
              smörgåstårta
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C59D5F] ease-in-out transition">
              pizza
            </a>
          </li>
        </ul>

        <div className="md:hidden"></div>
      </nav>
    </header>
  );
}
