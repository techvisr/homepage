import { ArrowRight } from "lucide-react";

export default function EnterpriseServicesSection({ asset, services }) {
  return (
    <section id="enterprise-services" className="enterprise-services-section">
      <header className="enterprise-services-header">
        <h2>
          Turning Operational Complexity into Digital Advantage
        </h2>
        <p>
          Modernizing enterprises with AI-powered automation and next-generation digital engineering.
        </p>
      </header>

      <div className="enterprise-services-content">
        <h3>
          Enterprise Services Built for Scale
        </h3>

        <div className="enterprise-services-grid">
          {services.map((service, index) => (
            <article
              className="enterprise-service-card reveal-card"
              key={service.title}
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <div className="enterprise-service-card-inner">
                <h4>{service.title}</h4>
                <span
                  className="service-icon-stage enterprise-service-icon"
                  style={{ "--service-icon-delay": `${index * 180}ms` }}
                >
                  <img className="service-icon-image" src={asset(service.image)} alt="" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <a className="enterprise-services-button" href="/contact">
        <span>Talk to Our Experts</span>
        <ArrowRight aria-hidden="true" size={20} strokeWidth={1.6667} />
      </a>
    </section>
  );
}
