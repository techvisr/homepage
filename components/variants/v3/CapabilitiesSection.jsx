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
        <h2 className="m-0 text-3xl font-extrabold leading-[1.12] tracking-[0] text-[#161821] sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
          Our Strategic Capabilities
        </h2>
        <p className="mx-auto m-0 max-w-[850px] text-base leading-7 text-[rgba(22,24,33,0.68)] md:text-lg md:leading-8 lg:text-xl">
          Scale faster with AI-powered capabilities that improve efficiency, agility, and enterprise-wide decision-making.
        </p>
      </div>

      <div className="relative z-10 mb-8 grid w-full max-w-[1120px] grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 md:mb-11 md:gap-6 lg:mb-12 lg:gap-7">
        {capabilities.map((capability, index) => (
          <article
            className="reveal-card group relative isolate min-h-[178px] overflow-hidden rounded-xl bg-white shadow-[0_10px_24px_rgba(22,24,33,0.1)] min-[380px]:min-h-[188px] sm:min-h-[224px] md:min-h-[260px] md:rounded-2xl lg:min-h-[282px]"
            key={capability.title}
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              src={asset(capability.image)}
              alt=""
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_34%,rgba(255,255,255,0.82)_58%,#ffffff_74%,#ffffff_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[radial-gradient(76%_70%_at_88%_100%,rgba(243,113,53,0.24)_0%,rgba(243,113,53,0.12)_42%,rgba(255,255,255,0)_72%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.95)_26%,#ffffff_62%,rgba(255,233,221,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-10 grid gap-1.5 px-4 pb-4 text-left sm:px-5 md:px-7 md:pb-6 lg:px-8 lg:pb-7">
              <h3 className="m-0 text-[13px] font-extrabold uppercase leading-[1.16] tracking-[0] text-[#161821] min-[360px]:text-sm sm:text-base md:text-xl lg:text-[21px]">
                {capability.title}
              </h3>
              <p className="m-0 max-w-[450px] text-[12px] font-semibold leading-[1.35] text-[#07080c] min-[360px]:text-[13px] sm:text-sm md:text-[15px]">
                {capability.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 border-2"
      >
        Learn More
      </HeaderActionButton>
    </section>
  );
}
