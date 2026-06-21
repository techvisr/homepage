import "../v3/v3.css";
import FigmaWhyTechvisrPage from "../../components/variants/v3/FigmaWhyTechvisrPage";

export const metadata = {
  title: "Why Techvisr for AI-Native Engineering and Enterprise Delivery",
  description:
    "See why enterprises choose Techvisr for AI-native engineering, scalable software delivery, cloud modernization, quality engineering, and operational automation.",
  alternates: {
    canonical: "/why-techvisr",
  },
  openGraph: {
    title: "Why Techvisr for AI-Native Engineering and Enterprise Delivery",
    description:
      "Learn how Techvisr combines engineering discipline, AI-first delivery, cloud expertise, and enterprise-grade execution.",
    url: "/why-techvisr",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Why Techvisr",
      },
    ],
  },
};

export default function WhyTechvisrPage() {
  return <FigmaWhyTechvisrPage />;
}
