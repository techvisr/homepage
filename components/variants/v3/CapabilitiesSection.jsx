import HeaderActionButton from "./HeaderActionButton";

export default function CapabilitiesSection({ asset, capabilities }) {
  return (
    <section
      id="services"
      className="capabilities-section relative isolate grid justify-items-center overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-20"
    >
      <img
        className="capabilities-wave"
        src="/images/capabilities-wave.svg"
        alt=""
        aria-hidden="true"
        draggable="false"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(243,113,53,0.18)_1px,transparent_0),linear-gradient(135deg,rgba(243,113,53,0.06)_1px,transparent_1px)] [background-size:26px_26px,52px_52px] [mask-image:radial-gradient(92%_78%_at_50%_42%,#000_0%,rgba(0,0,0,0.58)_46%,transparent_82%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto mb-9 grid max-w-[960px] gap-4 text-center md:mb-12 lg:mb-14">
        <h2 className="m-0 text-[45px] font-semibold leading-none tracking-[0] text-[#161821] [font-family:var(--font-figma-display),Barlow,sans-serif] max-[820px]:text-[clamp(26px,7.3vw,32px)] max-[820px]:leading-[1.14]">
          Our Strategic Capabilities
        </h2>
        <p className="mx-auto m-0 max-w-[850px] text-[18px] leading-[1.5] text-[#5b6170] max-[820px]:text-[clamp(13px,3.6vw,15px)]">
          Scale faster with AI-powered capabilities that improve efficiency, agility, and enterprise-wide decision-making.
        </p>
      </div>

      <div className="relative z-10 mb-8 grid w-full max-w-[1120px] grid-cols-1 gap-4 md:mb-11 md:gap-6 lg:mb-12 lg:grid-cols-2">
        {capabilities.map((capability, index) => (
          <article
            className="capability-card reveal-card group"
            key={capability.title}
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <img
              className="capability-card-image"
              src={asset(capability.image)}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="capability-card-copy">
              <span className="capability-card-accent" aria-hidden="true" />
              <h3>
                {capability.title}
              </h3>
              <p>
                {capability.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="capabilities-button relative z-10 border-2"
      >
        Learn More
      </HeaderActionButton>
    </section>
  );
}
