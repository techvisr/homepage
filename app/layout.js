import "./globals.css";
import Script from "next/script";
import { Barlow, Inter, Manrope, Plus_Jakarta_Sans, Roboto } from "next/font/google";

const siteUrl = "https://techvisr.com";
const siteName = "Techvisr";
const defaultTitle = "Techvisr | AI Software Development & Digital Transformation Company";
const defaultDescription =
  "Techvisr builds AI-powered software, cloud-native platforms, automation systems, and scalable digital products for startups and enterprises.";
const ogImage = "/images/techvisr.png";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figma-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figma-body",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figma-nav",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "AI software development company",
    "digital transformation company",
    "custom software development services",
    "enterprise AI automation services",
    "cloud migration services",
    "product engineering services",
    "quality engineering services",
    "DevOps consulting services",
    "SaaS product development",
    "technology consulting company",
  ],
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Techvisr AI software development and digital transformation company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/figma-raw/0b24c7c2d782973d27bd119c9b63dbddc971b776.png",
    shortcut: "/images/figma-raw/0b24c7c2d782973d27bd119c9b63dbddc971b776.png",
    apple: "/images/figma-raw/0b24c7c2d782973d27bd119c9b63dbddc971b776.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}${ogImage}`,
  email: "admin@techvisr.com",
  telephone: ["+91 89043 61600", "+91 94384 33644"],
  sameAs: [
    "https://www.linkedin.com/company/techvisr",
    "https://www.facebook.com/techvisr",
    "https://www.instagram.com/techvisr",
    "https://www.youtube.com/@techvisr",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "admin@techvisr.com",
      telephone: "+91 89043 61600",
      availableLanguage: ["en"],
    },
  ],
  knowsAbout: [
    "AI software development",
    "custom software development",
    "enterprise automation",
    "cloud migration",
    "DevOps consulting",
    "quality engineering",
    "SaaS product engineering",
    "digital transformation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className={`${manrope.variable} ${plusJakartaSans.variable} ${barlow.variable} ${roboto.variable} ${inter.variable}`}>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
