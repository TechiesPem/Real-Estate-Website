import type { Property } from "@/types/site";

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Placeholder listings: replace details, prices, descriptions and photos with real stock.
export const properties: Property[] = [
  {
    id: "4-bedroom-detached-duplex-guzape",
    reference: "TEP-ABJ-0412",
    title: "4 bedroom detached duplex",
    location: "Guzape, Abuja",
    price: "₦750,000,000",
    category: "Houses",
    status: "For sale",
    beds: 4,
    baths: 5,
    size: "650 m²",
    document: "C of O",
    summary:
      "A finished family home on a quiet close in Guzape, with a boys' quarters, gated compound and room to park four cars.",
    description: [
      "This is a fully finished detached duplex on a 650 m² plot in one of Guzape's established streets. The ground floor has a double-height living room, a separate family lounge, a guest bedroom en suite and a kitchen with a walk-in pantry and laundry area.",
      "Upstairs are three further bedrooms, all en suite, including a main bedroom with a dressing room and a balcony that looks over the garden. The finishes are recent and in good condition: porcelain floors downstairs, engineered wood upstairs and aluminium windows throughout.",
      "Outside there is a two-room boys' quarters, a gatehouse, interlocked parking for four cars and a small garden. The compound runs on public power with a backup generator house already built.",
    ],
    details: [
      { label: "Property type", value: "Detached duplex" },
      { label: "Bedrooms", value: "4, all en suite" },
      { label: "Bathrooms", value: "5" },
      { label: "Plot size", value: "650 m²" },
      { label: "Title", value: "Certificate of Occupancy" },
      { label: "Condition", value: "Newly finished" },
      { label: "Parking", value: "4 cars" },
      { label: "Extras", value: "Boys' quarters, gatehouse" },
    ],
    features: [
      "Double-height living room",
      "Separate family lounge",
      "Fitted kitchen with pantry",
      "Laundry room",
      "Main bedroom with dressing room",
      "Balcony over the garden",
      "Two-room boys' quarters",
      "Gatehouse",
      "Generator house",
      "Borehole and water treatment",
      "Interlocked compound",
      "Close to Guzape main road",
    ],
    neighbourhood:
      "Guzape sits just south of Asokoro and is one of Abuja's newer high-end districts. The Central Business District is about 15 minutes away by car, and the area is popular with families for its quieter streets and newer housing stock.",
    mapQuery: "Guzape, Abuja, Nigeria",
    gallery: [
      { src: unsplash("1600596542815-ffad4c1539a9"), alt: "Front of the duplex with a landscaped garden" },
      { src: unsplash("1600585154340-be6161a56a0c"), alt: "Rear of the house at dusk, with the garden lit" },
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Living room with a staircase to the upper floor" },
      { src: unsplash("1600210491892-03d54c0aaf87"), alt: "Family lounge with timber ceiling beams and a fireplace" },
      { src: unsplash("1484154218962-a197022b5858"), alt: "Kitchen with white units and a breakfast bar" },
      { src: unsplash("1600607687644-c7171b42498f"), alt: "Main bedroom with doors opening onto the balcony" },
      { src: unsplash("1600566752355-35792bedcfea"), alt: "Main bathroom with a freestanding bath" },
    ],
  },
  {
    id: "3-bedroom-terrace-duplex-wuye",
    reference: "TEP-ABJ-0388",
    title: "3 bedroom terrace duplex",
    location: "Wuye, Abuja",
    price: "₦320,000,000",
    category: "Apartments",
    status: "For sale",
    beds: 3,
    baths: 4,
    size: "280 m²",
    document: "Governor's consent",
    summary:
      "A well-kept end-of-terrace home in a small serviced estate in Wuye, close to the city centre and ready to move into.",
    description: [
      "An end-of-terrace duplex in a gated estate of twelve homes. Being on the end, it gets more natural light than the middle units and has a slightly larger side garden.",
      "The ground floor has an open living and dining area, a guest toilet and a kitchen with a separate store. Upstairs there are three bedrooms, all en suite, and a small family sitting area at the top of the stairs. There is also a room on the ground floor that works as a study or staff room.",
      "The estate has a shared generator, security at the gate and a monthly service charge that covers both, along with cleaning of the common areas and waste collection.",
    ],
    details: [
      { label: "Property type", value: "Terrace duplex (end unit)" },
      { label: "Bedrooms", value: "3, all en suite" },
      { label: "Bathrooms", value: "4" },
      { label: "Floor area", value: "280 m²" },
      { label: "Title", value: "Governor's consent" },
      { label: "Condition", value: "Good, ready to move in" },
      { label: "Parking", value: "2 cars" },
      { label: "Service charge", value: "Payable monthly" },
    ],
    features: [
      "End-of-terrace unit",
      "Open living and dining area",
      "Fitted kitchen with store",
      "Guest toilet",
      "Ground-floor study",
      "Upstairs family sitting area",
      "Gated estate of 12 homes",
      "Shared estate generator",
      "24-hour gate security",
      "Close to Wuse and the CBD",
    ],
    neighbourhood:
      "Wuye is a central district between Wuse and Utako, so most of the city is within easy reach. Shopping, banks and schools are close by, and the main roads into the Central Business District are a short drive away.",
    mapQuery: "Wuye, Abuja, Nigeria",
    gallery: [
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Living area with warm evening lighting" },
      { src: unsplash("1600047509807-ba8f99d2cdde"), alt: "Front of the terrace with lawn and paved path" },
      { src: unsplash("1560448204-e02f11c3d0e2"), alt: "Bright living room with large windows" },
      { src: unsplash("1505693416388-ac5ce068fe85"), alt: "Main bedroom with an upholstered bed" },
      { src: unsplash("1595526114035-0d45ed16cfbf"), alt: "Second bedroom with a window over the garden" },
      { src: unsplash("1505691938895-1758d7feb511"), alt: "Family sitting area at the top of the stairs" },
    ],
  },
  {
    id: "residential-plot-awka",
    reference: "TEP-ANA-0127",
    title: "Residential plot",
    location: "Awka, Anambra",
    price: "₦45,000,000",
    category: "Land",
    status: "For sale",
    size: "600 m²",
    document: "Registered survey",
    summary:
      "A dry, level 600 m² plot in a developing residential layout in Awka, with road access and a registered survey.",
    description: [
      "A single residential plot in a planned layout on the edge of Awka. The land is dry and level, already cleared, and fronts an untarred access road that connects to the main road.",
      "Several neighbouring plots have been built on, and power lines run along the access road. It suits a family home or a block of flats, subject to approval from the state planning authority.",
      "The survey is registered, and we can arrange a joint site visit with your surveyor to confirm the beacons before you commit.",
    ],
    details: [
      { label: "Property type", value: "Residential land" },
      { label: "Plot size", value: "600 m²" },
      { label: "Title", value: "Registered survey" },
      { label: "Terrain", value: "Dry and level, cleared" },
      { label: "Access", value: "Untarred road to main road" },
      { label: "Suitable for", value: "Family home or flats" },
    ],
    features: [
      "Dry, level land",
      "Already cleared",
      "Road access",
      "Power lines nearby",
      "Neighbouring plots built on",
      "Beacons in place",
    ],
    neighbourhood:
      "Awka is the capital of Anambra State and has grown steadily in recent years, with new residential layouts opening up around the city. This plot is a short drive from the town centre.",
    mapQuery: "Awka, Anambra, Nigeria",
    gallery: [
      { src: unsplash("1500382017468-9049fed747ef"), alt: "The plot: open green land under a clear sky" },
    ],
    galleryNote: "More site photos and a copy of the survey plan are available on request.",
  },
];

export function getProperty(id: string) {
  return properties.find((property) => property.id === id);
}
