import Navbar from "../../components/variants/v3/Navbar";
import Footer from "../../components/variants/v3/Footer";
import {
  PageHero,
  ServiceShowcase,
  JourneySection,
  InsightGrid,
  HighlightPanel,
} from "../../components/variants/v3/InnerPageSections";
import {
  Brain,
  Cloud,
  Layers,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "End-to-end engineering services from product development and AI to Microsoft Fabric migration, quality engineering, and CTO advisory.",
  alternates: {
    canonical: "/services",
  },
};

const serviceStats = [
  { value: "5", label: "Core service tracks across product, AI, cloud, QA, and advisory." },
  { value: "End-to-end", label: "One accountable team from roadmap to release operations." },
  { value: "Production-first", label: "Built for maintainability, governance, and scale." },
];

const services = [
  {
    title: "Product Engineering & Development",
    content:
      "Great software starts with sharper architecture and stronger delivery choices. We help teams build products that can launch now and still make sense two years later.",
    bullets: [
      "Custom web and mobile applications",
      "SaaS product engineering",
      "Enterprise software and internal tooling",
      "API design and integrations",
      "Legacy modernization",
      "Cloud-native application builds",
    ],
    audience:
      "Startups shipping an MVP, scale-ups replacing a fragile first version, and enterprise teams modernizing a core platform.",
    outcome:
      "A tested, documented product foundation with technical decisions your team can explain and extend.",
  },
  {
    title: "AI & Data Engineering",
    content:
      "AI initiatives break when the surrounding engineering is weak. We design the pipelines, integration layers, evaluation loops, and user-facing delivery needed to move from experiments to production.",
    bullets: [
      "LLM and generative AI integrations",
      "Model development and deployment",
      "Intelligent document processing",
      "Data engineering and analytics platforms",
      "Predictive systems and decision support",
      "Research and proof-of-concept validation",
    ],
    highlight: {
      label: "Microsoft ecosystem specialization:",
      text: "Deep expertise in Azure AI, Azure Machine Learning, and Microsoft Fabric for organizations already operating on the Microsoft data stack.",
    },
    outcome:
      "Working AI systems that integrate into daily operations instead of sitting as internal demos.",
  },
  {
    title: "Microsoft Fabric & Cloud Migration",
    content:
      "Migration projects succeed when architecture, tooling, and change management move together. We help teams shift data platforms and cloud operations with less disruption and more confidence.",
    bullets: [
      "Microsoft Fabric assessments and migration planning",
      "Power BI migration and optimization",
      "Azure cloud architecture",
      "DevOps transformation",
      "Infrastructure as code",
      "Containerization and release pipelines",
    ],
    highlight: {
      label: "Why teams bring us in:",
      text: "We combine Microsoft-specialist engineering capability with implementation discipline, which is especially valuable on enterprise estates where downtime and data integrity matter.",
    },
    outcome:
      "A cleaner, optimized cloud and data operating model with minimal disruption to business teams.",
  },
  {
    title: "Quality Engineering & Testing",
    content:
      "We treat quality as an operating system for delivery, not a late-stage checkpoint. That means automation, performance validation, and release confidence get built in from the first sprint.",
    bullets: [
      "Quality strategy and governance",
      "UI, API, and mobile automation",
      "Performance and load testing",
      "Security and compliance validation",
      "Continuous testing in CI/CD",
      "AI-assisted test generation",
    ],
    outcome:
      "Faster release cycles, fewer production issues, and a quality layer your internal team can keep evolving.",
  },
  {
    title: "Technology Consulting & CTO Advisory",
    content:
      "Sometimes the highest-leverage move is not adding more engineers, but bringing in sharper technical leadership. We support decision-making on architecture, operating models, and transformation priorities.",
    bullets: [
      "Architecture and technology assessments",
      "Transformation roadmaps",
      "Fractional CTO advisory",
      "Vendor and platform selection",
      "Team structure and process design",
      "Build-vs-buy and due diligence support",
    ],
    outcome:
      "Clear technical direction with fewer expensive missteps and stronger leadership alignment.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discover & define",
    content:
      "We align business goals, delivery constraints, and success metrics before execution begins.",
  },
  {
    number: "02",
    title: "Architect & plan",
    content:
      "Stacks, milestones, security considerations, and risk controls get shaped into a practical delivery path.",
  },
  {
    number: "03",
    title: "Build & integrate",
    content:
      "Engineering work runs with disciplined implementation, collaboration, and continuous visibility.",
  },
  {
    number: "04",
    title: "Validate & optimize",
    content:
      "Automation, performance, and release checks run in parallel so quality stays built in.",
  },
  {
    number: "05",
    title: "Deploy & support",
    content:
      "Launch, observability, optimization, and ongoing enablement keep the platform stable after go-live.",
  },
];

const operatingModel = [
  {
    icon: Layers,
    title: "Architecture-first execution",
    content:
      "We shape software and platforms around maintainability, scalability, and business fit before velocity takes over.",
  },
  {
    icon: Brain,
    title: "AI with delivery discipline",
    content:
      "Applied intelligence work is paired with data, integration, and governance thinking from day one.",
  },
  {
    icon: Cloud,
    title: "Cloud decisions that stay practical",
    content:
      "Infrastructure, environments, and deployment workflows are modernized without over-engineering the stack.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and security embedded",
    content:
      "Release safety, performance, and compliance validation are part of the workflow, not end-stage add-ons.",
  },
  {
    icon: Workflow,
    title: "Cross-functional delivery",
    content:
      "Discovery, product, engineering, QA, and cloud execution stay connected under one model.",
  },
  {
    icon: Wrench,
    title: "Advisory when decisions are high-stakes",
    content:
      "We step in where leadership needs support on architecture, vendors, modernization choices, or execution tradeoffs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        <PageHero
          eyebrow="End-to-end engineering services"
          title="We own the outcome, not just the task."
          description="From early architecture calls to release readiness and platform operations, Techvisr works as one accountable engineering partner. We pulled the strongest parts of the existing service offering into a cleaner v3 experience so the story now feels more premium, more structured, and easier to trust."
          primaryLabel="Talk to the team"
          secondaryLabel="See case studies"
          secondaryHref="/case-studies"
          stats={serviceStats}
        />

        <ServiceShowcase
          eyebrow="What We Deliver"
          title="Service lines built for teams that need execution and clarity together."
          description="The focus here is not just capability coverage. It is a delivery model that helps product, platform, and leadership stakeholders move faster with fewer risky handoffs."
          services={services}
        />

        <JourneySection
          eyebrow="Execution Framework"
          title="Structured delivery without the heavyweight consulting drag."
          description="We kept the substance from the earlier services page, but reframed it into a tighter journey that feels more aligned with the v3 design language."
          steps={deliverySteps}
        />

        <InsightGrid
          eyebrow="Operating Principles"
          title="How we keep delivery sharp when projects get complex."
          description="These are the habits that make engagements more predictable, more scalable, and easier for internal teams to work with."
          items={operatingModel}
        />

        <HighlightPanel
          eyebrow="Next Step"
          title="Need a partner for product engineering, AI delivery, or modernization?"
          description="We can help define the right scope, engagement model, and execution plan without forcing you into a bloated process."
          bullets={[
            "Roadmap clarity before the build starts",
            "Engineering, cloud, and QA under one delivery model",
            "A practical plan matched to your stage and internal team maturity",
          ]}
          ctaLabel="Start a Services Conversation"
        />
      </main>
      <Footer />
    </>
  );
}
