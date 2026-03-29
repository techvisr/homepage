import Navbar from "../../components/Navbar";
import WhyChooseTechvisr from "../../components/WhyChooseTechvisr";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Why Choose Techvisr",
  description:
    "Discover why organizations choose Techvisr for engineering excellence, research-driven innovation, and scalable technology delivery.",
};

export default function WhyTechvisrPage() {
  return (
    <>
      <Navbar />
      <WhyChooseTechvisr />
      <Footer />
    </>
  );
}
