import {
  Monitor,
  Server,
  Brain,
  Cloud,
  Workflow,
  ShieldCheck,
  Database,
} from "lucide-react";

export default function TechnologyStack() {
  const categories = [
    {
      icon: Monitor,
      title: "Frontend & Experience Engineering",
      description:
        "Responsive, accessible, and performance-oriented interfaces for customer, product, and internal user experiences.",
      tech: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "Flutter", "React Native"],
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description:
        "Secure backend systems and integration layers designed for maintainability and reliable scale.",
      tech: ["Node.js", "Java", ".NET Core", "Python", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      icon: Brain,
      title: "AI, ML & Data Platforms",
      description:
        "Applied intelligence systems powering automation, decision support, and advanced digital workflows.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI APIs", "ETL Systems", "Data Pipelines"],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description:
        "Resilient cloud environments and platform foundations built for scale, portability, and governance.",
      tech: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "IaC"],
    },
    {
      icon: Workflow,
      title: "DevOps & Automation",
      description:
        "Delivery acceleration through modern pipelines, observability, and repeatable operational workflows.",
      tech: ["GitHub Actions", "Azure DevOps", "Jenkins", "CI/CD", "Monitoring", "Container Orchestration"],
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality Automation",
      description:
        "Comprehensive validation frameworks across release reliability, performance, and regression control.",
      tech: ["Playwright", "Cypress", "Selenium", "Appium", "JUnit", "TestNG", "API Testing"],
    },
    {
      icon: Database,
      title: "Database & Data Management",
      description:
        "Optimized data systems for transactional performance, analytics readiness, and operational resilience.",
      tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "Data Warehousing", "NoSQL"],
    },
  ];

  return (
    <section id="technology-stack" className="pb-20 md:pb-24">
      <div className="section-frame">
        <div className="max-w-4xl">
          <p className="eyebrow">Technology Stack</p>
          <h2 className="section-title mt-4">
            Modern platforms and enterprise-grade engineering capabilities.
          </h2>
          <p className="section-copy mt-4">
            Our stack choices are driven by architecture fit, team maintainability, and delivery practicality rather than trend-chasing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="soft-card rounded-[30px] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="glass-panel mt-10 rounded-[30px] px-6 py-7 text-center">
          <p className="text-lg font-medium leading-8 text-slate-700">
            Architecture-first thinking, secure delivery practices, and scalable infrastructure design sit underneath every solution we build.
          </p>
        </div>
      </div>
    </section>
  );
}
