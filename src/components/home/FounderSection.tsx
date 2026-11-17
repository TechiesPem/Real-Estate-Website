import Image from "next/image";
import { recognition } from "@/lib/data/home";
import { contact } from "@/lib/routes";

export function FounderSection() {
  return (
    <section aria-labelledby="about-title" className="section about" id="about">
      <div className="container about-inner">
        <div className="about-photo">
          <Image
            alt="Athonia Anich, founder of TONIA Evergreen Properties"
            fill
            sizes="(max-width: 900px) 100vw, 400px"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80"
          />
        </div>
        <div className="about-copy">
          <h2 id="about-title">About us</h2>
          <p className="about-lead">
            Athonia Anich started TONIA Evergreen Properties to make buying property in Nigeria
            less of a gamble.
          </p>
          <p>
            Too many people, especially those buying from abroad, have paid for land or homes that
            turned out to have disputed titles or no approvals at all. We keep our listings small
            and checked, explain what each document means, and stay involved until the keys are in
            your hand.
          </p>
          <p className="about-signoff">
            <strong>Athonia Anich</strong>
            <span>Founder</span>
          </p>

          <div className="recognition">
            <h3>Recognition</h3>
            <ul>
              {recognition.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <span className="recognition-year">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <a className="text-link" href={`mailto:${contact.email}`}>
            Get in touch with Athonia
          </a>
        </div>
      </div>
    </section>
  );
}
