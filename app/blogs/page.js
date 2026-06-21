import "../v3/v3.css";
import FigmaBlogsPage from "../../components/variants/v3/FigmaBlogsPage";

export const metadata = {
  title: "Blogs and Insights",
  description:
    "Explore Techvisr blogs and insights on AI-native engineering, cloud modernization, DevOps automation, SaaS product development, quality engineering, and technology consulting.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs and Insights | Techvisr",
    description:
      "Thought leadership, engineering best practices, and AI-driven innovation insights from Techvisr.",
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
};

export default function BlogsPage() {
  return <FigmaBlogsPage />;
}
