import Image from 'next/image';

export default function Hero() {
  return (
    // <section className="flex justify-between w-[65%] h-117.5 m-auto my-0 pt-5">
    //   <section className="relative flex flex-col gap-8 border-l-2 border-[#C59D5F] p-4 w-1/2">
    //     <aside>
    //       <h1
    //         className="text-8xl"
    //         style={{
    //           fontFamily: 'Herr Von Muellerhoff',
    //         }}
    //       >
    //         Gelateria Amore
    //       </h1>
    //       <h2 className="text-2xl">Catering Stockholm & Gelato</h2>
    //       <p>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
    //         inventore dolor natus dolores et quaerat nam illum harum suscipit
    //         dolore?
    //       </p>
    //     </aside>
    //     <aside className="flex flex-col gap-4">
    //       <h3>Beställ direkt i vår nya webshop!</h3>
    //       <aside className="flex gap-6">
    //         <Button className="cursor-pointer rounded bg-background text-foreground border border-foreground">
    //           Beställ avhämtning
    //         </Button>
    //         <Button className="cursor-pointer rounded bg-[#C59D5F] hover:text-black hover:bg-[#C59D5F]">
    //           Beställ Catering
    //         </Button>
    //       </aside>
    //     </aside>
    //   </section>
    //   <figure className="relative w-[40%] h-[200px] md:h-[350px] lg:h-[450px]">
    //     <Image
    //       src="/hero-img.png"
    //       alt="Hero Img"
    //       priority
    //       fill
    //       fetchPriority="high"
    //       className="object-cover rounded-sm"
    //     />
    //   </figure>
    // </section>
    <section className="w-full relative" style={{ height: '600px' }}>
      <Image
        src="https://placehold.net/800x600.png"
        alt="Hero Img"
        preload={true}
        fill
        sizes="100vw"
        className="w-full max-h-150 object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center gap-8 text-center text-white max-h-150 md:pt-20">
        <div>
          <h1
            className="md:text-9xl text-7xl text-[#C59D5F]"
            style={{
              fontFamily: 'Herr Von Muellerhoff',
            }}
          >
            Gelateria Amore
          </h1>
          <h2 className="md:text-4xl text-3xl font-bold">Gelato & Pizza</h2>
          <h3 className="text-xl md:text-2xl pt-2">Hur äkta kärlek smakar</h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl">Beställ direkt i vår nya webshop!</p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup"
              rel="noopener noreferrer"
              className="cursor-pointer rounded text-foreground hover:bg-gold/80 border border-foreground md:text-lg md:px-6 px-4 py-1 bg-transparent"
            >
              Beställ avhämtning
            </a>
            <a
              href="https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan"
              rel="noopener noreferrer"
              className="cursor-pointer rounded bg-gold hover:bg-gold/80 md:text-lg md:px-6 px-4 py-1 flex items-center"
            >
              Beställ med Leverans
            </a>
          </div>
        </div>
      </div>
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
