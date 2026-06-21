"use client";

import { CloudUpload, Compass, Puzzle, Settings, UserRoundCog } from "lucide-react";
import AdvantageSection from "./AdvantageSection";
import CapabilitiesSection from "./CapabilitiesSection";
import DeliveryFrameworkSection from "./DeliveryFrameworkSection";
import EnterpriseServicesSection from "./EnterpriseServicesSection";
import FaqSection from "./FaqSection";
import FigmaFooter from "./FigmaFooter";
import HeroSection from "./HeroSection";
import IndustriesSection from "./IndustriesSection";
import ResourcesSection from "./ResourcesSection";
import SiteHeader from "./SiteHeader";
import StorySection from "./StorySection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import { asset, industries } from "./figmaContent";

const enterpriseServices = [
  {
    title: "Product Engineering & Development",
    image: "7597dd54e6f39c152c930dcd9571d9be9f290e7f.png",
  },
  {
    title: "AI & Data\nEngineering",
    image: "8a352124b8b879108b2b10abd8dd8854bce272b6.png",
  },
  {
    title: "Microsoft Fabric & Cloud Migration",
    image: "9e4e90e1f05111d4c568ca9cac9b3cd1876bff2a.png",
  },
  {
    title: "Quality Engineering & Testing",
    image: "c655d9de26b62707191070d4f121c7a172112846.png",
  },
  {
    title: "Technology Consulting & CTO Advisory",
    image: "d7287a66d8a93b50e79122c70fab2a63c6d6ba2e.png",
  },
];

const capabilities = [
  {
    title: "Custom Software Solutions",
    text: "Build scalable custom software tailored for enterprise operations and business growth.",
    image: "4ea568b95ec7a106ccc20840aa29914f2da8b349.jpg",
  },
  {
    title: "AI & Intelligent Automation",
    text: "Streamline workflows with AI automation services and intelligent business systems.",
    image: "8b2bd57fd3043d12b5de385b51394be6f1d6b225.jpg",
  },
  {
    title: "Cloud & Infrastructure Modernization",
    text: "Modernize legacy systems with secure cloud migration services and scalable infrastructure.",
    image: "0e8d1610d3fb7aa7ec69ebb04aed5028cfedcb75.jpg",
  },
  {
    title: "Product & Platform Engineering",
    text: "Develop high-performance digital platforms and SaaS applications built for scale.",
    image: "cd44bcb2f0ca0effba08148a80957341325df818.jpg",
  },
  {
    title: "UI/UX Strategy & Experience Design",
    text: "Create intuitive digital experiences that improve engagement and usability.",
    image: "12dd5529610a67368202640a2c58fd8bfcf6ff0b.jpg",
  },
  {
    title: "Quality & Performance Engineering",
    text: "Deliver reliable applications with automated testing and continuous quality validation.",
    image: "c242a94ccb6b0901049bda70432a2ef91aaaf6f3.jpg",
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand business priorities, operational gaps, and transformation goals",
    icon: Compass,
  },
  {
    number: "02",
    title: "Strategize",
    text: "Define scalable architecture, technology roadmap, and execution planning",
    icon: Puzzle,
  },
  {
    number: "03",
    title: "Engineer",
    text: "Build modern applications, AI systems, and cloud-native platforms",
    icon: UserRoundCog,
  },
  {
    number: "04",
    title: "Deploy",
    text: "Streamline releases with automation, monitoring, and scalable infrastructure",
    icon: CloudUpload,
  },
  {
    number: "05",
    title: "Optimize",
    text: "Continuously improve performance, workflows, and digital experiences",
    icon: Settings,
  },
];

const successStories = [
  {
    title: "AI Process Automation",
    stat: "65%\nFaster AI Workflows",
    text: "Reduced manual effort by 65% using AI-powered workflow and document automation systems.",
    image: "6af58d06caf280e4e47560e947391e7ca94ed0c6.jpg",
  },
  {
    title: "Enterprise Platform Modernization",
    stat: "5X\nFaster Cloud Delivery",
    text: "Modernized enterprise infrastructure with scalable cloud architecture, DevOps, and quality automation.",
    image: "a1436e76b433d9cd33a19386748dfa42f79f80c2.jpg",
  },
  {
    title: "SaaS Product Launch",
    stat: "MVP\nLaunch in 12 Weeks",
    text: "Delivered a scalable SaaS MVP in under 12 weeks with cloud-native engineering.",
    image: "0b9cce3595b669a8aaca5c0aaee9d500cccf4424.jpg",
  },
];

const advantages = [
  ["Engineering-Led Delivery", "Engineering execution built for scale and business impact"],
  ["AI-First Innovation", "AI-driven automation focused on operational efficiency"],
  ["Enterprise-Grade Security", "ISO-aligned delivery frameworks with enterprise-grade governance"],
  ["End-to-End Technology Expertise", "End-to-end delivery from strategy to optimization"],
  ["Industry-Focused Execution", "Cross-industry transformation expertise across enterprise ecosystems"],
  ["Scalable Engagement Models", "Flexible engagement models for startups and enterprises"],
];

const resources = [
  {
    title: "AI-Native Engineering: The New Blueprint for Enterprise Innovation",
    text: "How businesses are embedding AI into products, operations, and decision-making at scale.",
    image: "/images/blogs/ai-native-engineering.png",
    imageAlt: "AI-native engineering architecture with data streams and modular product systems",
    slug: "ai-native-engineering-new-blueprint-enterprise-innovation",
  },
  {
    title: "Cloud Modernization Strategies for Scalable Growth",
    text: "Key considerations for building resilient, future-ready cloud ecosystems.",
    image: "/images/blogs/cloud-modernization.png",
    imageAlt: "Cloud modernization architecture transforming legacy systems into scalable cloud services",
    slug: "cloud-modernization-strategies-scalable-business-growth",
  },
  {
    title: "Why Custom Software Development Still Wins in the AI Era",
    text: "Why tailored software still matters for unique workflows, integration, and growth.",
    image: "/images/blogs/custom-software-ai-era.png",
    imageAlt: "Custom software platform modules connected with AI-assisted workflow logic",
    slug: "custom-software-development-still-wins-ai-era",
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

export default function FigmaHomepage() {
  return (
    <div className="figma-site">
      <SiteHeader />

      <main>
        <HeroSection />

        <StorySection />

        <EnterpriseServicesSection asset={asset} services={enterpriseServices} />
        <CapabilitiesSection asset={asset} capabilities={capabilities} />
        <DeliveryFrameworkSection steps={frameworkSteps} />
        <SuccessStoriesSection asset={asset} stories={successStories} />
        <IndustriesSection asset={asset} industries={industries} />

        <AdvantageSection asset={asset} advantages={advantages} />

        <ResourcesSection asset={asset} resources={resources} />

        <FaqSection faqs={faqs} />
      </main>

      <FigmaFooter asset={asset} />
    </div>
  );
}
