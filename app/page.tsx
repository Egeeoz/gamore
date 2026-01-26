import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import { Metadata } from 'next';

export const metadata: Metadata = {
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
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Gelateria Amore',
      description: 'Äkta napolitansk pizza och italiensk gelato',

      // Adress
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Långholmsgatan 5',
        addressLocality: 'Stockholm',
        postalCode: '117 33',
        addressCountry: 'SE',
      },

      // Kontakt
      telephone: '+46707961666',
      email: 'info@gamore.se',

      // Position (viktigt för "near me" sökningar)
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 59.317738,
        longitude: 18.0329,
      },

      // Öppettider BYT DETTA SEN
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
          opens: '11:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '21:00',
        },
      ],

      // Övrig info
      servesCuisine: 'Italiensk',
      priceRange: '$',
      url: 'https://gamore.vercel.app/', // CHANGE THIS LATER TO REAL DOMAIN
      image: 'https://gamore.vercel.app/gelato.jpg', // CHANGE THIS LATER TO REAL DOMAIN

      // Sociala medier
      sameAs: [
        'https://www.facebook.com/gelateriaamore/',
        'https://www.instagram.com/gelateriaamore/',
      ],
    }),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Footer />
    </>
  );
}
