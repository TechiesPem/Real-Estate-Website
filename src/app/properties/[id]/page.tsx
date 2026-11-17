import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getProperty, properties } from "@/lib/data/properties";
import { contact, routes, whatsappLink } from "@/lib/routes";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getProperty((await params).id);
  if (!property) return {};
  return {
    title: `${property.title}, ${property.location} | TONIA Evergreen Properties`,
    description: property.summary,
    openGraph: { images: [property.gallery[0].src] },
  };
}

export default async function PropertyPage({ params }: Props) {
  const property = getProperty((await params).id);
  if (!property) notFound();

  const enquiry = `Hello, I'm interested in the ${property.title} in ${property.location} (ref ${property.reference}). Is it still available, and when can I inspect it?`;
  const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Enquiry: ${property.title}, ${property.location} (${property.reference})`,
  )}&body=${encodeURIComponent(enquiry)}`;
  const similar = properties.filter((p) => p.id !== property.id).slice(0, 3);

  const keyFacts: { icon: IconName; label: string; value: string }[] = [
    ...(property.beds ? [{ icon: "bed" as const, label: "Bedrooms", value: String(property.beds) }] : []),
    ...(property.baths ? [{ icon: "bath" as const, label: "Bathrooms", value: String(property.baths) }] : []),
    { icon: "area", label: property.category === "Land" ? "Plot size" : "Size", value: property.size },
    { icon: "document", label: "Title", value: property.document },
  ];

  return (
    <>
      <SiteHeader />
      <main className="listing">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link href={routes.home}>Home</Link></li>
              <li><Link href={routes.properties}>Properties</Link></li>
              <li aria-current="page">{property.title}</li>
            </ol>
          </nav>

          <header className="listing-header">
            <div>
              <p className="listing-tags">
                <span className="listing-status">{property.status}</span>
                <span>Ref. {property.reference}</span>
              </p>
              <h1>{property.title}</h1>
              <p className="listing-location">
                <Icon name="pin" size={17} />
                {property.location}
              </p>
            </div>
            <p className="listing-price">
              {property.price}
              {property.priceNote ? <span>{property.priceNote}</span> : null}
            </p>
          </header>

          <PropertyGallery images={property.gallery} note={property.galleryNote} title={property.title} />

          <div className="listing-layout">
            <div className="listing-content">
              <dl className="key-facts">
                {keyFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt><Icon name={fact.icon} size={18} />{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <section aria-labelledby="overview-title" className="listing-section">
                <h2 id="overview-title">About this property</h2>
                <p className="listing-summary">{property.summary}</p>
                {property.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </section>

              <section aria-labelledby="features-title" className="listing-section">
                <h2 id="features-title">Features</h2>
                <ul className="feature-list">
                  {property.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="details-title" className="listing-section">
                <h2 id="details-title">Property details</h2>
                <dl className="detail-table">
                  {property.details.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt>Reference</dt>
                    <dd>{property.reference}</dd>
                  </div>
                </dl>
              </section>

              <section aria-labelledby="location-title" className="listing-section">
                <h2 id="location-title">Location</h2>
                <p>{property.neighbourhood}</p>
                <div className="listing-map">
                  <iframe
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&z=14&output=embed`}
                    title={`Map of ${property.location}`}
                  />
                </div>
                <p className="listing-map-note">
                  The map shows the general area. We share the exact address when you book an inspection.{" "}
                  <a
                    className="text-link"
                    href={`https://maps.google.com/?q=${encodeURIComponent(property.mapQuery)}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </section>

              <section aria-labelledby="before-title" className="listing-section listing-assurance">
                <h2 id="before-title">Before you pay anything</h2>
                <ul>
                  <li>
                    <strong>Inspect first.</strong> Visit in person, or we&apos;ll walk you through on a live
                    video call.
                  </li>
                  <li>
                    <strong>Check the documents.</strong> We send copies of the title and survey plan to you or your
                    lawyer for independent checks at the registry.
                  </li>
                  <li>
                    <strong>Pay the right account.</strong> Payment is only made after inspection and verification,
                    into an account confirmed in writing.
                  </li>
                </ul>
              </section>
            </div>

            <aside aria-label="Contact the agent" className="listing-aside">
              <div className="agent-card">
                <p className="agent-card-price">
                  {property.price}
                  {property.priceNote ? <span> {property.priceNote}</span> : null}
                </p>
                <p className="agent-card-intro">
                  Interested in this property? Get in touch to ask questions or book an inspection.
                </p>

                <div className="agent">
                  <div className="agent-photo">
                    <Image
                      alt=""
                      fill
                      sizes="56px"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
                    />
                  </div>
                  <div>
                    <strong>Athonia Anich</strong>
                    <span>Listing agent, TONIA Evergreen</span>
                  </div>
                </div>

                <div className="agent-actions">
                  <a className="button button-primary" href={whatsappLink(enquiry)}>
                    <Icon name="chat" size={18} />
                    Message on WhatsApp
                  </a>
                  <a className="button button-outline" href={contact.phoneHref}>
                    <Icon name="phone" size={18} />
                    Call {contact.phoneDisplay}
                  </a>
                  <a className="button button-outline" href={mailHref}>
                    <Icon name="mail" size={18} />
                    Send an email
                  </a>
                </div>

                <p className="agent-card-ref">
                  Please quote <strong>{property.reference}</strong> when you get in touch.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {similar.length ? (
          <section aria-labelledby="similar-title" className="section similar">
            <div className="container">
              <div className="section-head section-head-row">
                <h2 id="similar-title">Other properties</h2>
                <Link className="text-link" href={routes.properties}>
                  See all listings
                </Link>
              </div>
              <ul className="property-grid">
                {similar.map((item) => (
                  <li key={item.id}>
                    <PropertyCard property={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

      <div className="mobile-contact-bar">
        <div>
          <strong>{property.price}</strong>
          <span>Ref. {property.reference}</span>
        </div>
        <a aria-label="Call the agent" className="button button-outline" href={contact.phoneHref}>
          <Icon name="phone" size={18} />
        </a>
        <a className="button button-primary" href={whatsappLink(enquiry)}>
          <Icon name="chat" size={18} />
          WhatsApp
        </a>
      </div>

      <SiteFooter />
    </>
  );
}
