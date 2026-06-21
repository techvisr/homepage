import "../v3/v3.css";
import FigmaWhyTechvisrPage from "../../components/variants/v3/FigmaWhyTechvisrPage";

export const metadata = {
  title: "About Techvisr - AI Software Development and Transformation Partner",
  description:
    "Learn how Techvisr helps organizations accelerate digital transformation with AI-native engineering, scalable product delivery, cloud modernization, and intelligent automation.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Techvisr - AI Software Development and Transformation Partner",
    description:
      "Meet the engineering-first technology partner helping teams build modern software, AI systems, and cloud-native platforms.",
    url: "/about-us",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "About Techvisr",
      },
    ],
  },
};

export default function AboutUsPage() {
  return <FigmaWhyTechvisrPage />;
}
