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
        <section className="page-shell py-10 md:py-14">
          <div className="section-frame">
            <div className="glass-panel rounded-[40px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
              <p className="eyebrow">Case Studies</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Proof points across modernization, product engineering, and applied AI delivery.
              </h1>
              <p className="section-copy mt-5 max-w-3xl">
                Explore how Techvisr approaches platform complexity, execution discipline, and measurable business impact across different engagement models.
              </p>
            </div>
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
