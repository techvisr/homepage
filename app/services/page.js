import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import CoreServices from "../../components/CoreServices";
import HowWeWork from "../../components/HowWeWork";
import TechnologyStack from "../../components/TechnologyStack";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services",
  description:
    "Explore Techvisr services across software engineering, AI solutions, quality engineering, cloud, DevOps, and digital strategy.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-600">Our Services</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              End-to-End Engineering Services for Product, Platform, and AI Transformation
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              We partner with startups and enterprises to design, build, validate, and scale digital systems that deliver measurable business value.
            </p>
          </div>
        </section>
        <Services />
        <CoreServices />
        <HowWeWork />
        <TechnologyStack />
      </main>
      <Footer />
    </>
  );
}
