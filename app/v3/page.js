import "./v3.css";
import FigmaHomepage from "../../components/variants/v3/FigmaHomepage";

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
      <FigmaHomepage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
    </>
  );
}
