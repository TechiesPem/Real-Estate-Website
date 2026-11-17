import Link from "next/link";
import { routes } from "@/lib/routes";

export function InvestmentBanner() {
  return (
    <section
      aria-labelledby="investment-title"
      className="investment-banner"
      id="services"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,43,32,.98) 0%, rgba(0,43,32,.84) 38%, rgba(0,43,32,.05) 72%), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90')",
      }}
    >
      <div>
        <h2 id="investment-title">Invest in Real Estate</h2>
        <p>Build long-term wealth with verified,<br />high-value properties.</p>
        <Link className="button button-gold" href={routes.properties}>Get Investment Advice <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
