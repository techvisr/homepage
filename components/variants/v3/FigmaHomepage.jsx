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

const asset = (name) => `/images/figma-raw/${name}`;

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

const industries = [
  {
    label: "Healthcare",
    title: "Healthcare",
    text: "Transform healthcare operations with intelligent digital systems that improve patient engagement, automate clinical workflows, and enhance operational efficiency while maintaining secure, scalable, and compliance-ready healthcare infrastructure across the organization.",
    bullets: [
      "AI-powered patient engagement automation",
      "Intelligent clinical workflow optimization",
      "Secure healthcare data management systems",
    ],
    image: "44eef76118a2e61b3f6b1705908efcef3b3f153c.jpg",
  },
  {
    label: "BFSI",
    title: "BFSI",
    text: "Accelerate financial transformation with AI-powered systems that enhance customer experiences, automate operational workflows, strengthen compliance, and improve risk management across modern banking and financial service ecosystems.",
    bullets: [
      "Intelligent fraud detection systems",
      "AI-driven financial workflow automation",
      "Secure compliance and cloud modernization",
    ],
    image: "2653406c9e50a92f4a57e8687e25219ff85e590d.jpg",
  },
  {
    label: "Retail &\nEcommerce",
    title: "Retail & Ecommerce",
    text: "Drive personalized shopping experiences and scalable commerce operations with intelligent digital platforms that improve customer engagement, automate workflows, and optimize retail performance across omnichannel ecosystems.",
    bullets: [
      "AI-powered customer engagement platforms",
      "Ecommerce modernization and automation",
      "Intelligent inventory optimization systems",
    ],
    image: "8c9ee62226affce2c6889f89dea377072a20965f.jpg",
  },
  {
    label: "EdTech",
    title: "EdTech",
    text: "Build scalable digital learning ecosystems that improve student engagement, personalize learning experiences, and streamline educational operations with intelligent AI-powered education technology solutions.",
    bullets: [
      "Personalized AI-driven learning platforms",
      "Scalable LMS and mobile solutions",
      "Intelligent student analytics systems",
    ],
    image: "c1f862eec620b62cfeb3d36eb5c88c530f61171a.jpg",
  },
  {
    label: "Government IT\nServices",
    title: "Government IT Services",
    text: "Modernize public sector operations with secure digital platforms that streamline citizen services, automate workflows, and improve operational transparency across government ecosystems and infrastructure.",
    bullets: [
      "Citizen-centric digital transformation solutions",
      "Secure workflow automation systems",
      "Intelligent public service modernization",
    ],
    image: "0e8d1610d3fb7aa7ec69ebb04aed5028cfedcb75.jpg",
  },
  {
    label: "SaaS & Technology\nStartups",
    title: "SaaS & Technology Startups",
    text: "Accelerate product innovation and scalable growth with AI-powered engineering solutions that streamline development workflows, optimize deployment cycles, and improve operational agility.",
    bullets: [
      "Cloud-native product engineering solutions",
      "AI-powered development automation",
      "DevOps acceleration and scalability systems",
    ],
    image: "0b9cce3595b669a8aaca5c0aaee9d500cccf4424.jpg",
  },
  {
    label: "Manufacturing",
    title: "Manufacturing",
    text: "Optimize industrial operations with intelligent automation systems that improve production visibility, streamline manufacturing workflows, and enhance operational efficiency across connected industrial environments.",
    bullets: [
      "Intelligent manufacturing automation systems",
      "Predictive operational analytics solutions",
      "Scalable industrial workflow optimization",
    ],
    image: "a1436e76b433d9cd33a19386748dfa42f79f80c2.jpg",
  },
  {
    label: "Logistics",
    title: "Logistics",
    text: "Streamline supply chain operations with intelligent logistics systems that improve operational visibility, automate workflows, and optimize delivery performance across complex logistics networks.",
    bullets: [
      "AI-powered logistics optimization solutions",
      "Real-time supply chain visibility",
      "Intelligent warehouse automation systems",
    ],
    image: "5237973d508c91db229995638f0aa07f3743cacd.png",
  },
  {
    label: "Real Estate",
    title: "Real Estate",
    text: "Digitize real estate operations with intelligent platforms that improve customer engagement, automate property workflows, and streamline document management across modern real estate ecosystems.",
    bullets: [
      "Smart property management platforms",
      "AI-powered customer engagement systems",
      "Intelligent document automation solutions",
    ],
    image: "c73de4d7495850eec11d832ed7447c4972c283cf.png",
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
    title: "How AI is Reshaping Enterprise Operations",
    text: "Exploring the next generation of intelligent business automation and AI-driven workflows.",
    image: "b1571c9960fac24f09d2b544216786e94cb60953.jpg",
  },
  {
    title: "Cloud Modernization Strategies for Scalable Growth",
    text: "Key considerations for building resilient and future-ready cloud ecosystems.",
    image: "8c9ee62226affce2c6889f89dea377072a20965f.jpg",
  },
  {
    title: "Engineering High-Performance Digital Products",
    text: "Best practices for accelerating software delivery without compromising scalability or quality.",
    image: "c1f862eec620b62cfeb3d36eb5c88c530f61171a.jpg",
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
