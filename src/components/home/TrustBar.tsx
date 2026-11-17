const benefits = [
  { icon: "♧", title: "Verified Properties", detail: "Only genuine listings" },
  { icon: "♧", title: "Expert Guidance", detail: "From enquiry to ownership" },
  { icon: "▥", title: "Investment Opportunities", detail: "Grow your wealth" },
  { icon: "♧", title: "End-to-End Support", detail: "Transparent & professional" },
];

export function TrustBar() {
  return (
    <section aria-label="Why choose Tonia Evergreen" className="trust-bar">
      {benefits.map((benefit) => (
        <div className="trust-item" key={benefit.title}>
          <span aria-hidden="true" className="trust-icon">{benefit.icon}</span>
          <span><strong>{benefit.title}</strong><small>{benefit.detail}</small></span>
        </div>
      ))}
    </section>
  );
}
