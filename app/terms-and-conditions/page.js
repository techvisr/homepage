import "../v3/v3.css";
import FigmaLegalPage from "../../components/variants/v3/FigmaLegalPage";
import { termsPage } from "../../components/variants/v3/legalContent";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for using Techvisr websites and engaging with Techvisr technology consulting, product engineering, AI, cloud, and digital transformation services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <FigmaLegalPage page={termsPage} />;
}
