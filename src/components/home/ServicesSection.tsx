import Image from "next/image";
import { services } from "@/lib/data/home";

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="section services" id="services">
      <div className="container services-inner">
        <div className="services-media">
          <Image
            alt="Living area of a finished home"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
          />
        </div>
        <div>
          <div className="section-head">
            <h2 id="services-title">What we do</h2>
            <p>
              Many of our clients live outside Nigeria, so all of this can be handled remotely, with
              video inspections and one person to deal with throughout.
            </p>
          </div>
          <dl className="service-list">
            {services.map((service) => (
              <div key={service.title}>
                <dt>{service.title}</dt>
                <dd>{service.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
