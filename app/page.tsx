import Hero from '@/components/Hero';
import Info from '@/components/Info';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamore.vercel.app'),
  title: 'Gelateria Amore - Stockholms Bästa Pizza & Gelato | Hornstull',
  description:
    'Gelateria Amore erbjuder äkta napolitansk pizza och italiensk gelato. Familjedrivet glasscafé på Långholmsgatan 5. Beställ avhämtning eller med leverans.',
  keywords: [
    'gelato Stockholm',
    'italiensk glass Stockholm',
    'pizza Stockholm',
    'vegansk gelato',
    'italiensk glasscafé',
    'Hornstull',
    'smörgåstårta Stockholm',
    'glasstårta',
  ],
  openGraph: {
    title: 'Gelateria Amore - Stockholms Bästa Pizza & Gelato',
    description:
      'Äkta napolitansk pizza och italiensk gelato. Familjedrivet på Hornstull sedan 2014.',
    url: 'https://gamore.vercel.app/', // CHANGE THIS TO GAMORE.SE LATER
    siteName: 'Gelateria Amore',
    images: [
      {
        url: '/gelato.jpg',
        width: 1200,
        height: 630,
        alt: 'Gelateria Amore - Färsk italiensk gelato',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamore.vercel.app/', // CHANGE THIS TO GAMORE.SE LATER
  },
  other: {
    'application/ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        '@id': 'https://gamore.se',
        name: 'Gelateria Amore',
        description:
          'Napolitansk pizzeria och italiensk glasscafé på Hornstull i Stockholm',

        // Adress
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Långholmsgatan 5',
          addressLocality: 'Hornstull, Stockholm',
          addressRegion: 'Stockholm',
          postalCode: '117 33',
          addressCountry: 'SE',
        },

        // Kontakt
        telephone: ['+46707961666', '+4683042700'],
        email: 'info@gamore.se',

        // Position
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 59.317738,
          longitude: 18.0329,
        },

        // Öppettider
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
            opens: '13:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
            opens: '13:00',
            closes: '21:00',
          },
        ],

        // Ny: Lägg till menysektion
        hasMenu: {
          '@type': 'Menu',
          name: 'Huvudmeny',
          description: 'Napolitansk pizza, pasta, gelato och italienska rätter',
          hasMenuSection: [
            {
              '@type': 'MenuSection',
              name: 'Pizza',
              description: 'Stenugnsbakad napolitansk pizza',
              hasMenuItem: [
                {
                  '@type': 'MenuItem',
                  name: 'Pizza Margherita',
                  description: 'Tomatsås, mozzarella, basilika',
                  offers: {
                    '@type': 'Offer',
                    price: '135',
                    priceCurrency: 'SEK',
                  },
                },
                // Lägg till fler populära pizzor...
              ],
            },
          ],
        },

        // Övrig info
        servesCuisine: ['Italiensk', 'Pizza', 'Gelato'],
        priceRange: '$$',
        url: 'https://gamore.se',
        image: 'https://gamore.se/pizza.jpg',

        // Sociala medier
        sameAs: [
          'https://www.facebook.com/gelateriaamore/',
          'https://www.instagram.com/gelateriaamore/',
        ],

        // Ny: Accepterade betalningsmetoder
        paymentAccepted: 'Kontanter, Kort, Swish, Klarna',

        // Ny: Parkering och transport
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Närhet till kollektivtrafik',
            value: 'Hornstulls tunnelbana 3 min promenad',
          },
        ],
      },

      // Lägg till BreadcrumbList för bättre navigation
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Hem',
            item: 'https://gamore.se',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pizzeria Stockholm',
            item: 'https://gamore.se/pizza',
          },
        ],
      },
    ]),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
    </>
  );
}
