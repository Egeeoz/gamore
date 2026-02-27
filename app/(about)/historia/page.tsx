import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamore.vercel.app'),
  title: 'Vår Historia - Gelateria Amore',
  description:
    'Läs om Gelateria Amore historia. Dragana och Miroslav öppnade denna familjedrivna glasscafé i Stockholm 2014 efter att ha lärt sig traditionell italiensk gelato i Venedig.',
  keywords: [
    'Gelateria Amore historia',
    'om oss',
    'familjehistoria Stockholm',
    'italiensk gelato historia',
  ],
  alternates: {
    canonical: 'https://gamore.vercel.app/historia',
  },
};

const timelineEvents = [
  {
    year: '2010',
    title: 'Kärlekens stad',
    description:
      'Trötta på vintermörkret i Sverige reste Dragana och Miro till Venedig. Där upptäckte de passionen för glasstillverkning och en dröm föddes.',
    image: '/glasstårta.jpg',
    imageAlt: 'Venedig, Italiens stad',
  },
  {
    year: '2010 - 2013',
    title: 'Utbildning & Passion',
    description:
      'Dragana och Miroslav gick på flera kurser i Italien, Frankrike och Sverige. De lärde sig den gamla traditionen att tillverka äkta italiensk gelato och utökade kompetensen inom choklad, kaffe, desserter, catering och pizza.',
    image: '/glasstårta.jpg',
    imageAlt: 'Gelato tillverkning kurs',
  },
  {
    year: '2014',
    title: 'Drömmen blir verklighet',
    description:
      'Gelateria Amore öppnar i Stockholm. En familjedriven glasscafé byggd på kärlek, kvalitet och äkta italienska traditioner. Fokus på närproducerade och ekologiska råvaror.',
    image: '/glasstårta.jpg',
    imageAlt: 'Gelateria Amore öppnar Stockholm',
  },
  {
    year: 'Idag',
    title: 'En familjeaffär',
    description:
      'Dragana är utbildad kock som arbetat hela sitt liv med matlagning. Miroslav är livvakt, möbelrestaurerare, silversmed och framförallt matälskare. Deras dotter Tamara hjälper till i butiken. Tillsammans förenar de passion för äkta matlagning och de finaste råvarorna.',
    image: '/glasstårta.jpg',
    imageAlt: 'Familjefoto av Gelateria Amore team',
  },
];

export default function Historia() {
  return (
    <section className="py-12 md:py-12">
      <div className="flex flex-col items-center gap-8 w-[70%] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4 text-center">
          Vår Historia
        </h1>
        <p className="text-lg text-gray-700">
          En familjedrivet passion för äkta italiensk gelato och pizza. En resa
          som började i Venedig och landet här i Stockholm.
        </p>

        {/* Vision Section */}
        <article className="bg-amber-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-amber-900 mb-4">
            Vår Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">
              "Vår vision är att få det svenska folket att uppleva fröjden i
              äkta matlagning,
            </span>{' '}
            gjord på de finaste råvarorna, och upptäcka hur äkta kärlek smakar!
            Det är därför vi heter som vi gör, Gelateria Amore, Kärlekens
            butik!" - Miroslav
          </p>
        </article>

        {/* Timeline Section */}
        <section className="w-full">
          <h2 className="text-2xl font-light text-amber-900 mb-8 text-center">
            Vår Resa
          </h2>

          <div className="flex flex-col gap-12 items-center">
            {timelineEvents.map((event, index) => (
              <article
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-8 bg-cream rounded-lg px-4 py-4 w-full md:w-[70%]"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block text-sm font-bold bg-amber-700 text-white px-3 py-1 rounded-full whitespace-nowrap">
                    {event.year}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-light text-amber-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="h-40 md:h-48 md:w-48 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-light text-amber-900 mb-8 text-center">
            Familjen bakom Amore
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-light text-amber-900 mb-3">
                Dragana
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Utbildad kock som har jobbat hela sitt liv inom matlagning och
                kallskänka. Hennes passion för kvalitet och autentisk italiensk
                mat är grundstenen i allt vi gör.
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-light text-amber-900 mb-3">
                Miroslav
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Livvakt, möbelrestaurerare, silversmed och framförallt
                matälskare. Hans breda kompetens och entusiasm gör honom en
                värdefull del av Gelateria Amore.
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-gray-200 md:col-span-2 md:max-w-sm md:mx-auto">
              <h3 className="text-xl font-light text-amber-900 mb-3">Tamara</h3>
              <p className="text-gray-700 leading-relaxed">
                Familjens yngsta hjälper ofta till i butiken och är guld värd.
                Hennes energi och dedikation till familjeaffären är
                oöverträffad.
              </p>
            </article>
          </div>
        </section>

        {/* Values Section */}
        <article className="bg-amber-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-amber-900 mb-6">
            Våra Värden
          </h2>
          <ul className="space-y-3 [&_li]:text-gray-700 [&_strong]:font-semibold">
            <li>
              <strong>Autenticitet:</strong> Vi följer traditionella italienska
              metoder för att göra äkta gelato och pizza
            </li>
            <li>
              <strong>Kvalitet:</strong> Endast de finaste råvarorna, så mycket
              ekologisk som möjligt
            </li>
            <li>
              <strong>Närproducerat:</strong> Vi stödjer lokala leverantörer och
              svenska råvaror
            </li>
            <li>
              <strong>Familj:</strong> Det vi gör är gjort med hjärta och
              familjevärden i fokus
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
