import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import MailToCta from "../components/MailToCta";
import Footer from "../components/Footer";
import Community from "../components/Community";
import ImageContentCards from "../components/ImageContentCards";

export const metadata = {
  title: "Software, AI and Quality Engineering Services",
  description:
    "Techvisr helps startups and enterprises build scalable software platforms, AI solutions, and high-quality digital products.",
};

export default function Home() {
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
