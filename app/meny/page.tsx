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
        name: 'Caesar wraps',
        description:
          'Sallad, kycklingfilé, krutonger, bacon, tomater, parmesanost och hemgjord caesardressing.',
        price: '109',
      },
      {
        name: 'Heta räkor wraps 🌶️🌶️🌶️',
        description:
          'Krispig isbergssallad, tomat, ägg, handskalade räkor och sriracha.',
        price: '109',
      },
      {
        name: 'Hälsotallrik med kyckling',
        description:
          'Ugnstekt kycklingfilé, couscous, körsbärstomat, gurka, rödlök, paprika, rädisor, ruccola och Caesar dressing.',
        price: '119',
      },
      {
        name: 'Dagens Pasta',
        description: 'Pasta tricolore välj mellan',
        price: '129',
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
        name: 'Kebabwraps',
        description:
          'Kebabkött, färsk krispig sallad, solmogna tomater, rödlök, färsk gurka, skivad feferoni, vitlökssås och kebabsås.',
        price: '109',
      },
      {
        name: 'Hälsotallrik med räkor',
        description:
          'Mixsallad, rödlök, citron, ägg, handskalade räkor, körsbärstomat, gurka, rädisor, olivolja dressing.',
        price: '125',
      },
      {
        name: 'Grillad Focaccia 🌶️',
        description: 'Grillad Focaccia bröd med rosmarin (uppdelad)',
        price: '79',
      },
      {
        name: 'Dagens Soppa',
        description: 'från 69 KR',
        price: '69',
      },
    ],
  };

  return (
    <div className="bg-[#FAF9F6] md:py-12 py-4 px-4">
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

      <MenuSection title="Mat" items={matData} />

      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>🍕 Stenugnsbakad med passion sedan 2018</p>
      </div>
    </div>
  );
}
