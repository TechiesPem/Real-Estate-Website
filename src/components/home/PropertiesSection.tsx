"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties } from "@/lib/data/properties";

const filters = ["All", ...Array.from(new Set(properties.map((p) => p.category)))];

export function PropertiesSection() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? properties : properties.filter((p) => p.category === active);

  return (
    <section aria-labelledby="properties-title" className="section properties" id="properties">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <h2 id="properties-title">Available now</h2>
            <p>A selection of current listings. Ask us for the full list in your area.</p>
          </div>
          <div aria-label="Filter by property type" className="filter-tabs" role="group">
            {filters.map((filter) => (
              <button
                aria-pressed={active === filter}
                className="filter-tab"
                key={filter}
                onClick={() => setActive(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ul className="property-grid">
          {visible.map((property) => (
            <li key={property.id}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
