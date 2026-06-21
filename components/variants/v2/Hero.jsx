import CalendlyPopupButton from "./CalendlyPopupButton";

const serviceTags = [
  "Software Development",
  "AI Engineering",
  "Quality Engineering",
  "Cloud Modernization",
];

export default function Hero() {
  return (
    <section className="v2-hero">
      <div className="v2-hero__inner">
        <div className="v2-hero__copy-frame">
          <div className="v2-hero__title-wrap">
            <h1 className="v2-hero__title">
              AI-Native Engineering for Modern Digital Enterprises
            </h1>
          </div>
          <div className="v2-hero__body-wrap">
            <p className="v2-hero__body">
              A digital transformation company focused on building scalable software, intelligent automation, and cloud-driven ecosystems for modern enterprises.
            </p>
          </div>
        </div>

        <div className="v2-hero__actions">
          <CalendlyPopupButton
            label="Book a Consultation"
            className="primary-button v2-hero__button"
          />
          <a href="/services" className="secondary-button v2-hero__button">
            Explore Services
          </a>
        </div>

        <div className="v2-hero__service-focus">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Service Focus
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {serviceTags.map((tag) => (
              <div
                key={tag}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
