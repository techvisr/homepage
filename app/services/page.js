import Navbar from "../../components/Navbar";
import CoreServices from "../../components/CoreServices";
import HowWeWork from "../../components/HowWeWork";
import TechnologyStack from "../../components/TechnologyStack";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services",
  description:
    "End-to-end engineering services from product development and AI to Microsoft Fabric migration, quality engineering, and CTO advisory.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-shell py-10 md:py-14">
          <div className="section-frame">
            <div className="glass-panel rounded-[40px] px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
              <p className="eyebrow">End-to-end Engineering Services</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Structured engineering services designed for growth, modernization, and reliable delivery.
              </h1>
              <p className="section-copy mt-5 max-w-4xl">
                From architecture definition to platform scale-up, Techvisr operates as a single accountable partner across engineering, AI, cloud, and quality transformation.
              </p>
            </div>
          </div>
        </section>
        <CoreServices />
        <HowWeWork />
        <TechnologyStack />
      </main>
      <Footer />
    </>
  );
}
