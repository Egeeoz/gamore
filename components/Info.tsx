import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
  return (
    <section className="py-8 flex flex-col items-center gap-10 bg-[#FAF9F6]">
      <h1 className="text-center text-2xl md:text-3xl tracking-widest font-semibold">
        VÄLKOMMEN TILL GELATERIA AMORE STOCKHOLM
      </h1>
      <div className="flex flex-col gap-4 px-4 md:px-0 md:w-[65%] [&>p]:text-foreground/70">
        <p>
          Om ni är sugna på Stockholms bästa Gelato, så är Gelateria Amore på
          Långholmsgatan 5 i Stockholm den rätta platsen för er. Här hittar ni
          enligt våra kunder den bästa och mest autentiska gelaton i stan. Hos
          oss är allting tillverkat med kärlek och självklart använder vi oss
          endast av de bästa råvarorna som marknaden erbjuder. Förutom
          traditionell gelato erbjuder vi även vegansk gelato.
        </p>
        <p>
          Vår gelato innehåller de finaste råvarorna, färska och torkade frukter
          och bär samt reducerad mängd socker och fett för en nyttigare gelato
          utan att kompromissa med smaken. Utöver vår gelato i Stockholm så
          hittar ni även mycket annat gott hos oss. Ni kan bland annat köpa
          handgjorda tårtor, gelato-tårtor, hemmagjord choklad, praliner och
          desserter.
        </p>
        <p>
          På Gelaterian erbjuder vi dig även mat i form av Napolitansk pizza,
          smörgåsar, wraps och italienskt kaffe. Om du vill njuta av den godaste
          gelaton i Stockholm, tårtor och andra spännande delikatesser i ditt
          hem, på firmafesten, under ett event eller något helt annat, så
          erbjuder vi er självklart catering i Stockholm i världsklass.
        </p>
        <p>
          Hos oss hittar ni även Smörgåstårta, Wraps catering, glass catering
          och ni får inte missa möjligheten att gå på vår unika glassprovning!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 [&_h3]:text-center [&_h3]:text-2xl [&_h3]:text-foreground/50 [&_h3]:font-light [&_h3]:pt-4 [&_img]:transition-transform [&_img]:duration-300 [&_img]:hover:-translate-y-2 [&_img]:aspect-square [&_img]:object-cover [&_img]:rounded-sm [&_img]:border-2 [&_img]:border-gold">
        <article>
          <Link href="#">
            <Image
              src="/smörgåstårta.jpg"
              width={275}
              height={275}
              alt="Bild på en smörgåstårta"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </Link>
          <h3>Smörgåstårta</h3>
        </article>
        <article>
          <Link href="#">
            <Image
              src="/gelato.jpg"
              width={275}
              height={275}
              alt="Bild på italiensk gelato"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </Link>
          <h3>Gelato</h3>
        </article>
        <article>
          <Link href="#">
            <Image
              src="/pizza.jpg"
              width={275}
              height={275}
              alt="Bild på en napolitansk pizza, pizzan heter Estate på menyn"
              className="object-left"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </Link>
          <h3>Pizza</h3>
        </article>
        <article>
          <Link href="#">
            <Image
              src="/glasstårta.jpg"
              width={275}
              height={275}
              alt="Bild på en Glasstårta"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </Link>
          <h3>Glasstårta</h3>
        </article>
      </div>
    </section>
  );
}
