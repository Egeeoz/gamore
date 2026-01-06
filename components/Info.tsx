import Image from 'next/image';

export default function Info() {
  return (
    <section className="py-10 flex flex-col items-center gap-6">
      <h4 className="text-center text-3xl tracking-widest font-semibold">
        VÄLKOMNA TILL AMORE CATERING STOCKHOLM
      </h4>
      <article className="flex flex-col gap-4 w-[65%] [&>p]:text-foreground/70">
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
      </article>
      <section className="flex gap-3 [&_img]:aspect-square [&_img]:object-cover [&_h5]:text-center [&_h5]:text-2xl [&_h5]:text-foreground/50 [&_h5]:font-light [&_h5]:pt-6">
        <article>
          <Image
            src="/hero-img.png"
            width={275}
            height={275}
            alt="Smörgåstårta"
          />
          <h5>Smörgåstårta</h5>
        </article>
        <article>
          <Image src="/hero-img.png" width={275} height={275} alt="Gelato" />
          <h5>Gelato</h5>
        </article>
        <article>
          <Image src="/hero-img.png" width={275} height={275} alt="Catering" />
          <h5>Catering</h5>
        </article>
        <article>
          <Image
            src="/hero-img.png"
            width={275}
            height={275}
            alt="Glasstårta"
          />
          <h5>Glasstårta</h5>
        </article>
      </section>
    </section>
  );
}
