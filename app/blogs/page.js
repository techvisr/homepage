import "../v3/v3.css";
import FigmaBlogsPage from "../../components/variants/v3/FigmaBlogsPage";

export const metadata = {
  title: "AI, Cloud, DevOps and Product Engineering Insights",
  description:
    "Explore Techvisr insights on AI-native engineering, enterprise automation, cloud modernization, DevOps, SaaS product development, quality engineering, and technology consulting.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "AI, Cloud, DevOps and Product Engineering Insights | Techvisr",
    description:
      "Engineering best practices and AI-driven innovation insights for enterprise technology teams.",
    url: "/blogs",
    type: "website",
    images: [
      {
        url: "/images/contact/consultation-code.png",
        width: 1064,
        height: 812,
        alt: "Techvisr blogs and insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Cloud, DevOps and Product Engineering Insights | Techvisr",
    description:
      "Read practical insights on AI automation, software engineering, cloud modernization, DevOps, SaaS, and quality engineering.",
    images: ["/images/contact/consultation-code.png"],
  },
};

export default function BlogsPage() {
  return <FigmaBlogsPage />;
}
