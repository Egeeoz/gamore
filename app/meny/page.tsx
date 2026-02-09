export default function MenuPage() {
  const pizzas = {
    left: [
      {
        name: 'Marinara',
        description: 'Tomatsås, färsk vitlök, oregano och färsk basilika.',
        price: '115',
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
        name: 'Prezzemolo',
        description:
          'Tomatsås, mozzarella, parmesan, handskalade räkor, färsk vitlök, och färsk persilja.',
        price: '155',
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
    right: [
      {
        name: 'Margherita',
        description:
          'Tomatsås, parmesan, mozzarella, oregano och färsk basilika med en smak av våra här gjord gelato.',
        price: '125',
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
      {
        name: 'Mille Amore',
        description:
          'Mild ost, parmesan, gorgonzola, mozzarella, prosciutto, torkad tomat och pepparmix.',
        price: '155',
      },
      {
        name: 'Estate',
        description:
          'Tomatsås, Mozzarella, ruccola, prosciutto, parmesan, pesto, balsamico kräm och pinjenötter.',
        price: '160',
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
    ],
  };
  //  bg-linear-to-b from-amber-50 to-white
  return (
    <div className="bg-[#FAF9F6] md:py-12 py-4 px-4">
      <section className="max-w-6xl mx-auto">
        <h1
          className="text-center text-6xl md:text-7xl font-light mb-4 text-amber-900"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Meny
        </h1>
        <div className="w-32 h-1 bg-amber-600 mx-auto mb-8"></div>

        <section className="bg-white rounded-lg shadow-lg p-4 md:p-12">
          <h2
            className="text-4xl md:text-5xl font-light text-amber-900 mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Pizza
          </h2>
          <p className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4">
            Alla våra pizzor är stenugnsbakade
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-4 pb-8 [&_article]:border-b [&_article]:border-gray-200 [&_article]:rounded">
            {/* Left Column */}
            <div className="space-y-6">
              {pizzas.left.map((pizza, index) => (
                <article key={index} className="md:h-23">
                  <div className="flex mb-1">
                    <h3 className="text-xl font-semibold text-gray-800 flex-1">
                      {pizza.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-700 whitespace-nowrap">
                      {pizza.price} kr
                    </span>
                  </div>
                  {pizza.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pizza.description}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6 [&_article]:border-b [&_article]:border-gray-200 [&_article]:rounded">
              {pizzas.right.map((pizza, index) => (
                <article key={index} className="md:h-23">
                  <div className="flex mb-1">
                    <h3 className="text-xl font-semibold text-gray-800 flex-1">
                      {pizza.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-700 whitespace-nowrap">
                      {pizza.price} kr
                    </span>
                  </div>
                  {pizza.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pizza.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
          <article className="border-b rounded md:h-23 md:w-1/2 m-auto">
            <div className="flex mb-1">
              <h3 className="text-xl font-semibold text-gray-800 flex-1">
                Pizza Lovers Delight - Pizzamackan
              </h3>
              <span className="text-2xl font-bold text-amber-700 whitespace-nowrap">
                100 kr
              </span>
            </div>
            <p className="font-medium">Välj med:</p>
            <ul className="flex md:flex-row flex-col gap-4 text-sm text-gray-600 leading-relaxed [&_li]:border-l-2 [&_li]:border-amber-600 [&_li]:pl-1 md:py-0 py-2">
              <li>Kebabkött</li>
              <li>Ćevapčići</li>
              <li>Ventricina Salami</li>
              <li>Pesto och Mozzarella</li>
            </ul>
          </article>
        </section>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>🍕 Stenugnsbakad med passion sedan 2018</p>
        </div>
      </section>
    </div>
  );
}
