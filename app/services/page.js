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
        <section className="bg-gradient-to-br from-white via-red-50 to-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-600">
              End-to-end engineering services
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              We own the outcome, not just the task.
            </h1>
            <p className="mt-5 max-w-4xl text-lg text-slate-600">
              From first architecture call to post-launch monitoring - Techvisr
              delivers technology as a single accountable partner, not a
              collection of specialist contractors.
            </p>
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
