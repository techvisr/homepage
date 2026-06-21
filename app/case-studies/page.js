import "../v3/v3.css";
import FigmaCaseStudiesPage from "../../components/variants/v3/FigmaCaseStudiesPage";

export const metadata = {
  title: "Case Studies in AI, Cloud, SaaS and Enterprise Modernization",
  description:
    "Review Techvisr case studies across enterprise modernization, SaaS engineering, cloud migration, DevOps automation, AI workflows, and digital transformation.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies in AI, Cloud, SaaS and Enterprise Modernization | Techvisr",
    description:
      "Explore measurable software engineering, cloud modernization, AI automation, and product delivery outcomes from Techvisr.",
    url: "/case-studies",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Techvisr case studies",
      },
    ],
  },
};

export default function CaseStudiesPage() {
  return <FigmaCaseStudiesPage />;
}
