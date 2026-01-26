import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaInstagram, FaYelp, FaTripadvisor } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-8 items-center bg-foreground/90 *:text-background [&_h2]:font-light [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-background/80 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 right-0 w-full"
        style={{
          height: '12px',
          fill: 'white',
          transform: 'scaleY(-1)',
        }}
      >
        <defs>
          <pattern
            id="spike-pattern-footer"
            x="0"
            y="0"
            width="11"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 12L5.5 1l5.5 11z" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spike-pattern-footer)" />
      </svg>
      <section className="flex flex-col items-center gap-3">
        <h2>Om oss</h2>
        <p className="md:w-[60%] w-[90%] text-center">
          Gelateria Amore är ett litet, familjedrivet företag. Ägarna Dragana
          och Miroslav är passionerade, kunniga och entusiastiska när det gäller
          glass och pizza. Kom in och upplev hur äkta kärlek smakar!
        </p>
      </section>
      <section className="flex flex-col items-center gap-3">
        <h2>FÖLJ OSS</h2>
        <div className="flex items-center justify-center gap-5 [&>a]:hover:text-gold/80 [&>a]:ease-in-out [&>a]:transition">
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
        </div>
      </section>
      <section className="flex flex-col gap-3 items-center">
        <h2>KONTAKTA OSS</h2>
        <address className="*:not-italic text-center flex flex-col gap-1.5 *:hover:text-gold/80 *:ease-in-out *:transition *:cursor-pointer">
          <a
            className="address"
            href="https://www.google.com/maps/place/Gelateria+Amore/@59.3177426,18.0279998,16z/data=!3m1!4b1!4m6!3m5!1s0x465f77c51132f8b1:0xb2ff7b2f1441e768!8m2!3d59.31774!4d18.0328707!16s%2Fg%2F11c46cd7z2?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Långholmsgatan 5, 117 33 Stockholm
          </a>

          <a className="email" href="mailto:info@gamore.se">
            info@gamore.se
          </a>
          <a className="phone" href="tel:+46707961666">
            070 796 16 66
          </a>
          <a className="phone" href="tel:+08304270">
            08 30 42 70
          </a>
        </address>
      </section>
      <section>
        <p className="uppercase text-background/80 pb-8 text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Gelateria Amore. Alla
          rättigheter förbehållna.
        </p>
      </section>
    </footer>
  );
}
