"use client";

import { useEffect } from "react";
import {
  ListChecks,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiDotnet,
  SiGooglecloud,
  SiNextdotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import FaqSection from "./FaqSection";
import { JourneySection, useContactReveal } from "./FigmaContactPage";
import FigmaFooter from "./FigmaFooter";
import {
  AiTransformationSection,
  EngagementModelsSection,
  ServiceGoalsSection,
  ServiceMetricsSection,
  ServicesFinalCta,
  ServicesHeroSection,
  ServicesTechnologySection,
  StrategicCapabilitiesSection,
} from "./FigmaServicesSections";
import IndustriesSection from "./IndustriesSection";
import SiteHeader from "./SiteHeader";
import SuccessStoriesSection from "./SuccessStoriesSection";
import { asset, industries } from "./figmaContent";

const heroVideo = "/videos/blog-digital-wave.mp4";

const certificationBadges = [
  { src: "/images/contact/iso-9001.png", alt: "ISO 9001:2015 certified company" },
  { src: "/images/contact/iso-27001.png", alt: "ISO 27001 certified" },
  { src: "/images/contact/iso-27018.png", alt: "ISO 27018 certified" },
  { src: "/images/contact/iso-27701.png", alt: "ISO 27701 certified" },
];

const metrics = [
  { value: "250+", label: "Digital Products Delivered" },
  { value: "120+", label: "Technology Experts" },
  { value: "15+", label: "Industries Served" },
  { value: "40%", label: "Faster Delivery Cycles" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const goals = [
  { title: "Legacy Application Modernization" },
  { title: "AI-Powered Business Automation" },
  { title: "Scalable Cloud Infrastructure" },
  { title: "Faster Product Engineering" },
  { title: "Intelligent Data & Analytics" },
  { title: "Enterprise Quality Engineering" },
];

const technologies = [
  { name: "React", icon: SiReact, color: "#37bff8" },
  { name: "NEXTJS", icon: SiNextdotjs, color: "#161821" },
  { name: "python", icon: SiPython, color: "#3674a9" },
  { name: "Java", icon: FaJava, color: "#f37135" },
  { name: "ANGULAR", icon: SiAngular, color: "#dd0031" },
  { name: "AWS", icon: FaAws, color: "#f59f1a" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
  { name: "Microsoft .NET", icon: SiDotnet, color: "#6d4aff" },
];

const strategicCapabilities = [
  {
    number: "01",
    category: "Product Engineering",
    title: "Product Engineering & Development",
    text: "Build scalable digital products, SaaS platforms, enterprise applications, and internal tools designed for long-term growth, faster delivery, and seamless customer experiences.",
    image: "4ea568b95ec7a106ccc20840aa29914f2da8b349.jpg",
    imageAlt: "Business technology specialist presenting digital engineering systems",
    tags: ["SaaS product engineering", "Cloud-native apps", "Enterprise platforms", "Modern web and mobile"],
    href: "/contact",
  },
  {
    number: "02",
    category: "AI & Data",
    title: "AI & Data Engineering",
    text: "Transform enterprise operations with AI-powered systems, intelligent automation, and data-driven decision platforms. Our AI and data engineering services help organizations unlock operational intelligence, automate workflows, and build scalable AI ecosystems.",
    image: "b1571c9960fac24f09d2b544216786e94cb60953.jpg",
    imageAlt: "Engineer building AI-powered software and automation systems",
    tags: ["AI workflow automation", "Data platforms", "Decision intelligence", "Enterprise copilots"],
    href: "/contact",
  },
  {
    number: "03",
    category: "Cloud & Fabric",
    title: "Microsoft Fabric & Cloud Migration",
    text: "Modernize data estates, migrate workloads, and build reliable cloud foundations with governance, observability, and secure delivery practices.",
    image: "0e8d1610d3fb7aa7ec69ebb04aed5028cfedcb75.jpg",
    imageAlt: "Cloud technology interface for infrastructure modernization",
    tags: ["Cloud migration", "Microsoft Fabric", "DevOps foundations", "Observability"],
    href: "/contact",
  },
  {
    number: "04",
    category: "Quality Engineering",
    title: "Quality Engineering & Testing",
    text: "Strengthen release confidence with automation-first QA, performance validation, security-minded test strategy, and continuous quality gates across product and platform delivery.",
    image: "c242a94ccb6b0901049bda70432a2ef91aaaf6f3.jpg",
    imageAlt: "Quality engineering specialist validating software delivery systems",
    tags: ["Test automation", "Performance testing", "Release validation", "Quality governance"],
    href: "/contact",
  },
  {
    number: "05",
    category: "CTO Advisory",
    title: "Technology Consulting & CTO Advisory",
    text: "Turn business ambition into practical technology roadmaps with architecture guidance, AI adoption planning, modernization strategy, and delivery governance.",
    image: "c1f862eec620b62cfeb3d36eb5c88c530f61171a.jpg",
    imageAlt: "Technology consultant using a laptop with digital business systems",
    tags: ["Technology roadmap", "Architecture advisory", "AI adoption", "Delivery governance"],
    href: "/contact",
  },
];

const successStories = [
  {
    title: "AI Process Automation",
    stat: "65%\nFaster AI Workflows",
    text: "Reduced manual effort by 65% using AI-powered workflow and document automation systems.",
    image: "6af58d06caf280e4e47560e947391e7ca94ed0c6.jpg",
    href: "/case-studies/ai-process-automation-faster-workflows",
  },
  {
    title: "Enterprise Platform Modernization",
    stat: "5X\nFaster Cloud Delivery",
    text: "Modernized enterprise infrastructure with scalable cloud architecture, DevOps, and quality automation.",
    image: "a1436e76b433d9cd33a19386748dfa42f79f80c2.jpg",
    href: "/case-studies/enterprise-platform-modernization-cloud-delivery",
  },
  {
    title: "SaaS Product Launch",
    stat: "MVP\nLaunch in 12 Weeks",
    text: "Delivered a scalable SaaS MVP in under 12 weeks with cloud-native engineering.",
    image: "0b9cce3595b669a8aaca5c0aaee9d500cccf4424.jpg",
    href: "/case-studies/saas-product-launch-mvp-12-weeks",
  },
];

const aiTransformationCards = [
  {
    title: "Autonomous Workflow Intelligence",
    text: "Transform manual business operations into AI-driven workflows that improve efficiency and reduce repetitive effort.",
    href: "/blogs/autonomous-workflow-intelligence-enterprise-ai-automation",
  },
  {
    title: "Retrieval-Augmented AI Systems",
    text: "Build secure enterprise AI ecosystems powered by governed knowledge bases and contextual search.",
    href: "/blogs/retrieval-augmented-ai-systems-enterprise-knowledge",
  },
  {
    title: "Predictive Analytics & Decision Intelligence",
    text: "Leverage connected data platforms to improve forecasting, planning, and operational decision-making.",
    href: "/blogs/data-platforms-that-make-enterprise-ai-useful",
  },
  {
    title: "Generative AI Integration",
    text: "Integrate GenAI capabilities into products, workflows, and customer experiences with enterprise guardrails.",
    href: "/blogs/ai-native-engineering-new-blueprint-enterprise-innovation",
  },
  {
    title: "Enterprise AI Copilots",
    text: "Deploy intelligent copilots that support knowledge access, decision-making, and productivity across teams.",
    href: "/blogs/enterprise-ai-copilots-decision-knowledge-productivity",
  },
  {
    title: "Intelligent Process Automation",
    text: "Optimize operations through automation systems that connect documents, approvals, data, and business actions.",
    href: "/blogs/autonomous-workflow-intelligence-enterprise-ai-automation",
  },
];

const engagementModels = [
  {
    title: "Dedicated Teams",
    text: "Full-stack teams operating as a focused extension of your product and engineering organization.",
    icon: UsersRound,
  },
  {
    title: "Staff Augmentation",
    text: "Specialized engineers and consultants joining your roadmap with targeted expertise.",
    icon: Wrench,
  },
  {
    title: "Managed Delivery",
    text: "End-to-end product, platform, and transformation ownership with delivery governance.",
    icon: ListChecks,
  },
  {
    title: "Fixed Scope Projects",
    text: "Clearly defined product execution, quality assurance initiatives, migration, and modernization.",
    icon: Target,
  },
  {
    title: "AI Consulting Engagements",
    text: "Discovery, architecture, and adoption planning for AI-powered business systems.",
    icon: Sparkles,
  },
  {
    title: "Digital Transformation Programs",
    text: "Comprehensive modernization and automation programs across applications, cloud, AI, and operational transformation.",
    icon: Workflow,
  },
];

const faqs = [
  {
    question: "What makes Techvisr different from a traditional software development company?",
    answer:
      "Techvisr combines AI-driven engineering, intelligent automation, cloud modernization, and enterprise software delivery to help businesses accelerate innovation and build scalable digital ecosystems.",
  },
  {
    question: "Does Techvisr provide AI automation services for enterprises?",
    answer:
      "Yes. Techvisr delivers intelligent workflows, document processing, business process automation, predictive analytics, and operational automation systems for modern enterprises.",
  },
  {
    question: "Can Techvisr help modernize legacy enterprise applications?",
    answer:
      "Yes. Techvisr supports enterprise modernization through cloud migration, scalable platform transformation, DevOps automation, and digital engineering services.",
  },
  {
    question: "What industries does Techvisr work with?",
    answer:
      "Techvisr works across healthcare, BFSI, manufacturing, retail and ecommerce, logistics, EdTech, SaaS, real estate, and government sectors.",
  },
  {
    question: "Does Techvisr build scalable SaaS and web applications?",
    answer:
      "Yes. Techvisr builds SaaS products, enterprise portals, AI-powered platforms, and cloud-native applications designed for long-term growth.",
  },
  {
    question: "How does Techvisr support cloud and DevOps transformation?",
    answer:
      "Techvisr provides cloud migration, CI/CD implementation, infrastructure automation, observability, and cloud-native deployment strategy.",
  },
];

function useWhyTechvisrReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-service-reveal]")];

    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--service-reveal-delay", `${Math.min(index * 55, 220)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default function FigmaWhyTechvisrPage() {
  useWhyTechvisrReveal();
  useContactReveal();

  return (
    <div className="figma-site figma-services-page figma-why-techvisr-page">
      <SiteHeader />
      <main>
        <ServicesHeroSection heroVideo={heroVideo} showBrandLogos />
        <ServiceMetricsSection metrics={metrics} />
        <ServiceGoalsSection goals={goals} />
        <ServicesTechnologySection technologies={technologies} />
        <StrategicCapabilitiesSection asset={asset} capabilities={strategicCapabilities} />
        <SuccessStoriesSection asset={asset} stories={successStories} />
        <AiTransformationSection cards={aiTransformationCards} />
        <IndustriesSection
          asset={asset}
          industries={industries}
          ctaHref="/contact"
          ctaLabel={(_industry, _index, industryTitle) => `${industryTitle} solution`}
          spotlight
        />
        <EngagementModelsSection models={engagementModels} />
        <FaqSection faqs={faqs} showLoadMore />
        <JourneySection />
        <ServicesFinalCta heroVideo={heroVideo} />
      </main>
      <FigmaFooter
        asset={asset}
        certificationBadges={certificationBadges}
        copyrightText="Copyright © 2025 Techvisr"
        showDescription={false}
      />
    </div>
  );
}
