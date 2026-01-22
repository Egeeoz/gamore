import Image from 'next/image';
import { Button } from './ui/button';

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
    <figure className="w-full relative" style={{ height: '600px' }}>
      <Image
        src="https://placehold.net/800x600.png"
        alt="Hero Img"
        priority
        fill
        fetchPriority="high"
        className="w-full max-h-150 object-cover"
      />
      <section className="absolute inset-0 flex flex-col justify-center gap-8 text-center text-white max-h-150 md:pt-20">
        <section>
          <h1
            className="md:text-9xl text-7xl text-[#C59D5F]"
            style={{
              fontFamily: 'Herr Von Muellerhoff',
            }}
          >
            Gelateria Amore
          </h1>
          <h2 className="md:text-4xl text-3xl font-bold">
            Catering Stockholm & Gelato
          </h2>
          <h3 className="text-xl md:text-2xl pt-2">Hur äkta kärlek smakar</h3>
        </section>
        <aside className="flex flex-col gap-2">
          <p className="text-xl">Beställ direkt i vår nya webshop!</p>
          <section className="flex gap-6 justify-center">
            <Button className="cursor-pointer rounded text-foreground hover:bg-gold/80 border border-foreground text-base px-6 bg-transparent">
              Beställ avhämtning
            </Button>
            <Button className="cursor-pointer rounded bg-gold hover:bg-gold/80 text-base px-6">
              Beställ Catering
            </Button>
          </section>
        </aside>
      </section>
    </figure>
  );
}
