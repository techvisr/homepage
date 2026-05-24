"use client";

import {
  CloudUpload,
  Compass,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Plus,
  Puzzle,
  Settings,
  Twitter,
  UserRoundCog,
} from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";
import CapabilitiesSection from "./CapabilitiesSection";
import DeliveryFrameworkSection from "./DeliveryFrameworkSection";
import EnterpriseServicesSection from "./EnterpriseServicesSection";
import HeroSection from "./HeroSection";
import IndustriesSection from "./IndustriesSection";
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
    title: "Cloud & Infrastructure Modernisation",
    text: "Modernize legacy systems with secure cloud migration services and scalable infrastructure.",
    image: "0e8d1610d3fb7aa7ec69ebb04aed5028cfedcb75.jpg",
  },
  {
    title: "Quality & Performance Engineering",
    text: "Deliver reliable applications with automated testing and continuous quality validation.",
    image: "c242a94ccb6b0901049bda70432a2ef91aaaf6f3.jpg",
  },
  {
    title: "Product & Platform Engineering",
    text: "Develop high-performance digital platforms and SaaS applications built for scale.",
    image: "cd44bcb2f0ca0effba08148a80957341325df818.jpg",
  },
  {
    title: "UI/UX Strategy & Experience Design",
    text: "Deliver reliable applications with automated testing and continuous quality validation.",
    image: "12dd5529610a67368202640a2c58fd8bfcf6ff0b.jpg",
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
    text: "Create intelligent commerce ecosystems that connect customer experiences, inventory visibility, marketing workflows, and operational execution across modern digital retail businesses.",
    bullets: [
      "Personalized customer engagement",
      "Connected ecommerce operations",
      "AI-assisted retail workflow optimization",
    ],
    image: "8c9ee62226affce2c6889f89dea377072a20965f.jpg",
  },
];

const advantages = [
  ["Engineering-Led Delivery", "Engineering execution built for scale and business impact"],
  ["AI-First Innovation", "AI-driven automation focused on operational efficiency"],
  ["End-to-End Technology Expertise", "End-to-end delivery from strategy to optimization"],
  ["Industry-Focused Execution", "Cross-industry transformation expertise across enterprise ecosystems"],
  ["Scalable Engagement Models", "Flexible engagement models for startups and enterprises"],
  ["Enterprise-Grade Security", "ISO-aligned delivery frameworks with enterprise-grade governance"],
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
      "TechVisr is an AI software development company and digital transformation company that combines AI-driven engineering, intelligent automation, cloud modernization, and enterprise software development to help businesses accelerate innovation, improve operational efficiency, and build scalable digital ecosystems with faster and more reliable delivery.",
  },
  { question: "Does Techvisr provide AI automation services for enterprises?" },
  { question: "Can Techvisr help modernize legacy enterprise applications?" },
  { question: "What industries does Techvisr work with?" },
  { question: "Does Techvisr build scalable SaaS and web applications?" },
  { question: "How does Techvisr support cloud and DevOps transformation?" },
  { question: "Does Techvisr offer mobile app development services?" },
  { question: "Can Techvisr integrate AI into existing business systems?" },
];

function SectionTitle({ children, light = false }) {
  return <h2 className={`figma-section-title ${light ? "figma-section-title--light" : ""}`}>{children}</h2>;
}

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

        <section id="why-techvisr-" className="advantage-section section-light">
          <SectionTitle>The TechVisr Advantage</SectionTitle>
          <div className="advantage-orbit">
            <div className="advantage-brand">
              <img src={asset("0b24c7c2d782973d27bd119c9b63dbddc971b776.png")} alt="" />
              <img src={asset("2b505ce3b912ab094138fc521132f921a2ec04b8.png")} alt="Techvisr" />
            </div>
            <div className="advantage-list">
              {advantages.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blogs" className="resources-section section-light">
          <SectionTitle>Resources</SectionTitle>
          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card reveal-card" key={resource.title}>
                <img src={asset(resource.image)} alt="" />
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <a href="/case-studies">View Blog</a>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section section-light">
          <div className="faq-layout">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    {faq.question}
                    <Plus size={22} />
                  </summary>
                  {faq.answer ? <p>{faq.answer}</p> : null}
                </details>
              ))}
              <HeaderActionButton>Load more</HeaderActionButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="figma-footer">
        <div className="figma-footer__brand">
          <img src={asset("58c76896b6e7aaa2c5446fbb80905b6b30ed7778.png")} alt="Techvisr" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <span>Copyright ⓒ 2026 Techvisr</span>
        </div>

        <nav>
          <a href="/services">Services</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/why-techvisr">Why Techvisr?</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <div className="figma-footer__contact">
          <h3>Get in touch</h3>
          <a href="mailto:techvisr@gmail.com">
            <Mail size={18} />
            techvisr@gmail.com
          </a>
          <div>
            <Facebook size={22} />
            <Twitter size={22} />
            <Instagram size={22} />
            <Linkedin size={22} />
          </div>
          <span>Terms And Condition | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
