import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://techvisr.com"),
  title: {
    default: "Techvisr | Software Development, AI & Quality Engineering",
    template: "%s | Techvisr",
  },
  description:
    "Techvisr delivers end-to-end software development, AI engineering, cloud modernization, and quality engineering services for startups and enterprises.",
  keywords: [
    "software development company",
    "ai engineering services",
    "quality engineering",
    "devops consulting",
    "product engineering",
    "next.js development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Techvisr | Software Development, AI & Quality Engineering",
    description:
      "Build, modernize, and scale digital products with Techvisr's engineering-first teams.",
    url: "/",
    siteName: "Techvisr",
    images: [
      {
        url: "/images/techvisr.png",
        width: 1200,
        height: 630,
        alt: "Techvisr",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techvisr | Software Development, AI & Quality Engineering",
    description:
      "Engineering-first partner for product development, AI systems, cloud and quality.",
    images: ["/images/techvisr.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
