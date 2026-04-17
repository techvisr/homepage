import Navbar from "../../components/variants/v3/Navbar";
import Footer from "../../components/variants/v3/Footer";
import {
  ContactCards,
  HighlightPanel,
  PageHero,
} from "../../components/variants/v3/InnerPageSections";

export const metadata = {
  title: "Contact",
  description:
    "Contact Techvisr to discuss software development, AI initiatives, quality engineering, and cloud transformation requirements.",
  alternates: {
    canonical: "/contact",
  },
};

const heroStats = [
  { value: "Fast alignment", label: "Talk through scope, constraints, and the right starting point." },
  { value: "Flexible models", label: "Project delivery, advisory, or specialist engineering support." },
  { value: "Techvisr fit", label: "Best for product, modernization, AI, and quality-led initiatives." },
];

const cards = [
  {
    kicker: "Direct Contact",
    title: "Project inquiries and partnership discussions",
    description:
      "Use email when you want to share context, requirements, or a rough scope before the first call.",
    lines: ["admin@techvisr.com"],
    href: "mailto:admin@techvisr.com",
    cta: "Email Techvisr",
  },
  {
    kicker: "Typical Focus Areas",
    title: "Where conversations usually start",
    description:
      "Most enquiries are around digital product engineering, AI systems, quality automation, and cloud modernization.",
    lines: [
      "Software and product engineering",
      "AI and data systems",
      "Quality engineering and test automation",
      "Cloud migration and DevOps",
    ],
  },
  {
    kicker: "Engagement Patterns",
    title: "The kinds of work we usually support",
    description:
      "We can step in for focused discovery, complete delivery ownership, or engineering support during a high-stakes growth phase.",
    lines: [
      "MVP and product launch acceleration",
      "Platform modernization and scale-up",
      "AI adoption and intelligent automation",
      "Quality and release engineering uplift",
    ],
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageHero
          eyebrow="Contact Techvisr"
          title="Let’s plan your next product, platform, or AI initiative."
          description="The contact page now sits on the same v3 theme as the homepage and keeps the practical detail from the old version. The tone is more premium, but still straightforward enough for a serious first conversation."
          primaryLabel="Book a Consultation"
          secondaryLabel="Explore services"
          secondaryHref="/services"
          stats={heroStats}
        />

        <ContactCards items={cards} />

        <HighlightPanel
          eyebrow="What Happens Next"
          title="We help you get to a clearer execution path, not just a sales call."
          description="A good first conversation should leave you with sharper thinking on scope, delivery approach, team shape, and where the biggest risks actually are."
          bullets={[
            "Discuss goals, constraints, and delivery expectations",
            "Map the right engagement model for your stage",
            "Leave with a clearer technical and execution direction",
          ]}
          ctaLabel="Schedule the First Call"
        />
      </main>
      <Footer />
    </>
  );
}
