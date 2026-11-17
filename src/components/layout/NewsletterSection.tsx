export function NewsletterSection() {
  return (
    <section aria-labelledby="newsletter-title" className="newsletter-section">
      <div className="newsletter-icon" aria-hidden="true">✉</div>
      <div className="newsletter-copy">
        <h2 id="newsletter-title">Stay Updated</h2>
        <p>Get new property listings and investment opportunities.</p>
      </div>
      <form action="#" className="newsletter-form">
        <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
        <input autoComplete="email" id="newsletter-email" name="email" placeholder="Enter your email address" type="email" />
        <button className="button button-green" type="submit">Subscribe</button>
      </form>
    </section>
  );
}
