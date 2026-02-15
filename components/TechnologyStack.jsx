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
        "We craft responsive, accessible, and performance-optimized interfaces for web and mobile platforms.",
      tech: [
        "React.js",
        "Next.js",
        "Angular",
        "Vue.js",
        "TypeScript",
        "Flutter",
        "React Native",
        "HTML5",
        "CSS3",
      ],
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description:
        "Robust backend systems designed for scalability, security, and maintainability.",
      tech: [
        "Node.js",
        "Java (Spring Boot)",
        ".NET Core",
        "Python",
        "REST APIs",
        "GraphQL",
        "Microservices Architecture",
      ],
    },
    {
      icon: Brain,
      title: "AI, Machine Learning & Data Platforms",
      description:
        "Advanced intelligence systems that power automation, analytics, and predictive decision-making.",
      tech: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI APIs",
        "Data Pipelines",
        "ETL Systems",
        "Big Data Processing",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Engineering",
      description:
        "Secure, resilient, and scalable cloud-native environments.",
      tech: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Infrastructure as Code",
      ],
    },
    {
      icon: Workflow,
      title: "DevOps & Automation",
      description:
        "Accelerated delivery pipelines and operational excellence.",
      tech: [
        "Jenkins",
        "GitHub Actions",
        "Azure DevOps",
        "CI/CD Pipelines",
        "Monitoring & Observability",
        "Container Orchestration",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality Automation",
      description:
        "Comprehensive quality validation across the development lifecycle.",
      tech: [
        "Selenium",
        "Cypress",
        "Playwright",
        "Appium",
        "JUnit",
        "TestNG",
        "Performance Testing Tools",
        "API Testing Frameworks",
      ],
    },
    {
      icon: Database,
      title: "Database & Data Management",
      description:
        "Secure and optimized data systems for performance and scalability.",
      tech: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "SQL Server",
        "NoSQL Databases",
        "Data Warehousing",
      ],
    },
  ];

  return (
    <section id="technology-stack" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Modern Technology Stack. Enterprise-Grade Capabilities.
        </h2>

        <h3 className="mt-4 max-w-5xl text-lg font-medium text-gray-600">
          We leverage proven and emerging technologies to build secure,
          scalable, and high-performance digital ecosystems across industries and
          platforms.
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-4 h-7 w-7 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {category.description}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {category.tech.map((item, index) => (
                    <span key={item}>
                      <strong>{item}</strong>
                      {index < category.tech.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl bg-slate-100 px-6 py-7 text-center">
          <p className="text-lg font-semibold text-slate-800">
            <strong>Architecture-first thinking</strong>,
            <strong> security-driven development</strong>, and
            <strong> scalable infrastructure design</strong> power every solution
            we build.
          </p>
        </div>
      </div>
    </section>
  );
}
