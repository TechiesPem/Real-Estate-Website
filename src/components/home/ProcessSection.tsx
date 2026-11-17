import { steps } from "@/lib/data/home";

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="section process" id="process">
      <div className="container">
        <div className="section-head">
          <h2 id="process-title">How buying with us works</h2>
          <p>
            Most problems with property in Nigeria start with paperwork nobody checked. We do that
            part before you commit, not after.
          </p>
        </div>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
