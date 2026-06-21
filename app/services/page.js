import "../v3/v3.css";
import FigmaServicesPage from "../../components/variants/v3/FigmaServicesPage";

export const metadata = {
  title: "AI, Cloud, Product Engineering & Digital Transformation Services",
  description:
    "Explore Techvisr services for custom software development, AI automation, cloud modernization, product engineering, quality engineering, DevOps, and technology consulting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI, Cloud, Product Engineering & Digital Transformation Services | Techvisr",
    description:
      "Enterprise technology services for AI-led automation, product platforms, cloud migration, DevOps, and quality engineering.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Techvisr technology services",
      },
    ],
  },
};

export default function ServicesPage() {
  return <FigmaServicesPage />;
}
