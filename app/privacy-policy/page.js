import "../v3/v3.css";
import FigmaLegalPage from "../../components/variants/v3/FigmaLegalPage";
import { privacyPage } from "../../components/variants/v3/legalContent";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Techvisr collects, uses, protects, and shares personal information when you visit our website, contact us, or engage with our services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <FigmaLegalPage page={privacyPage} />;
}
