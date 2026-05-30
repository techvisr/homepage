import "./v3.css";
import FigmaHomepage from "../../components/variants/v3/FigmaHomepage";

export const metadata = {
  title: "AI Software Development Company for Enterprise Transformation | Techvisr",
  description:
    "Techvisr helps startups and enterprises build scalable digital products, AI-powered platforms, cloud-native systems, and modern applications through strategic engineering, automation, and transformation services.",
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
      <FigmaHomepage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
    </>
  );
}
