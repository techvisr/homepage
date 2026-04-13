import "./v3.css";
import Hero from "../../components/variants/v3/Hero";
import Navbar from "../../components/variants/v3/Navbar";
import Services from "../../components/variants/v3/Services";
import MailToCta from "../../components/variants/v3/MailToCta";
import Footer from "../../components/variants/v3/Footer";
import Community from "../../components/variants/v3/Community";
import ImageContentCards from "../../components/variants/v3/ImageContentCards";

export const metadata = {
  title: "Homepage Demo V3",
  description: "Homepage variant sourced from the reference refresh branch.",
};

export default function V3Page() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techvisr",
    url: "https://techvisr.com",
    logo: "https://techvisr.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "admin@techvisr.com",
    },
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <ImageContentCards />
        <Community />
        <MailToCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
    </>
  );
}
