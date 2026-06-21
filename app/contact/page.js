import "../v3/v3.css";
import FigmaContactPage from "../../components/variants/v3/FigmaContactPage";

export const metadata = {
  title: "Contact Techvisr for AI Software Development and Consulting",
  description:
    "Contact Techvisr to discuss AI software development, digital transformation, product engineering, cloud modernization, DevOps, and technology consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Techvisr for AI Software Development and Consulting",
    description:
      "Talk to Techvisr about building software platforms, automating operations, modernizing cloud systems, and scaling digital products.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Contact Techvisr",
      },
    ],
  },
};

export default function Contact() {
  return <FigmaContactPage />;
}
