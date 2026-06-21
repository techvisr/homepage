import "../v3/v3.css";
import FigmaServicesPage from "../../components/variants/v3/FigmaServicesPage";

export const metadata = {
  title: "Services",
  description:
    "Explore Techvisr services for product engineering, AI automation, cloud modernization, quality engineering, technology consulting, and enterprise digital transformation.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <FigmaServicesPage />;
}
