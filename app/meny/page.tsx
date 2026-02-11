// MenuPage.tsx
import MenuSection from './MenuSection';

export default function MenuPage() {
  const pizzaData = {
    left: [
      {
        name: 'Marinara',
        description: 'Tomatsås, färsk vitlök, oregano och färsk basilika.',
        price: '115',
      },
      {
        name: 'Margherita',
        description:
          'Tomatsås, parmesan, mozzarella, oregano och färsk basilika med en smak av våra här gjord gelato.',
        price: '125',
      },
      {
        name: 'Capricciosa',
        description:
          'Tomatsås, rökt skinka, färska champinjoner, mozzarella, parmesan, kronärtskocka och färsk basilika.',
        price: '140',
      },
      {
        name: 'Al Tonno',
        description:
          'Tomatsås, parmesan, Mozzarella, tonfisk, oliver, kapris, röd lök och oregano.',
        price: '140',
      },
      {
        name: 'Il Gallo',
        description:
          'Tomatsås, kycklingfilé, mozzarella, oliver, färsk paprika och tryffelsås.',
        price: '140',
      },
      {
        name: 'Cacciatora',
        description:
          'Tomatsås, mozzarella, Ventricina pikante (stark salami med mycket smak), parmesan, röd lök och färsk basilika.',
        price: '140',
      },
      {
        name: 'Vegana',
        description:
          'Tomatsås, oliver, grillad paprika tricolore, färska champinjoner, rödlök, stark grillad paprika röra, oregano och hickory grovsalt.',
        price: '145',
      },
    ],
    right: [
      {
        name: 'Prezzemolo',
        description:
          'Tomatsås, mozzarella, parmesan, handskalade räkor, färsk vitlök, och färsk persilja.',
        price: '155',
      },
      {
        name: 'Mille Amore',
        description:
          'Mild ost, parmesan, gorgonzola, mozzarella, prosciutto, torkad tomat och pepparmix.',
        price: '155',
      },
      {
        name: 'Mezaluna halvinbakad',
        description:
          'Tomatsås, rökt skinka, mozzarella, ruccolasallad, parmesan, prosciutto och pinjenötter.',
        price: '155',
      },
      {
        name: 'Kebab pizza',
        description:
          'Tomatsås, ost, kebabkött, färsk tomat, färsk rödlök, feferoni, vitlöksdressing och kebabdressing.',
        price: '155',
      },
      {
        name: 'Estate',
        description:
          'Tomatsås, Mozzarella, ruccola, prosciutto, parmesan, pesto, balsamico kräm och pinjenötter.',
        price: '160',
      },
      {
        name: 'Frutti di Mare',
        description:
          'Tomatsås, mozzarella, parmesan, handskalade räkor, Blå musslor, färsk vitlök, färsk persilja och citronskiva.',
        price: '165',
      },
      {
        name: 'Pizza kit',
        description:
          'Amores pizza deg (48 timar jäsning) 280 g, vår här gjort tomatsås, mozzarella ost, parmigiano ost, i vikt som vi använder när vi bakar våra pizzor.',
        price: '69',
      },
    ],
  };

  const matData = {
    left: [
      {
        name: 'Hamburgertallrik',
        description:
          'Grillad hamburgare (200g), hamburgerbröd, hamburger dressing, stark paprikaröra, ost, sallad, färsk tomat, rödlök, serveras med vitlökssås, ketchup och pommes.',
        price: '125',
      },
      {
        name: 'Kebabtallrik',
        description:
          'Kebabkött, krispig isbergssallad, tomat, rödlök, vitlöksdressing, feferoni, serveras med pommes och kebabdressing.',
        price: '140',
      },
      {
        name: 'Kyckling kebabtallrik',
        description:
          'Kycklingkebab, krispig isbergssallad, tomat, rödlök, vitlöksdressing, feferoni, serveras med pommes och kebabdressing.',
        price: '140',
      },
      {
        name: 'Lasagne',
        description:
          'Hem gjorda lasagne med långkokt tomatsås, béchamelsås, mozzarella, parmesan, lök, vitlök, och basilika.',
        price: '129',
      },
      {
        name: 'Räksallad',
        description:
          'Krispig sallad, handskalade räkor, tomat, ägg, handskalade räkor och dressning.',
        price: '109',
      },
      {
        name: 'Hälsotallrik med kyckling',
        description:
          'Ugnstekt kycklingfilé, couscous, körsbärstomat, gurka, rödlök, paprika, rädisor, ruccola och Caesar dressing.',
        price: '119',
      },
    ],
    right: [
      {
        name: 'Vegan Burgare',
        description:
          'Grillad veganburgare (150g), sallad, grillad paprikaröra, färsk tomat, rödlök. Serveras med ketchup och pommes.',
        price: '100',
      },
      {
        name: 'Korvtallrik',
        description:
          'Grillad rökt, kryddad korv fylld med ost. Serveras med pommes, stekt ägg, sallad och dipp.',
        price: '100',
      },
      {
        name: 'Caesarsallad',
        description:
          'Grillad kycklingfilé, krutonger, bacon, tomat, parmesanost och hemgjord caesardressing.',
        price: '105',
      },
      {
        name: 'Grekisk sallad',
        description:
          'Färska salladsblad, tomat, oliver, rödlök, fetaost, oregano och olivolja.',
        price: '109',
      },
      {
        name: 'Hälsotallrik med räkor',
        description:
          'Mixsallad, rödlök, citron, ägg, handskalade räkor, körsbärstomat, gurka, rädisor, olivolja dressing.',
        price: '125',
      },
      {
        name: 'Grillad Focaccia',
        description:
          'Grillad Focaccia bröd med rosmarin, välj mellan mozzarella eller feta ost (uppdelad)',
        price: '79',
      },
    ],
  };

  const wrapsData = {
    left: [
      {
        name: 'Fetaost wrap',
        description:
          'Krispig isbergsallad, tomat, oliver, rödlök, feta ost och stark paprikaröra',
        price: '109',
      },
      {
        name: 'Kebab wrap',
        description:
          'Kebabkött, färsk krispig sallad, solmogna tomater, rödlök, färsk gurka, skivad peperoni, vitlökssås och kebabsås.',
        price: '109',
      },
      {
        name: 'Kyckling med pesto wrap',
        description:
          'Grillad kycklingfilé, färsk krispig sallad, mozzarella, hemmagjord pesto och solmogna tomater.',
        price: '109',
      },
      {
        name: 'Vegeterian wrap',
        description:
          'Färsk krispig sallad, oliver, solmogna tomater, rödlök, fetaost och grillad paprika kräm.',
        price: '105',
      },
    ],
    right: [
      {
        name: 'Italiensk romana wrap',
        description:
          'Prosciutto, färsk krispig sallad, mozzarella, solmogna tomater, rödlök och hemgjord pesto.',
        price: '109',
      },
      {
        name: 'Ceasar wrap',
        description:
          'Grillad kycklingfilé, färsk romansallad, grovriven parmesanost, knaprig stekt rökt bacon, hemmagjord caesardressing och solmogna tomater.',
        price: '109',
      },
      {
        name: 'Het räka wrap',
        description:
          'Handskalade räkor, färsk krispig sallad, solmogna tomater, ägg och stark chilisås.',
        price: '109',
      },
    ],
  };

  const gelatoData = {
    left: [
      {
        name: 'Pistage',
        description: 'No description provided',
        price: '65',
      },
      {
        name: 'Choklad',
        description:
          'Belgisk premium 70 % mörkchoklad kryddat med bourbonvanilj och havssalt.',
        price: '55',
      },
    ],
    right: [
      {
        name: 'Hasselnötter',
        description: 'No description provided',
        price: '55',
      },
      {
        name: 'Straccietella',
        description: 'Vanilj glass med choklad strössel.',
        price: '55',
      },
    ],
  };

  const dessertData = {
    left: [
      {
        name: 'Amore Semla',
        description:
          'Kärlekens Semla till två personer, en krämig semla gjort på brioche bröd, välj mellan vanlig med mandelmassa eller med pistage smak.',
        price: '49',
      },
      {
        name: 'Canolli',
        description:
          'Italiensk bakverk i form av rör, som friteras och sedan fylls med krämig ricotta som smaksatts.',
        price: '30',
      },
    ],
    right: [
      {
        name: 'Choklad tryffel',
        description:
          'Ljuvlig choklad tryffel gjord på belgisk premium choklad.',
        price: '55',
      },
      {
        name: 'Biskvi',
        description: 'Choklad biskvi med krämig fyllning',
        price: '39',
      },
    ],
  };
  return (
    <section className="bg-[#FAF9F6] md:py-12 py-4 px-4">
      <h1
        className="text-center text-6xl md:text-7xl font-light mb-4 text-amber-900"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Meny
      </h1>
      <div className="w-32 h-1 bg-amber-600 mx-auto mb-12"></div>

      <MenuSection
        title="Pizza"
        subtitle="Alla våra pizzor är stenugnsbakade"
        items={pizzaData}
        specialItem={{
          name: 'Pizza Lovers Delight - Pizzamackan',
          price: '100',
          subtitle: 'Välj med:',
          options: [
            'Kebabkött',
            'Ćevapčići',
            'Ventricina Salami',
            'Pesto och Mozzarella',
          ],
        }}
      />

      <MenuSection
        title="Mat"
        items={matData}
        specialItem={{
          name: 'Dagens pasta',
          price: '129',
          subtitle: 'Välj med:',
          options: ['Kyckling', 'Carbonara', 'Räkor +10kr', 'Bolognese'],
        }}
      />

      <MenuSection title="Wraps" items={wrapsData} />

      <MenuSection title="Gelato" items={gelatoData} />

      <MenuSection title="Dessert" items={dessertData} />

      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>🍕 Stenugnsbakad med passion sedan 2018</p>
      </div>
    </section>
  );
}
