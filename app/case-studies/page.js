import "../v3/v3.css";
import FigmaCaseStudiesPage from "../../components/variants/v3/FigmaCaseStudiesPage";

export const metadata = {
  title: "Case Studies",
  description:
    "Review real-world delivery outcomes from Techvisr across enterprise modernization, SaaS engineering, cloud migration, DevOps, and AI-led transformations.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <FigmaCaseStudiesPage />;
}
