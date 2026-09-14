import styles from "./PartnersSection.module.css";

const partners = [
  { name: "Reliance Industries", image: "/images/partners/reliance.webp", width: 378, height: 262, style: "reliance" },
  { name: "Rupantar", image: "/images/partners/rupantar.webp", width: 408, height: 287, style: "rupantar" },
  { name: "Arrow Foundry", image: "/images/partners/arrow-foundry.webp", width: 386, height: 208, style: "arrow" },
  { name: "Human AI Literacy Mission", image: "/images/partners/human-ai-literacy-mission.webp", width: 288, height: 288, style: "hailm" },
  { name: "Flipkart", image: "/images/partners/flipkart.png", width: 5000, height: 5000, style: "flipkart" },
];

export default function PartnersSection({ compact = false }) {
  return (
    <section id="partners" className={`${styles.section} ${compact ? styles.compact : ""}`} aria-label="Our partners">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Our partners</p>
          {!compact && <h2>Building what comes next.<br /><span>Together.</span></h2>}
        </div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul className={styles.logos} key={copy} aria-label={copy === 0 ? "Partner organisations" : undefined} aria-hidden={copy === 1 ? true : undefined}>
                {partners.map((partner) => (
                  <li className={styles.partner} key={partner.name}>
                    <div className={`${styles.logoFrame} ${styles[partner.style]}`}>
                      <img src={partner.image} alt={partner.name} width={partner.width} height={partner.height} loading="lazy" decoding="async" />
                    </div>
                    <span className={styles.name} aria-hidden="true">{partner.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
