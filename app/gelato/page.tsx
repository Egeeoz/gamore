import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import gelatoImg from '@/public/gelato-pink.webp';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamore.vercel.app'),
  title:
    'Italiensk Gelato Stockholm | Färsk Glass Gjord Dagligen | Gelateria Amore',
  description:
    'Äkta italiensk gelato i Stockholm gjord dagligen med svenska ekologiska råvaror. Lär dig vad gelato är och hur vi tillverkar den på Gelateria Amore.',
  keywords: [
    'gelato Stockholm',
    'italiensk gelato',
    'vad är gelato',
    'färsk glass',
    'gelato tillverkning',
    'italiensk glass Stockholm',
    'handgjord gelato',
    'gelato smak',
    'Hornstull gelato',
  ],
  openGraph: {
    title: 'Italiensk Gelato i Stockholm - Äkta italiensk glass gjord dagligen',
    description:
      'Lär dig allt om äkta italiensk gelato. Vi tillverkar vår gelato med de bästa råvarorna och italiensk tradition.',
    url: 'https://gamore.vercel.app/gelato',
    siteName: 'Gelateria Amore',
    images: [
      {
        url: '/gelato.jpg',
        width: 1200,
        height: 630,
        alt: 'Italiensk gelato från Gelateria Amore i Stockholm',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamore.vercel.app/gelato',
  },
};

export default function GelatoPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full relative overflow-hidden"
        style={{ minHeight: '550px' }}
      >
        <Image
          src={gelatoImg}
          alt="Italiensk gelato - färsk glass gjord dagligen på Gelateria Amore"
          fill
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

        <section className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-3 leading-tight tracking-tight">
              Italiensk Gelato
            </h1>
            <p className="text-xl md:text-2xl text-amber-300 font-light mb-2 tracking-wide">
              Äkta kärlek i varje skalp
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed font-light">
              Handgjord gelato med svenska ekologiska råvaror och italienska
              traditioner. Lär dig mer om vad gelato är och hur vi tillverkar
              den.
            </p>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{
            height: '12px',
            fill: 'white',
          }}
        >
          <defs>
            <pattern
              id="spike-pattern"
              x="0"
              y="0"
              width="11"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 12L5.5 1l5.5 11z" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spike-pattern)" />
        </svg>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 flex flex-col gap-8 bg-white">
        {/* Vad är Gelato */}
        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl text-amber-900 mb-8 font-light">
            Vad är Gelato?
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Gelato betyder glass på italienska, men när vi pratar om att köpa
              gelato syftar vi nästan alltid på en speciell slags glass. Till
              skillnad från traditionell glass, som vi för det mesta konsumerar,
              innehåller gelato nästan ingen grädde alls, utan den tillverkas
              endast av komjölk, socker och smakämnen. Med så simpla råvaror är
              det väldigt viktigt att dessa håller hög klass för att skapa en
              exklusiv och delikat produkt.
            </p>
            <p>
              Hos oss på Gelateria Amore på Långholmsgatan 5 i Stockholm kan du
              vara säker på att all vår gelato i Stockholm är tillverkad med
              äkta kärlek och med de bästa råvarorna som marknaden erbjuder.
            </p>
          </div>
        </article>

        {/* Divider */}
        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        {/* Hur Tillverkas Ern Gelato */}
        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl text-amber-900 mb-8 font-light">
            Hur Tillverkas Vår Gelato?
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Gelato har en bas på mjölk, socker och smakämnen och till skillnad
              från vanlig glass använder vi inte grädde eller ägg för att
              tillverka våra produkter. Även mjölken som vi använder har endast
              en fettmängd på 3,5 %, vilket gör att den härliga krämigheten
              måste komma från ett annat håll.
            </p>
            <p>
              Äkta gelato, precis sådan som vi tillverkar, består av flera olika
              sorters socker som är av mycket bra kvalitet för bästa möjliga
              smak. Det är just sockret som är den bidragande faktorn till dess
              krämighet. Gelato är en väldigt kompakt glassform som innehåller
              betydligt mindre insprutad luft än traditionell glass.
            </p>
            <p>
              Vanlig glass har ungefär 50 % insprutad luft, medan den gelato som
              vi tillverkar endast har runt 10 %. För att få den optimala
              smakupplevelsen rekommenderar vi att servera gelato vid -14
              grader. Vid denna temperatur kommer smakerna fram betydligt
              bättre, vilket den lägre fetthalten bidrar starkt till.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/gelato.jpg"
              alt="Italiensk gelato - färsk handgjord glass från Gelateria Amore Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="/gelato-pink.webp"
              alt="Rosa gelato med hallon smak - italiensk glass i Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </article>

        {/* Divider */}
        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        {/* Beste Råvaror */}
        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl text-amber-900 mb-8 font-light">
            Vi Använder Bara de Bästa Råvarorna
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Vi är väldigt stolta över vår Gelato och tillverkar den med äkta
              kärlek. Med äkta kärlek kommer även ett pris. Vi använder oss
              endast av de bästa råvarorna som marknaden erbjuder – allt för att
              din smakupplevelse ska bli så genuin och minnesvärd som möjligt.
            </p>
            <p>
              Som vi alla vet är bra råvaror dyra och priset på gelato går
              därför inte att jämföra med vanlig glass. Vi är dock inte villiga
              att kompromissa på kvaliteten, då vi vill ge dig den bästa möjliga
              smakupplevelsen. Välkommen in och testa den bästa gelaton i
              Stockholm!
            </p>
            <p>
              Om ni istället för mjölkbasrad gelato föredrar vegansk gelato
              hittar ni även det hos oss, vilket ni kan läsa mer om{' '}
              <Link
                href="/vegansk-gelato"
                className="text-amber-900 underline font-semibold hover:text-amber-800 transition-colors"
              >
                här
              </Link>
              .
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
