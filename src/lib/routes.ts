export const routes = {
  home: "/",
  properties: "/#properties",
  process: "/#process",
  services: "/#services",
  about: "/#about",
  faq: "/#faq",
  contact: "/#contact",
} as const;

export const contact = {
  phoneDisplay: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  whatsapp: "https://wa.me/2348000000000",
  email: "info@toniaevergreen.com",
  office: "Abuja, FCT, Nigeria",
  mapsHref: "https://maps.google.com/?q=FCT+Abuja+Nigeria",
} as const;

export const propertyHref = (id: string) => `/properties/${id}`;

export const whatsappLink = (message: string) =>
  `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
