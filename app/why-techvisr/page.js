import Navbar from "../../components/variants/v3/Navbar";
import Footer from "../../components/variants/v3/Footer";
import {
  HighlightPanel,
  InsightGrid,
  PageHero,
} from "../../components/variants/v3/InnerPageSections";
import {
  FlaskConical,
  Handshake,
  Layers,
  Shield,
  TrendingUp,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Why Choose Techvisr",
  description:
    "Discover why organizations choose Techvisr for engineering excellence, research-driven innovation, and scalable technology delivery.",
};

const heroStats = [
  { value: "Engineering-first", label: "Technical leadership ahead of sales-led storytelling." },
  { value: "Research-aware", label: "Applied innovation grounded in practical delivery." },
  { value: "Long-term", label: "Systems built for maintainability, not short-term patchwork." },
];

const points = [
  {
    icon: Layers,
    title: "Full-stack engineering ownership",
    content:
      "We connect architecture, development, QA, deployment, and optimization under one accountable team instead of spreading responsibility across disconnected vendors.",
  },
  {
    icon: Wrench,
    title: "Engineering-first, not sales-first",
    content:
      "Delivery decisions are guided by engineers and architects who care about scale, maintainability, and real-world operating conditions.",
  },
  {
    icon: FlaskConical,
    title: "Research-driven innovation",
    content:
      "We bring emerging technology thinking into the work, but only where it can translate into useful business and engineering outcomes.",
  },
  {
    icon: Shield,
    title: "Quality and security by design",
    content:
      "Performance, release safety, compliance thinking, and validation are embedded early so systems stay dependable as they grow.",
  },
  {
    icon: TrendingUp,
    title: "Scalable and future-ready solutions",
    content:
      "We design systems that can evolve with new business goals, team structures, and technology requirements without forcing a rewrite too early.",
  },
  {
    icon: Handshake,
    title: "Transparent collaboration and governance",
    content:
      "Clear communication, milestone-based visibility, and structured ways of working help internal teams stay informed and aligned.",
  },
];

export default function WhyTechvisrPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageHero
          eyebrow="Why Teams Choose Techvisr"
          title="A sharper engineering partner for teams that care about quality, scale, and trust."
          description="This page keeps the original 'why us' messaging, but the presentation is now more aligned with the v3 direction: cleaner hierarchy, better spacing, and a more premium consulting-meets-product feel."
          primaryLabel="Book a Consultation"
          secondaryLabel="View case studies"
          secondaryHref="/case-studies"
          stats={heroStats}
        />

        <InsightGrid
          eyebrow="What Makes Us Different"
          title="The partnership qualities organizations usually feel after the first few weeks."
          description="We are not trying to look bigger than we are. The goal is clearer: combine real engineering capability, practical innovation, and a delivery style that is easy to work with."
          items={points}
        />

        <HighlightPanel
          eyebrow="Partnership Fit"
          title="Best suited for teams that want fewer handoffs and stronger technical accountability."
          description="If you are tired of fragmented execution, unclear ownership, or delivery partners who optimize for decks over outcomes, Techvisr is designed to feel different."
          bullets={[
            "One partner across product, cloud, AI, and QA",
            "Technical decisions explained in plain language",
            "Execution models that respect internal teams and business constraints",
          ]}
          ctaLabel="Talk to Techvisr"
        />
      </main>
      <Footer />
    </>
  );
}
