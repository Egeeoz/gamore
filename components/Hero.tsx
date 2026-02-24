// import Image from 'next/image';
// import heroImg from '@/public/gelateria-amore-entre-stockholm-pizzeria.webp';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className="w-full relative" style={{ height: '600px' }}>
//       <Image
//         src={heroImg}
//         alt="Entrén till Gelateria Amore på Långholmsgatan i Stockholm, där vi erbjuder italiensk glass och napolitansk pizza"
//         fill
//         fetchPriority="high"
//         sizes="100vw"
//         placeholder="blur"
//         className="object-cover"
//       />
//       <div className="absolute inset-0 flex flex-col justify-end gap-8 text-center text-white max-h-150 md:pt-20 md:pb-20 pb-6">
//         <div>
//           {/* <h1
//             className="md:text-9xl text-7xl text-[#C59D5F]"
//             style={{
//               fontFamily: 'Herr Von Muellerhoff',
//             }}
//           >
//             Gelateria Amore
//           </h1> */}
//           <h2 className="md:text-4xl text-3xl font-bold">Gelato & Pizza</h2>
//           <h3 className="text-xl md:text-2xl pt-2">Hur äkta kärlek smakar</h3>
//         </div>
//         <div className="flex flex-col gap-3">
//           <p className="text-xl font-bold">
//             Beställ direkt i vår nya webshop eller se vår meny!
//           </p>
//           <div className="flex gap-6 justify-center [&_a]:transition-transform [&_a]:duration-300 [&_a]:hover:-translate-y-1 [&_a]:shadow-2xl [&_a]:ring-2 flex-wrap">
//             <a
//               href="https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup"
//               rel="noopener noreferrer"
//               target="_blank"
//               className="cursor-pointer rounded bg-background text-gold font-medium md:text-lg md:px-6 px-4 py-1 hover:"
//             >
//               Beställ avhämtning
//             </a>
//             <a
//               href="https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan"
//               rel="noopener noreferrer"
//               target="_blank"
//               className="cursor-pointer rounded bg-gold font-medium md:text-lg md:px-6 px-4 py-1 flex items-center"
//             >
//               Beställ med leverans
//             </a>
//             <Link
//               href="meny"
//               className="cursor-pointer rounded bg-foreground/80 ring-2 ring-gold border-gold font-medium md:text-lg md:px-6 px-4 py-1"
//             >
//               Meny
//             </Link>
//           </div>
//         </div>
//       </div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute bottom-0 left-0 right-0 w-full"
//         style={{
//           height: '12px',
//           fill: 'white',
//         }}
//       >
//         <defs>
//           <pattern
//             id="spike-pattern"
//             x="0"
//             y="0"
//             width="11"
//             height="12"
//             patternUnits="userSpaceOnUse"
//           >
//             <path d="M0 12L5.5 1l5.5 11z" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#spike-pattern)" />
//       </svg>
//     </section>
//   );
// }
import Image from 'next/image';
import heroImg from '@/public/gelateria-amore-entre-stockholm-pizzeria.webp';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ minHeight: '650px' }}
    >
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Entrén till Gelateria Amore på Långholmsgatan i Stockholm, där vi erbjuder italiensk glass och napolitansk pizza"
        fill
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />

      {/* Sophisticated Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

      {/* Content Container */}
      <section className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-light text-white mb-3 leading-tight tracking-tight">
            Äkta italiensk gelato & pizza
          </h1>

          {/* Subheading with Brand Color */}
          <p className="text-xl md:text-2xl text-amber-300 font-light mb-2 tracking-wide">
            Handgjord med kärlek sedan 20
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed font-light">
            Familjedrivet café på Långholmsgatan i Stockholm. Vår gelato
            tillverkas dagligen med svenska ekologiska råvaror och italienska
            traditioner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded backdrop-blur-sm border border-white/30 transition-all duration-300 w-fit"
            >
              Beställ avhämtning
            </a>
            <a
              href="https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded backdrop-blur-sm border border-white/30 transition-all duration-300 w-fit"
            >
              Beställ med leverans
            </a>
            <Link
              href="/meny"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded backdrop-blur-sm border border-white/30 transition-all duration-300 w-fit"
            >
              Se meny
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Wave */}
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
  );
}
