import Navbar from "../../components/Navbar";
import CaseStudiesProof from "../../components/CaseStudiesProof";
import Testimonials from "../../components/Testimonials";
import MailToCta from "../../components/MailToCta";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Case Studies",
  description:
    "Review real-world delivery outcomes from Techvisr across enterprise modernization, SaaS engineering, and AI-led transformations.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-white via-slate-100 to-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-600">Case Studies</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Proven Outcomes Across Modernization, Product Engineering, and AI Systems
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Explore examples of how Techvisr teams transformed technology landscapes and delivered measurable impact.
            </p>
          </div>
        </section>
        <CaseStudiesProof />
        <Testimonials />
        <MailToCta />
      </main>
      <Footer />
    </>
  );
}
