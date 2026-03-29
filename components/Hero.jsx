import CalendlyPopupButton from "./CalendlyPopupButton";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-banner.png')" }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-600">
            Software Development, AI & Quality Engineering
          </p>

          <h1 className="text-3xl font-semibold leading-snug text-gray-900 sm:text-3xl md:text-4xl md:leading-tight">
            Engineering Intelligent Digital Solutions for Modern Enterprises
          </h1>

          <p className="text-base leading-relaxed text-[#94A3B8]">
            Trusted technology partner for startups, fintech companies, SaaS platforms, and enterprise organizations worldwide.
          </p>

          <div className="pt-2 flex flex-col gap-3 sm:flex-row">
            <CalendlyPopupButton
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            />
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-gray-500 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
