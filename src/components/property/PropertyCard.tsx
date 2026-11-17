import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { propertyHref } from "@/lib/routes";
import type { Property } from "@/types/site";

export function PropertyCard({ property }: { property: Property }) {
  const href = propertyHref(property.id);
  const cover = property.gallery[0];

  return (
    <article className="property-card">
      <Link className="property-media" href={href} tabIndex={-1} aria-hidden="true">
        <Image
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px"
          src={cover.src}
        />
        <span className="property-status">{property.status}</span>
        {property.gallery.length > 1 ? (
          <span className="property-photo-count">{property.gallery.length} photos</span>
        ) : null}
      </Link>
      <div className="property-body">
        <p className="property-price">
          {property.price}
          {property.priceNote ? <span> {property.priceNote}</span> : null}
        </p>
        <h3>
          <Link className="property-title-link" href={href}>
            {property.title}
          </Link>
        </h3>
        <p className="property-location">
          <Icon name="pin" size={15} />
          {property.location}
        </p>
        <ul className="property-facts">
          {property.beds ? (
            <li><Icon name="bed" size={15} />{property.beds} bed</li>
          ) : null}
          {property.baths ? (
            <li><Icon name="bath" size={15} />{property.baths} bath</li>
          ) : null}
          <li><Icon name="area" size={15} />{property.size}</li>
          <li><Icon name="document" size={15} />{property.document}</li>
        </ul>
        <Link className="property-link" href={href}>
          View details <Icon name="arrow" size={15} />
        </Link>
      </div>
    </article>
  );
}
