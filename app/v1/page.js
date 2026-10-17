import "./v1.css";
import Hero from "../../components/variants/v1/Hero";
import Navbar from "../../components/variants/v1/Navbar";
import Services from "../../components/variants/v1/Services";
import MailToCta from "../../components/variants/v1/MailToCta";
import Footer from "../../components/variants/v1/Footer";
import Community from "../../components/variants/v1/Community";
import ImageContentCards from "../../components/variants/v1/ImageContentCards";

export const metadata = {
  title: "Homepage Demo V1",
  description: "Homepage variant sourced from the main branch.",
};

export default function V1Page() {
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
      <Hero />
      <Services />
      <ImageContentCards />
      <Community />
      <MailToCta />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
    </>
  );
}
