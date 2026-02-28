import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
  return (
    <section className="py-8 md:py-16 flex flex-col md:gap-8 gap-6 bg-cream">
      <h2 className="text-3xl md:text-5xl text-amber-900 text-center md:px-0 px-1">
        Välkommen till Gelateria Amore Stockholm
      </h2>

      <section className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg md:px-0 px-4 md:w-[60%] mx-auto">
        <h3 className="text-xl font-semibold text-amber-900 mb-4">
          Välkommen till Hornstulls bästa pizzeria och glasscafé
        </h3>
        <p>
          Letar du efter äkta napolitansk pizza i Stockholm? Gelateria Amore på
          Hornstull serverar traditionell stenugnsbakad pizza enligt italienska
          metoder. Vår pizzeria ligger på Långholmsgatan 5, bara ett stenkast
          från Hornstulls tunnelbana. Förutom vår napolitanska pizza erbjuder vi
          även färsk italiensk gelato gjord dagligen, pasta, wraps och
          desserter.
        </p>
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
          På Gelaterian erbjuder vi dig även mat i form av{' '}
          <Link
            href="/pizza"
            className="text-amber-900 underline hover:text-amber-800"
          >
            napolitansk pizza
          </Link>
          , smörgåsar, wraps och italienskt kaffe. Vi är ett familjedrivet
          glasscafé där ägarna Dragana och Miroslav är passionerade, kunniga och
          entusiastiska när det gäller{' '}
          <Link
            href="/gelato"
            className="text-amber-900 underline hover:text-amber-800"
          >
            glass
          </Link>{' '}
          och mat. Kom in och upplev hur äkta kärlek smakar!
        </p>
        <section className="bg-amber-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl text-amber-900 mb-4">
            Hitta oss på Hornstull
          </h3>
          <p className="text-gray-700">
            Vi ligger på <strong>Långholmsgatan 5</strong>, bara 3 minuters
            promenad från <strong>Hornstulls tunnelbanestation</strong>. Vår
            pizzeria och glasscafé är öppen tisdag-torsdag 13-20 och
            fredag-söndag 13-21. Välkommen in för att prova Stockholms bästa
            napolitanska pizza och italienska gelato!
          </p>
        </section>
      </section>

      <section className="md:w-[70%] w-full mx-auto mt-4">
        <h3 className="text-3xl text-amber-900 md:mb-8 mb-6 text-center">
          Vad vi erbjuder
        </h3>

        <div className="flex flex-col md:flex-row gap-8 [&_h3]:text-center [&_h3]:text-2xl [&_h3]:text-foreground/50 [&_h3]:font-light [&_h3]:pt-4 [&_img]:transition-transform [&_img]:duration-300 [&_img]:hover:-translate-y-2 [&_img]:aspect-square [&_img]:object-cover [&_img]:w-full [&_article]:px-6 md:[&_article]:px-0">
          <article>
            <Image
              src="/gelato.jpg"
              width={300}
              height={300}
              alt="Italiensk gelato gjord dagligen på Gelateria Amore pizzeria Hornstull Stockholm"
              className="rounded-lg shadow-md mb-4"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <h4 className="text-xl font-light text-amber-900 mb-2">Gelato</h4>
            <p className="text-sm text-gray-600">
              Färsk italiensk gelato gjord dagligen med naturliga råvaror
            </p>
          </article>

          <article>
            <Image
              src="/pizza-capricciosa.jpeg"
              width={300}
              height={300}
              alt="Napolitansk pizza Capricciosa stenugnsbakad på Gelateria Amore pizzeria Hornstull Stockholm"
              className="rounded-lg shadow-md mb-4"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <h4 className="text-xl font-light text-amber-900 mb-2">Pizza</h4>
            <p className="text-sm text-gray-600">
              Äkta napolitansk pizza bakat i stenugn enligt italiensk tradition
            </p>
          </article>

          <article>
            <Image
              src="/gelato-pink.webp"
              width={300}
              height={300}
              alt="Vegansk gelato gjord dagligen på Gelateria Amore pizzeria Hornstull Stockholm"
              className="rounded-lg shadow-md mb-4"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <h4 className="text-xl font-light text-amber-900 mb-2">
              Vegansk Gelato
            </h4>
            <p className="text-sm text-gray-600">
              Vegansk gelato gjord på vatten och frukter som bas
            </p>
          </article>

          <article>
            <Image
              src="/tomatosauce-gnocchi.JPG"
              width={300}
              height={300}
              alt="Italiensk gnocchi gjord färskt på Gelateria Amore pizzeria Hornstull Stockholm"
              className="rounded-lg shadow-md mb-4"
              sizes="(max-width: 768px) 100vw, 25vw"
            />

            <h4 className="text-xl font-light text-amber-900 mb-2">Gnocchi</h4>
            <p className="text-sm text-gray-600">
              Gnocchi med otrolig goda såser, vi har också pasta
            </p>
          </article>
        </div>
        <p className="text-center mt-8 text-base text-amber-dark">
          För att se allt vi erbjuder var vänlig och se vår {''}
          <Link href="/meny" className="underline">
            meny
          </Link>
        </p>
      </section>
    </section>
  );
}
