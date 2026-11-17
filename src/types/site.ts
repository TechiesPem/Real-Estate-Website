export type PropertyCategory = "Houses" | "Apartments" | "Land" | "Commercial";

export type PropertyImage = {
  src: string;
  alt: string;
};

export type Property = {
  id: string;
  reference: string;
  title: string;
  location: string;
  price: string;
  priceNote?: string;
  category: PropertyCategory;
  status: "For sale" | "For rent";
  beds?: number;
  baths?: number;
  size: string;
  document: string;
  summary: string;
  description: string[];
  details: { label: string; value: string }[];
  features: string[];
  neighbourhood: string;
  mapQuery: string;
  gallery: PropertyImage[];
  galleryNote?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};
