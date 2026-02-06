function page() {
  return (
    <section className="pt-4 flex flex-col items-center gap-4">
      <h1 className="text-5xl text-center border-b-2 w-2/3">Meny</h1>

      <section className="w-2/3">
        <h2 className="text-3xl text-left">Pizza</h2>

        <div className="flex">
          <div>
            <h3>Marinara</h3>
            <h3>Capricciosa</h3>
            <h3>Al Tonno</h3>
            <h3>Il Gallo</h3>
            <h3>Prezzemolo</h3>
            <h3>Frutti di Mare</h3>
            <h3>Pizza Lovers Delight - Pizzamackan</h3>
            <h3>Pizza kit</h3>
          </div>
          <div>
            <h3>Margherita</h3>
            <h3>Cacciatora</h3>
            <h3>Vegana</h3>
            <h3>Mille Amore</h3>
            <h3>Estate</h3>
            <h3>Mezaluna halvinbakad</h3>
            <h3>Kebab pizza</h3>
          </div>
        </div>
      </section>
    </section>
  );
}

export default page;
