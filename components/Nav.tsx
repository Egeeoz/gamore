import Image from 'next/image';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import { SidebarTrigger } from './SidebarTrigger';

const gelateriaItems = [
  {
    label: 'Gelato',
    href: 'gelato',
  },
  {
    label: 'Glassprovning',
    href: 'glassprovning',
  },
  {
    label: 'Vegansk gelato',
    href: 'vegansk-gelato',
  },
];

const orderOnlineItems = [
  {
    label: 'Beställ avhämtning',
    href: 'https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup',
  },
  {
    label: 'Beställ med Foodora',
    href: 'https://www.foodora.se/restaurant/wen3/pizzeria-amore-wen3',
  },
  {
    label: 'Beställ med Ubereats',
    href: 'https://www.ubereats.com/se/store/pizzeria-amore/ZVxnn1WoXI6-8CnyRtaBKw?srsltid=AfmBOorD0OZYEB9t2N2MSS26zbPmKLLv9u5roElQ6mV64No06ZmwVrwu',
  },
  {
    label: 'Beställ med Wolt',
    href: 'https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan',
  },
];

const aboutItems = [
  {
    label: 'Historia',
    href: 'historia',
  },
  {
    label: 'Vanliga frågor',
    href: 'faq',
  },
  {
    label: 'Integritetspolicy',
    href: 'integritetspolicy',
  },
];

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
            <Link
              href="/"
              className="hover:text-amber-dark ease-in-out transition"
            >
              hem
            </Link>
          </li>
          <li>
            <Link
              href="meny"
              className="hover:text-amber-dark ease-in-out transition"
            >
              meny
            </Link>
          </li>
          <li>
            <Link
              href="pizza"
              className="hover:text-amber-dark ease-in-out transition"
            >
              pizza
            </Link>
          </li>
          {/* <li>
            <Link
              href="gelato"
              className="hover:text-[#C59D5F] ease-in-out transition"
            >
              gelato
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="glassprovning"
              className="hover:text-[#C59D5F] ease-in-out transition"
            >
              glassprovning
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="vegansk-gelato"
              className="hover:text-[#C59D5F] ease-in-out transition"
            >
              vegansk gelato
            </Link>
          </li> */}
          <li>
            <NavDropdown title="GELATERIA" items={gelateriaItems} />
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
            <NavDropdown title="OM OSS" items={aboutItems} />
          </li>
        </ul>

        <div className="md:hidden"></div>
      </nav>
    </header>
  );
}
