import HeaderActionButton from "./HeaderActionButton";

export default function CapabilitiesSection({ asset, capabilities }) {
  return (
    <section
      id="services"
      className="relative isolate grid justify-items-center overflow-hidden bg-[radial-gradient(80%_48%_at_50%_0%,rgba(243,113,53,0.1),transparent_60%),linear-gradient(180deg,#ffffff_0%,#fff9f6_52%,#ffffff_100%)] px-5 py-14 md:px-8 md:py-[72px] lg:px-20 lg:py-[88px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-45 [background-image:radial-gradient(circle_at_1px_1px,rgba(243,113,53,0.24)_1px,transparent_0),linear-gradient(135deg,rgba(243,113,53,0.08)_1px,transparent_1px)] [background-size:26px_26px,52px_52px] [mask-image:radial-gradient(92%_78%_at_50%_42%,#000_0%,rgba(0,0,0,0.82)_46%,transparent_82%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto mb-10 grid max-w-[960px] gap-4 text-center md:mb-12 lg:mb-[58px]">
        <h2 className="m-0 text-[34px] font-extrabold leading-[1.1] tracking-[0] text-[#161821] md:text-[48px] lg:text-[60px]">
          Our Strategic Capabilities
        </h2>
        <p className="mx-auto m-0 max-w-[850px] text-[16px] leading-[1.42] text-[rgba(22,24,33,0.68)] md:text-[19px] md:leading-[1.34] lg:text-[22px]">
          Scale faster with AI-powered capabilities that improve efficiency, agility, and enterprise-wide decision-making.
        </p>
      </div>

      <div className="relative z-10 mb-9 grid w-full max-w-[1020px] grid-cols-1 gap-5 md:mb-11 md:grid-cols-2 md:gap-7 lg:mb-12 lg:gap-7">
        {capabilities.map((capability) => (
          <article
            className="reveal-card group relative isolate h-[250px] overflow-hidden rounded-[16px] bg-white shadow-[0_14px_32px_rgba(22,24,33,0.1)] md:h-[272px] lg:h-[282px]"
            key={capability.title}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              src={asset(capability.image)}
              alt=""
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_34%,rgba(255,255,255,0.82)_58%,#ffffff_74%,#ffffff_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[radial-gradient(76%_70%_at_88%_100%,rgba(243,113,53,0.24)_0%,rgba(243,113,53,0.12)_42%,rgba(255,255,255,0)_72%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.95)_26%,#ffffff_62%,rgba(255,233,221,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-10 grid gap-2 px-6 pb-5 text-left md:px-7 md:pb-6 lg:px-9 lg:pb-7">
              <h3 className="m-0 text-[18px] font-extrabold uppercase leading-[1.14] tracking-[0] text-[#161821] md:text-[20px] lg:text-[21px]">
                {capability.title}
              </h3>
              <p className="m-0 max-w-[450px] text-[14px] font-semibold leading-[1.34] text-[#07080c] md:text-[15px] lg:text-[15px]">
                {capability.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 min-h-[54px] border-2 px-6 text-[17px] md:min-h-[58px] md:px-7 md:text-[18px]"
      >
        Learn More
      </HeaderActionButton>
    </section>
  );
}
