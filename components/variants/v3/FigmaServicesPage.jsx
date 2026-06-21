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
import FigmaFooter from "./FigmaFooter";
import {
  EngagementModelsSection,
  FeaturedServiceSection,
  ServiceGoalsSection,
  ServiceMetricsSection,
  ServicesFinalCta,
  ServicesHeroSection,
  ServicesTechnologySection,
} from "./FigmaServicesSections";
import IndustriesSection from "./IndustriesSection";
import ResourcesSection from "./ResourcesSection";
import SiteHeader from "./SiteHeader";
import SuccessStoriesSection from "./SuccessStoriesSection";
import { blogPosts } from "./blogContent";
import { asset, industries } from "./figmaContent";

const heroVideo = "/videos/blog-digital-wave.mp4";

const certificationBadges = [
  { src: "/images/contact/iso-9001.png", alt: "ISO 9001:2015 certified company" },
  { src: "/images/contact/iso-27001.png", alt: "ISO 27001 certified" },
  { src: "/images/contact/iso-27018.png", alt: "ISO 27018 certified" },
  { src: "/images/contact/iso-27701.png", alt: "ISO 27701 certified" },
];

const serviceMetrics = [
  {
    value: "250+",
    label: "Digital Products Delivered",
  },
  {
    value: "120+",
    label: "Technology Experts",
  },
  {
    value: "15+",
    label: "Industries Served",
  },
  {
    value: "40%",
    label: "Faster Delivery Cycles",
  },
  {
    value: "98%",
    label: "Client Satisfaction Rate",
  },
];

const serviceGoals = [
  {
    title: "Legacy Application Modernization",
  },
  {
    title: "AI-Powered Business Automation",
  },
  {
    title: "Scalable Cloud Infrastructure",
  },
  {
    title: "Faster Product Engineering",
  },
  {
    title: "Intelligent Data & Analytics",
  },
  {
    title: "Enterprise Quality Engineering",
  },
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

const featuredService = {
  title: "Product Engineering & Development",
  summary:
    "Build scalable digital products and enterprise platforms designed for long-term growth, faster delivery, and seamless customer experiences. From SaaS product engineering to legacy modernization, we help businesses accelerate innovation through agile development, cloud-native architecture, and AI-driven engineering solutions tailored for modern enterprises.",
  image: "4ea568b95ec7a106ccc20840aa29914f2da8b349.jpg",
  imageAlt: "Business technology specialist presenting digital engineering systems",
  bullets: [
    "Custom web and mobile applications",
    "SaaS product engineering",
    "Enterprise software and internal tooling",
    "AI strategy and integration",
    "Legacy modernization",
    "Cloud-native application builds",
  ],
};

const successStories = [
  {
    title: "AI Process Automation",
    stat: "65%\nFaster AI Workflows",
    text: "Reduced manual effort by 65% using AI-powered workflow and document automation systems.",
    image: "6af58d06caf280e4e47560e947391e7ca94ed0c6.jpg",
    href: "/case-studies",
  },
  {
    title: "Enterprise Platform Modernization",
    stat: "5X\nFaster Cloud Delivery",
    text: "Modernized enterprise infrastructure with scalable cloud architecture, DevOps, and quality automation.",
    image: "a1436e76b433d9cd33a19386748dfa42f79f80c2.jpg",
    href: "/case-studies",
  },
  {
    title: "SaaS Product Launch",
    stat: "MVP\nLaunch in 12 Weeks",
    text: "Delivered a scalable SaaS MVP in under 12 weeks with cloud-native engineering.",
    image: "0b9cce3595b669a8aaca5c0aaee9d500cccf4424.jpg",
    href: "/case-studies",
  },
];

const aiTransformationBlogSlugs = [
  "autonomous-workflow-intelligence-enterprise-ai-automation",
  "enterprise-ai-copilots-decision-knowledge-productivity",
  "retrieval-augmented-ai-systems-enterprise-knowledge",
];

const aiTransformationCards = aiTransformationBlogSlugs
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter(Boolean);

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
      "Techvisr is an AI software development company and digital transformation company that combines AI-driven engineering, intelligent automation, cloud modernization, and enterprise software development to help businesses accelerate innovation, improve operational efficiency, and build scalable digital ecosystems with faster and more reliable delivery.",
  },
  {
    question: "Does Techvisr provide AI automation services for enterprises?",
    answer:
      "Yes. Techvisr delivers AI automation services and AI integration services including intelligent workflows, enterprise AI solutions, document processing, business process automation, predictive analytics, and operational automation systems designed for modern enterprises.",
  },
  {
    question: "Can Techvisr help modernize legacy enterprise applications?",
    answer:
      "Yes. Techvisr specializes in enterprise software development, cloud migration services, infrastructure modernization, digital engineering services, and scalable platform transformation to help enterprises modernize legacy systems and migrate toward cloud-native architectures.",
  },
  {
    question: "What industries does Techvisr work with?",
    answer:
      "Techvisr works with organizations across healthcare, BFSI, manufacturing, retail & ecommerce, logistics, EdTech, SaaS, real estate, and government sectors, delivering industry-focused digital transformation solutions, AI consulting services, and enterprise technology solutions.",
  },
  {
    question: "Does Techvisr build scalable SaaS and web applications?",
    answer:
      "Yes. As a custom software development company and web application development company, Techvisr builds scalable SaaS product development solutions, enterprise portals, AI-powered platforms, and cloud-native digital applications designed for long-term business growth.",
  },
  {
    question: "Does Techvisr offer mobile app development services?",
    answer:
      "Yes. Techvisr provides mobile app development company services focused on secure, scalable, and user-centric mobile applications for startups, enterprises, and customer-facing digital platforms across iOS, Android, and cross-platform ecosystems.",
  },
  {
    question: "How does Techvisr support cloud and DevOps transformation?",
    answer:
      "Techvisr provides cloud migration services, DevOps consulting services, CI/CD implementation, infrastructure automation, cloud-native deployment strategies, and enterprise cloud solutions to improve agility, scalability, and deployment efficiency.",
  },
  {
    question: "Can Techvisr integrate AI into existing business systems?",
    answer:
      "Yes. Techvisr offers AI integration services and AI consulting services that connect intelligent automation, analytics, and machine learning capabilities with enterprise workflows, operational systems, customer platforms, and business applications.",
  },
];

function useServiceReveal() {
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

export default function FigmaServicesPage() {
  useServiceReveal();

  return (
    <div className="figma-site figma-services-page">
      <SiteHeader />

      <main>
        <ServicesHeroSection heroVideo={heroVideo} />
        <ServiceMetricsSection metrics={serviceMetrics} />
        <ServiceGoalsSection goals={serviceGoals} />
        <ServicesTechnologySection technologies={technologies} />
        <FeaturedServiceSection asset={asset} service={featuredService} />

        <div>
          <SuccessStoriesSection asset={asset} stories={successStories} />
        </div>

        <div>
          <IndustriesSection
            asset={asset}
            industries={industries}
            ctaHref="/contact"
            ctaLabel={(_industry, _index, industryTitle) => `${industryTitle} solution`}
            spotlight
          />
        </div>

        <div>
          <ResourcesSection
            asset={asset}
            resources={aiTransformationCards}
            sectionId="ai-transformation"
            title="AI-Native Enterprise Transformation"
            description="Empowering enterprises with intelligent automation, AI-driven decision systems, and scalable digital capabilities built for the future of business."
            ctaLabel="View Blog"
            cardVariant="blog"
          />
        </div>

        <EngagementModelsSection models={engagementModels} />

        <div>
          <FaqSection faqs={faqs} showLoadMore />
        </div>

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
