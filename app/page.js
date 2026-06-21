import V3Page from "./v3/page";

export const metadata = {
  title: "AI Software Development Company for Enterprise Transformation",
  description:
    "Techvisr helps startups and enterprises build AI-powered platforms, custom software, cloud-native applications, automation systems, and scalable digital products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Software Development Company for Enterprise Transformation | Techvisr",
    description:
      "Build modern products, automate operations, and scale cloud-native platforms with Techvisr's AI-first engineering teams.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Techvisr AI software development and digital transformation company",
      },
    ],
  },
};

export default function Home() {
  return <V3Page />;
}
