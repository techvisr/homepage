import "./v2.css";
import Hero from "../../components/variants/v2/Hero";
import Navbar from "../../components/variants/v2/Navbar";
import Services from "../../components/variants/v2/Services";
import MailToCta from "../../components/variants/v2/MailToCta";
import Footer from "../../components/variants/v2/Footer";
import Community from "../../components/variants/v2/Community";
import ImageContentCards from "../../components/variants/v2/ImageContentCards";

export const metadata = {
  title: "Homepage Demo V2",
  description: "Homepage variant sourced from the professional refresh branch.",
};

export default function V2Page() {
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
      <main>
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
