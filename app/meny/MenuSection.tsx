// MenuSection.tsx
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: {
    left: MenuItem[];
    right: MenuItem[];
  };
  specialItem?: {
    name: string;
    price: string;
    subtitle?: string;
    options?: string[];
  };
}

export default function MenuSection({
  title,
  subtitle,
  items,
  specialItem,
}: MenuSectionProps) {
  return (
    <div className="max-w-6xl mx-auto mb-8">
      <section className="bg-white rounded-lg shadow-lg p-4 md:p-12">
        <h2
          className="text-6xl md:text-6xl font-light text-amber-900 mb-4"
          style={{ fontFamily: 'Birthstone' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 mb-8">
            {subtitle}
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-8 pt-4 pb-8 [&_article]:border-b [&_article]:border-gray-200 [&_article]:rounded">
          {/* Left Column */}
          <div className="space-y-6">
            {items.left.map((item, index) => (
              <article key={index} className="md:h-23">
                <div className="flex mb-1">
                  <h3 className="text-xl font-semibold text-gray-800 flex-1">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-amber-700 whitespace-nowrap">
                    {item.price} kr
                  </p>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {items.right.map((item, index) => (
              <article key={index} className="md:h-23">
                <div className="flex mb-1">
                  <h3 className="text-xl font-semibold text-gray-800 flex-1">
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold text-amber-700 whitespace-nowrap">
                    {item.price} kr
                  </p>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Special Item */}
        {specialItem && (
          <article className="border-b rounded md:h-23 md:w-1/2 m-auto">
            <div className="flex mb-1">
              <h3 className="text-xl font-semibold text-gray-800 flex-1">
                {specialItem.name}
              </h3>
              <p className="text-xl font-bold text-amber-700 whitespace-nowrap">
                {specialItem.price} kr
              </p>
            </div>
            {specialItem.subtitle && (
              <p className="font-medium">{specialItem.subtitle}</p>
            )}
            {specialItem.options && (
              <ul className="flex md:flex-row flex-col gap-4 text-sm text-gray-600 leading-relaxed [&_li]:border-l-2 [&_li]:border-amber-600 [&_li]:pl-1 md:py-0 py-2">
                {specialItem.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            )}
          </article>
        )}
      </section>
    </div>
  );
}
