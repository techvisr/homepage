import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CalendlyPopupButton from "../../components/CalendlyPopupButton";

export const metadata = {
  title: "Contact",
  description:
    "Contact Techvisr to discuss software development, AI initiatives, quality engineering, and cloud transformation requirements.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-shell py-10 md:py-14">
          <div className="section-frame">
            <div className="glass-panel rounded-[40px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
              <p className="eyebrow">Contact Techvisr</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Let&apos;s shape your next digital product, platform modernization, or AI initiative.
              </h1>
              <p className="section-copy mt-5 max-w-3xl">
                Share the business goals, technical context, and delivery pressures behind the project. We&apos;ll help define a practical path forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CalendlyPopupButton
                  label="Book a Consultation"
                  className="primary-button"
                />
                <a href="/services" className="secondary-button">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="section-frame grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article className="soft-card rounded-[30px] p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Email</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                For proposals, discovery discussions, and partnership conversations.
              </p>
              <a
                href="mailto:admin@techvisr.com"
                className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                admin@techvisr.com
              </a>
            </article>

            <article className="soft-card rounded-[30px] p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Service Focus</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Software and product engineering</li>
                <li>AI and data systems</li>
                <li>Quality engineering and release confidence</li>
                <li>Cloud migration and DevOps transformation</li>
              </ul>
            </article>

            <article className="soft-card rounded-[30px] p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">Typical Engagements</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>MVP acceleration and product launch readiness</li>
                <li>Platform modernization and scale-up planning</li>
                <li>AI adoption and workflow automation</li>
                <li>Quality uplift and delivery model improvement</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
