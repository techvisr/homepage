import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
        <section className="bg-gradient-to-br from-white via-red-50 to-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-600">Contact Techvisr</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Let&apos;s Plan Your Next Digital Product, Platform, or AI Initiative
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Share your goals and constraints. We&apos;ll help you define a clear technical path, delivery model, and execution plan.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 md:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Email</h2>
              <p className="mt-3 text-slate-600">For project inquiries, proposals, and partnership discussions.</p>
              <a href="mailto:admin@techvisr.com" className="mt-4 inline-flex text-sm font-semibold text-red-600 hover:text-red-700">
                admin@techvisr.com
              </a>
            </article>

            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Service Focus</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Software and product engineering</li>
                <li>AI and data systems</li>
                <li>Quality engineering and test automation</li>
                <li>Cloud migration and DevOps</li>
              </ul>
            </article>

            <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Typical Engagements</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>MVP and product launch acceleration</li>
                <li>Platform modernization and scale-up</li>
                <li>AI adoption and intelligent automation</li>
                <li>Quality and release engineering uplift</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
