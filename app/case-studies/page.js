import Navbar from "../../components/variants/v3/Navbar";
import Footer from "../../components/variants/v3/Footer";
import {
  HighlightPanel,
  PageHero,
  ProofGrid,
  TestimonialGrid,
} from "../../components/variants/v3/InnerPageSections";

export const metadata = {
  title: "Case Studies",
  description:
    "Review real-world delivery outcomes from Techvisr across enterprise modernization, SaaS engineering, and AI-led transformations.",
  alternates: {
    canonical: "/case-studies",
  },
};

const heroStats = [
  { value: "50+", label: "Projects and delivery tracks shaped across product, platform, and AI." },
  { value: "12 weeks", label: "Example MVP launch timeline for fast-moving product teams." },
  { value: "65%", label: "Efficiency gains achieved in AI-led automation work." },
];

const metrics = [
  { value: "45%", label: "Faster release cycles on modernization programs." },
  { value: "10x", label: "Architecture runway designed for product growth." },
  { value: "30%", label: "Operational cost reduction on data platforms." },
  { value: "Near-zero", label: "Production defects on quality-led engagements." },
];

const studies = [
  {
    title: "Enterprise Platform Modernization",
    industry: "Enterprise digital transformation",
    challenge:
      "Legacy applications, slow deployments, and fragmented architecture were holding back operational efficiency and future scale.",
    solution:
      "Techvisr redesigned the platform architecture, modernized delivery workflows, introduced cloud and DevOps practices, and embedded quality engineering into the release process.",
    impact: ["45% faster releases", "60% scalability uplift", "Near-zero production defects"],
    capabilities: "Full-stack engineering, cloud execution, DevOps, quality automation",
  },
  {
    title: "SaaS Product Launch",
    industry: "SaaS product engineering",
    challenge:
      "A startup needed a scalable MVP fast, but without making architectural choices that would slow the next stage of growth.",
    solution:
      "We took end-to-end product ownership across architecture, frontend and backend delivery, cloud deployment, CI/CD, and validation systems.",
    impact: ["MVP in under 12 weeks", "Architecture for 10x user growth", "Reduced rework later"],
    capabilities: "Product engineering, cloud infrastructure, CI/CD, automated testing",
  },
  {
    title: "AI Process Automation",
    industry: "Enterprise operations and applied AI",
    challenge:
      "Manual document handling and knowledge retrieval were slowing down operations and creating avoidable process friction.",
    solution:
      "Techvisr built an AI-powered workflow using large language models, document processing, and search experiences connected to internal data sources.",
    impact: ["65% less manual effort", "Faster business insight access", "Better turnaround times"],
    capabilities: "Generative AI, NLP, workflow automation",
    capabilitiesLabel: "AI capabilities",
  },
  {
    title: "Decision Intelligence Platform",
    industry: "Fintech and data intelligence",
    challenge:
      "The organization lacked timely, actionable insight across operations, which reduced forecasting quality and slowed decisions.",
    solution:
      "We built a data and AI platform combining pipelines, predictive models, and real-time dashboards for leadership and operational teams.",
    impact: ["30% lower operating cost", "Improved forecasting accuracy", "Faster decisions"],
    capabilities: "Machine learning, predictive analytics, data engineering",
    capabilitiesLabel: "AI capabilities",
  },
];

const testimonials = [
  {
    text: "Techvisr took complete ownership of our platform modernization effort. The execution discipline and transparency felt like working with a strong internal engineering team.",
    role: "Head of Technology",
    org: "Enterprise Digital Platform",
    note: "Client name confidential",
  },
  {
    text: "They translated AI from concept into a real operating system for the business. We saw measurable efficiency gains quickly, not just another pilot deck.",
    role: "Product & Data Lead",
    org: "Fintech Organization",
  },
  {
    text: "The pace was strong, but what mattered more was how thoughtfully the platform was built for future scale. That combination is rare.",
    role: "Founder & CEO",
    org: "SaaS Technology Company",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageHero
          eyebrow="Delivery Proof"
          title="Proven outcomes across modernization, product engineering, and AI systems."
          description="This page now follows the stronger v3 visual system while keeping the original proof points. The result is a cleaner case-study experience that feels more credible for founders, platform owners, and enterprise buyers."
          primaryLabel="Discuss Your Project"
          secondaryLabel="Explore services"
          secondaryHref="/services"
          stats={heroStats}
        />

        <ProofGrid
          eyebrow="Selected Work"
          title="Real delivery stories with measurable business impact."
          description="From full-scale modernization to AI-driven automation, these examples show how Techvisr turns complex technical programs into operational outcomes."
          metrics={metrics}
          studies={studies}
        />

        <TestimonialGrid
          eyebrow="Client Signals"
          title="Trusted by teams that care about engineering depth and execution quality."
          description="We kept the strongest testimonial themes from the earlier site and tightened them into a more premium, easy-to-scan format."
          items={testimonials}
        />

        <HighlightPanel
          eyebrow="Let’s Build The Next One"
          title="If you need delivery proof before choosing a partner, let's talk through a project like yours."
          description="We can map your product, platform, or AI initiative to a delivery approach grounded in real outcomes, not generic promises."
          bullets={[
            "Platform modernization and release improvement",
            "MVP and product engineering acceleration",
            "Applied AI and intelligent automation delivery",
          ]}
          ctaLabel="Start a Case Study Conversation"
        />
      </main>
      <Footer />
    </>
  );
}
