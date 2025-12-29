import Image from 'next/image';

export default function Nav() {
  return (
    // Förbättrings ide, samla drop downs till en sida, separera beställ online knapp så den sticker ut mer för användare, ska smörgåstårta ligga under catering drop down? Beställ online knapp byta till dropdown, passar mer in i menyn som består av fler dropdown

    <header className="sticky top-0">
      <nav className="flex items-center justify-center gap-14 py-3.5 bg-background">
        <Image
          src="/logo-gamore.png"
          alt="Gelateria Amore Logo"
          width={183}
          height={99}
        />
        <ul className="flex gap-14 uppercase text-sm">
          <li>
            <a href="#">Hem</a>
          </li>
          <li>beställ online</li>
          <li>gelateria</li>
          <li>smörgåstårta</li>
          <li>catering</li>
          <li>om oss</li>
        </ul>
      </nav>
    </header>
  );
}
