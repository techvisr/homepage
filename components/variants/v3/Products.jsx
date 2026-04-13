import { Database, Code2, FileCheck, Clock, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Database,
    title: "AI-DataLens",
    desc: "Unlock data-driven insights with AI-powered conversational analytics.",
  },
  {
    icon: Code2,
    title: "EmbedFAST",
    desc: "Effortlessly embed Power BI into your apps without the complexity of writing your own code.",
  },
  {
    icon: FileCheck,
    title: "CertyFAST",
    desc: "Streamline Power BI model development with automated error detection, documentation, and DAX measure formatting.",
  },
  {
    icon: Clock,
    title: "LoadFAST",
    desc: "Identify performance bottlenecks in your Power BI reports and optimize the capacity setup for your infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "MigrateFAST",
    desc: "Simplify data and reporting platform migration to Microsoft Fabric with AI-powered tools for faster and easier transitions.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Explore our products
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          Solutions designed to improve and streamline your operations
        </p>

        <div
          className="mt-12 grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-5"
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-4 h-8 w-8 text-red-600" />

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>

                <p className="mb-6 text-sm text-gray-600">{product.desc}</p>

                <a
                  href="#"
                  className="text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  Learn more &gt;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
