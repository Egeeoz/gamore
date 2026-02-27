import { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  metadataBase: new URL('https://gamore.vercel.app'),
  title: 'Vanliga Frågor - Gelateria Amore',
  description:
    'Få svar på vanliga frågor om beställning, öppettider och betalning på Gelateria Amore i Stockholm.',
  keywords: [
    'vanliga frågor',
    'faq',
    'beställning',
    'öppettider',
    'kontakt',
    'Stockholm',
  ],
  alternates: {
    canonical: 'https://gamore.vercel.app/faq',
  },
};

const faqs = [
  {
    question: 'Vilka är era öppettider?',
    answer:
      'Vi är öppna tisdag-torsdag 13:00-20:00 och fredag-söndag 13:00-21:00. Måndagar är vi stängda.',
  },
  {
    question: 'Hur beställer jag från er?',
    answer:
      'Du kan beställa avhämtning genom vår webshop eller beställa med leverans via Wolt. Du är också välkommen att besöka oss direkt på Långholmsgatan 5 under öppettider.',
  },
  {
    question: 'Finns det vegetariska eller veganska alternativ?',
    answer:
      'Ja, vi erbjuder både vegetariska rätter och vegansk gelato. Du kan se all vår meny på webbplatsen för att se vilka alternativ som passar dina behov.',
  },
  {
    question: 'Hur betalar jag?',
    answer:
      'Du kan betala med kort, Swish eller kontant. Om du beställer via vår webshop kan du också betala med Klarna.',
  },
  {
    question: 'Kan jag boka ett bord?',
    answer:
      'Vi är ett litet café utan reservationsmöjlighet. Du är välkommen att komma förbi när som helst under våra öppettider och njuta av vår gelato och pizza.',
  },
  {
    question: 'Erbjuder ni catering?',
    answer:
      'Vi fokuserar på vår glasscafé och pizzeria. Kontakta oss gärna på 070 796 16 66 eller info@gamore.se för att diskutera eventuella särskilda önskemål.',
  },
  {
    question: 'Är ni glutenfria?',
    answer:
      'Vi rekommenderar att du kontaktar oss direkt för att diskutera glutenfreialternativ. Ring oss på 070 796 16 66 eller mejla info@gamore.se.',
  },
  {
    question: 'Vilka betalningsmetoder accepterar ni?',
    answer:
      'Vi accepterar kort, Swish och kontant. Om du beställer online kan du också betala med Klarna.',
  },
];

export default function FAQ() {
  return (
    <section className="py-12 px-4 bg-cream">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Vanliga Frågor
          </h1>
          <p className="text-lg text-gray-700">
            Här hittar du svar på frågor om beställning, öppettider och kontakt.
          </p>
        </header>

        {/* Accordion */}
        <Accordion type="single" collapsible className="border-b">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <article className="bg-amber-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-amber-900 mb-4">
            Har du andra frågor?
          </h2>
          <p className="text-gray-700 mb-6">
            Om du inte hittar svar på din fråga är du välkommen att kontakta oss
            direkt.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Telefon:</strong>{' '}
              <a
                href="tel:+46707961666"
                className="text-amber-700 hover:text-amber-800 transition-colors"
              >
                070 796 16 66
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:info@gamore.se"
                className="text-amber-700 hover:text-amber-800 transition-colors"
              >
                info@gamore.se
              </a>
            </p>
            <p>
              <strong>Adress:</strong> Långholmsgatan 5, 117 33 Stockholm
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
