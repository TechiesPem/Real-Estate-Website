const awards = [
  { icon: "♛", title: "Real Estate\nExcellence Award", year: "2024" },
  { icon: "♕", title: "Outstanding\nProperty Consultant", year: "2023" },
  { icon: "♜", title: "Most Trusted\nReal Estate Brand", year: "2022" },
];

export function AwardsSection() {
  return (
    <section aria-labelledby="awards-title" className="awards-section" id="awards">
      <div className="trophy" aria-hidden="true">🏆</div>
      <div className="awards-intro">
        <h2 id="awards-title">Our Awards &amp; Recognition</h2>
        <p>Celebrating excellence, trust and impact<br /> in the real estate industry.</p>
      </div>
      <div className="award-list">
        {awards.map((award) => (
          <div className="award-item" key={award.year}>
            <span aria-hidden="true" className="award-icon">{award.icon}</span>
            <strong>{award.title.split("\n").map((line) => <span key={line}>{line}</span>)}</strong>
            <b>{award.year}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
