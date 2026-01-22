import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaInstagram, FaYelp, FaTripadvisor } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-8 items-center bg-foreground/90 *:text-background [&_h6]:font-light [&_h6]:text-xl [&_h6]:uppercase [&_h6]:text-background/80">
      <section className="flex flex-col items-center gap-3">
        <h6>Om oss</h6>
        <p className="md:w-[60%] w-[90%] text-center">
          Gelateria Amore är ett litet, familjedrivet företag. Ägarna Dragana
          och Miroslav är passionerade, kunniga och entusiastiska när det gäller
          glass och mat. Kom in och upplev hur äkta kärlek smakar!
        </p>
      </section>
      <article className="flex flex-col items-center gap-3">
        <h6>FÖLJ OSS</h6>
        <section className="flex items-center justify-center gap-5 [&>a]:hover:text-gold/80 [&>a]:ease-in-out [&>a]:transition">
          <a
            href="https://www.facebook.com/gelateriaamore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <RiFacebookBoxFill size={27} />
          </a>
          <a
            href="https://www.instagram.com/gelateriaamore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={27} />
          </a>
          <a
            href="https://www.yelp.se/biz/gelateria-amore-stockholm?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
          >
            <FaYelp size={27} />
          </a>
          <a
            href="https://www.tripadvisor.se/Restaurant_Review-g189852-d17323332-Reviews-Gelateria_Amore-Stockholm.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
          >
            <FaTripadvisor size={27} />
          </a>
        </section>
      </article>
      <section>
        <p className="uppercase text-background/80 pb-8 text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Gelateria Amore. Alla
          rättigheter förbehållna.
        </p>
      </section>
    </footer>
  );
}
