import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { routes } from "@/lib/routes";

const cities = ["Abuja", "Lagos", "Enugu", "Anambra", "Asaba", "Abia"];

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">Homes and land in Nigeria, with the title checked first.</h1>
          <p className="hero-lede">
            We help families and investors buy, rent and manage property. Every listing is
            inspected and its documents verified before we show it to you, whether you&apos;re
            in Abuja or abroad.
          </p>

          <form action={routes.properties} className="hero-search" role="search">
            <div className="hero-search-field">
              <label htmlFor="search-type">Looking to</label>
              <select defaultValue="buy" id="search-type" name="type">
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="land">Buy land</option>
              </select>
            </div>
            <div className="hero-search-field hero-search-location">
              <label htmlFor="search-location">Location</label>
              <input id="search-location" name="location" placeholder="e.g. Guzape, Abuja" />
            </div>
            <button className="button button-primary" type="submit">
              <Icon name="search" size={17} />
              Search
            </button>
          </form>

          <p className="hero-cities">
            <span>Working in</span> {cities.join(", ")}
          </p>
        </div>

        <div className="hero-media">
          <Image
            alt="Bright living room opening onto a garden"
            fill
            preload
            sizes="(max-width: 900px) 100vw, 46vw"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
          />
        </div>
      </div>
    </section>
  );
}
