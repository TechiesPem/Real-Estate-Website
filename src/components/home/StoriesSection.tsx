import { Icon } from "@/components/ui/Icon";
import { faqs, testimonial } from "@/lib/data/home";

export function StoriesSection() {
  return (
    <>
      <section aria-label="Client feedback" className="section testimonial">
        <figure className="container testimonial-inner">
          <blockquote>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
          </blockquote>
          <figcaption>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.detail}</span>
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="faq-title" className="section faq" id="faq">
        <div className="container faq-inner">
          <div className="section-head">
            <h2 id="faq-title">Common questions</h2>
            <p>Something else on your mind? Send us a message and we&apos;ll reply the same day.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question}
                  <Icon className="faq-icon" name="plus" size={18} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
