// MenuPage.tsx
import MenuSection from './MenuSection';

export default function MenuPage() {
  const pizzaData = {
    left: [
      {
        name: 'Marinara',
        description: 'Tomatsås, färsk vitlök, oregano och färsk basilika.',
        price: '125',
      },
      {
        name: 'Margherita',
        description:
          'Tomatsås, parmesan, mozzarella, oregano och färsk basilika med en smak av våra här gjord gelato.',
        price: '135',
      },
      {
        name: 'Capricciosa',
        description:
          'Tomatsås, rökt skinka, färska champinjoner, mozzarella, parmesan, kronärtskocka och färsk basilika.',
        price: '150',
      },
      {
        name: 'Al Tonno',
        description:
          'Tomatsås, parmesan, Mozzarella, tonfisk, oliver, kapris, röd lök och oregano.',
        price: '150',
      },
      {
        name: 'Il Gallo',
        description:
          'Tomatsås, kycklingfilé, mozzarella, oliver, färsk paprika och tryffelsås.',
        price: '150',
      },
      {
        name: 'Cacciatora',
        description:
          'Tomatsås, mozzarella, Ventricina pikante (stark salami med mycket smak), parmesan, röd lök och färsk basilika.',
        price: '150',
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
        price: '160',
      },
      {
        name: 'Mille Amore',
        description:
          'Mild ost, parmesan, gorgonzola, mozzarella, prosciutto, torkad tomat och pepparmix.',
        price: '165',
      },
      {
        name: 'Mezaluna halvinbakad',
        description:
          'Tomatsås, rökt skinka, mozzarella, ruccolasallad, parmesan, prosciutto och pinjenötter.',
        price: '160',
      },
      {
        name: 'Kebab pizza',
        description:
          'Tomatsås, ost, kebabkött, färsk tomat, färsk rödlök, feferoni, vitlöksdressing och kebabdressing.',
        price: '160',
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
        price: '175',
      },
      {
        name: 'Pizza kit',
        description:
          'Amores pizza deg (48 timar jäsning) 280 g, vår här gjort tomatsås, mozzarella ost, parmigiano ost, i vikt som vi använder när vi bakar våra pizzor.',
        price: '69',
      },
    ],
  };

  const grillData = {
    left: [
      {
        name: 'Hamburgertallrik',
        description:
          'Saftig burgare av nötkött (200g) , färsk tomat, rödlök, isbergssallad, hamburger dressing, serveras i grillad sesambröd serveras med pommes.',
        price: '125',
      },
      {
        name: 'Ostburgare',
        description:
          'Saftig burgare av nötkött (200g) med smällt ost, färsk tomat, rödlök, isbergssallad, hamburger dressing, serveras i grillad sesambröd med pommes',
        price: '135',
      },
      {
        name: 'Vegan Burgare',
        description:
          'Vår egen kryddig burgare gjort på bönor och kikärtor, med tomat, rödlök, isbergssallad, stark paprikaröra i sesambröd serveras med pommes.',
        price: '110',
      },
    ],
    right: [
      {
        name: 'Kebabtallrik',
        description:
          'Kebabkött/kyckling kebab, krispig isbergssallad, tomat, rödlök, vitlöksdressing, feferoni, serveras med pommes och kebabdressing.',
        price: '125',
      },
      {
        name: 'Korvtallrik',
        description:
          'Grillad rökt, kryddad korv fylld med jalapeño och ost. Serveras med pommes, stekt ägg, sallad och dipp',
        price: '110',
      },
      {
        name: 'Grillad Focaccia',
        description:
          'Grillad Focaccia bröd med prosciutto, mozzarella, pesto, färsk tomat och rucola. ',
        price: '79',
      },
    ],
  };

  const pastaData = {
    left: [
      {
        name: 'Kycklingpasta',
        description:
          ' Pasta med grädde, grillade kycklingbröstbitar, färsk paprika, parmesan och färsk basilika.',
        price: '139',
      },
      {
        name: 'Carbonara',
        description:
          ' En klassiker i många familjer, bacon, äggula, toppad med fin riven parmesan och svartpeppar.',
        price: '139',
      },
      {
        name: 'Arrabiata (vege)',
        description:
          'Pasta med långkokt tomatsås, vitlök, chili, parmesan och basilika.',
        price: '139',
      },
      {
        name: 'Pasta med räkor',
        description:
          'Krämig pasta med handskalade räkor, grädde, chili, lök, persilja, mozzarella och parmesan',
        price: '149',
      },
    ],
    right: [
      {
        name: 'Al forno',
        description:
          '(ugnsgratinerad pasta) nötfärs, tomatsås, 4:a ost sås, färsk vitlök, lök, kryddor, mozzarella, parmesan och färsk basilika',
        price: '139',
      },
      {
        name: 'Bolognese pasta',
        description:
          'Pasta med långkokt tomatsås, nötfärs, vitlök, lök, chili, parmesan och basilika',
        price: '139',
      },
      {
        name: 'Lasagne Bolognese',
        description:
          '(nötkött) Långkokt tomatsås med nötfärs, vitlök, lök, chili, parmesan och basilika.',
        price: '139',
      },
      {
        name: 'Lasagne Sorrentina',
        description:
          '(vegetarisk) Långkokt tomatsås, mozzarella, morötter, palsternacka, selleri, lök, vitlök, chili, parmesan och basilika.',
        price: '139',
      },
    ],
  };

  const gnocchiData = {
    left: [
      {
        name: 'Gnocchi med tomat sås',
        description: 'Tomatsås med mozzarella, parmesan och färsk basilika',
        price: '115',
      },
      {
        name: 'Gnocchi med pesto kräm',
        description:
          'Gjord med grädde, mozzarella, parmesan och kryddor toppadmed parmesan och färsk basilika.',
        price: '115',
      },
      {
        name: 'Gnocchi med krämig gorgonzolasås',
        description:
          'Gjort på Gorgonzola picante, grädde, parmesan och kryddor, toppad med persilja och rostade valnötter',
        price: '115',
      },
    ],
  };

  const wrapsData = {
    left: [
      {
        name: 'Fetaost wrap',
        description:
          'Krispig isbergsallad, tomat, oliver, rödlök, feta ost och stark paprikaröra',
        price: '115',
      },
      {
        name: 'Kebab wrap',
        description:
          'Kebabkött, färsk krispig sallad, solmogna tomater, rödlök, färsk gurka, skivad peperoni, vitlökssås och kebabsås.',
        price: '115',
      },
      {
        name: 'Kyckling wrap',
        description:
          'Romansallad, grillad kycklingfilé, stekt bacon, färsk tomat, parmesanost och hemgjord caesardressing.',
        price: '115',
      },
      {
        name: 'Vegeterian wrap',
        description:
          'Färsk krispig sallad, oliver, solmogna tomater, rödlök, fetaost och grillad paprika kräm.',
        price: '115',
      },
    ],
    right: [
      {
        name: 'Italiensk romana wrap',
        description:
          'Prosciutto, färsk krispig sallad, mozzarella, solmogna tomater, rödlök och hemgjord pesto.',
        price: '115',
      },
      {
        name: 'Ceasar wrap',
        description:
          'Grillad kycklingfilé, färsk romansallad, grovriven parmesanost, knaprig stekt rökt bacon, hemmagjord caesardressing och solmogna tomater.',
        price: '115',
      },
      {
        name: 'Het räka wrap',
        description:
          'Handskalade räkor, färsk krispig sallad, solmogna tomater, ägg och stark chilisås.',
        price: '115',
      },
    ],
  };

  const salladData = {
    left: [
      {
        name: 'Ceasar sallad',
        description:
          'Grillad kycklingfilé, stekt bacon, färsk tomat, parmesan och hemgjord caesardressing',
        price: '115',
      },
      {
        name: 'Grekisk sallad',
        description:
          'Krispig isbergssallad, tomat, oliver, rödlök, fetaost, oregano och olivolja',
        price: '115',
      },
      {
        name: 'Räksallad sallad',
        description:
          'Krispig isbergssallad, färsk tomat, kokta ägg, handskalade räkor och olivolja',
        price: '115',
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

  // const matData = {
  //   left: [
  //     {
  //       name: 'Hamburgertallrik',
  //       description:
  //         'Grillad hamburgare (200g), hamburgerbröd, hamburger dressing, stark paprikaröra, ost, sallad, färsk tomat, rödlök, serveras med vitlökssås, ketchup och pommes.',
  //       price: '125',
  //     },
  //     {
  //       name: 'Kebabtallrik',
  //       description:
  //         'Kebabkött, krispig isbergssallad, tomat, rödlök, vitlöksdressing, feferoni, serveras med pommes och kebabdressing.',
  //       price: '125',
  //     },
  //     {
  //       name: 'Kyckling kebabtallrik',
  //       description:
  //         'Kycklingkebab, krispig isbergssallad, tomat, rödlök, vitlöksdressing, feferoni, serveras med pommes och kebabdressing.',
  //       price: '140',
  //     },
  //     {
  //       name: 'Lasagne',
  //       description:
  //         'Hem gjorda lasagne med långkokt tomatsås, béchamelsås, mozzarella, parmesan, lök, vitlök, och basilika.',
  //       price: '129',
  //     },
  //     {
  //       name: 'Räksallad',
  //       description:
  //         'Krispig sallad, handskalade räkor, tomat, ägg, handskalade räkor och dressning.',
  //       price: '109',
  //     },
  //     {
  //       name: 'Hälsotallrik med kyckling',
  //       description:
  //         'Ugnstekt kycklingfilé, couscous, körsbärstomat, gurka, rödlök, paprika, rädisor, ruccola och Caesar dressing.',
  //       price: '119',
  //     },
  //   ],
  //   right: [
  //     {
  //       name: 'Vegan Burgare',
  //       description:
  //         'Grillad veganburgare (150g), sallad, grillad paprikaröra, färsk tomat, rödlök. Serveras med ketchup och pommes.',
  //       price: '110',
  //     },
  //     {
  //       name: 'Korvtallrik',
  //       description:
  //         'Grillad rökt, kryddad korv fylld med ost. Serveras med pommes, stekt ägg, sallad och dipp.',
  //       price: '110',
  //     },
  //     {
  //       name: 'Caesarsallad',
  //       description:
  //         'Grillad kycklingfilé, krutonger, bacon, tomat, parmesanost och hemgjord caesardressing.',
  //       price: '105',
  //     },
  //     {
  //       name: 'Grekisk sallad',
  //       description:
  //         'Färska salladsblad, tomat, oliver, rödlök, fetaost, oregano och olivolja.',
  //       price: '109',
  //     },
  //     {
  //       name: 'Hälsotallrik med räkor',
  //       description:
  //         'Mixsallad, rödlök, citron, ägg, handskalade räkor, körsbärstomat, gurka, rädisor, olivolja dressing.',
  //       price: '125',
  //     },
  //     {
  //       name: 'Grillad Focaccia',
  //       description:
  //         'Grillad Focaccia bröd med rosmarin, välj mellan mozzarella eller feta ost (uppdelad)',
  //       price: '79',
  //     },
  //   ],
  // };

  return (
    <section className="bg-[#FAF9F6] md:py-12 py-4 px-4">
      <h1
        className="text-center text-6xl md:text-8xl font-light mb-4 text-amber-900"
        style={{ fontFamily: 'Birthstone, serif' }}
      >
        Meny
      </h1>
      <div className="w-32 h-1 bg-amber-600 mx-auto mb-12"></div>

      <MenuSection
        title="Pizza"
        subtitle="Alla våra pizzor är stenugnsbakade"
        items={pizzaData}
        specialItem={{
          name: 'Pizzamackan',
          price: '110',
          subtitle: 'Välj med:',
          options: [
            'Kebabkött',
            'Prusciutto',
            'Ventricina Salami',
            'Pesto och Mozzarella',
          ],
        }}
      />
      <MenuSection title="Pasta" subtitle="Penne Tricolore" items={pastaData} />

      <MenuSection title="Grill" items={grillData} />

      <MenuSection title="Gnocchi" items={gnocchiData} />

      <MenuSection title="Wraps" items={wrapsData} />

      <MenuSection title="Sallad" items={salladData} />

      <MenuSection title="Gelato" items={gelatoData} />

      <MenuSection title="Dessert" items={dessertData} />

      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>🍕 Stenugnsbakad med passion sedan 2018</p>
      </div>
    </section>
  );
}
