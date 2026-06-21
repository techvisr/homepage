import HeaderActionButton from "./HeaderActionButton";

export default function EnterpriseServicesSection({ asset, services }) {
  return (
    <section
      id="enterprise-services"
      className="relative isolate -mt-px grid justify-items-center overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#F3F3F3_50%)] px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 md:px-8 md:pb-20 md:pt-16 lg:px-12 lg:pb-24 lg:pt-20 2xl:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(90%_48%_at_50%_-6%,rgba(243,113,53,0.14),rgba(243,243,243,0.62)_44%,rgba(255,255,255,0)_72%),radial-gradient(72%_52%_at_50%_108%,rgba(239,65,105,0.05),transparent_68%),linear-gradient(180deg,rgba(255,255,255,0)_0%,#F3F3F3_50%,#ffffff_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(243,243,243,0.86)_46%,rgba(243,243,243,0)_100%)] sm:h-40 lg:h-48"
      />
      <img
        aria-hidden="true"
        className="enterprise-separator-wave pointer-events-none absolute left-1/2 top-[-118px] -z-10 h-[360px] w-[220vw] max-w-none -translate-x-1/2 object-fill opacity-[0.16] mix-blend-multiply sm:top-[-150px] sm:h-[450px] sm:w-[190vw] md:w-[165vw] lg:top-[-230px] lg:h-[660px] lg:w-[132vw] 2xl:w-[112vw]"
        src="/images/story-wave-pattern.svg"
        alt=""
        draggable={false}
      />
      <div className="relative z-10 mx-auto mb-8 grid max-w-[1040px] gap-4 text-center sm:mb-10 md:mb-11 md:gap-5 lg:mb-12">
        <h2 className="m-0 max-w-[980px] text-3xl font-extrabold leading-[1.12] tracking-[0] text-[#161821] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.625rem] 2xl:text-[4rem]">
          Turning Operational Complexity into Digital Advantage
        </h2>
        <p className="mx-auto m-0 max-w-[820px] text-base leading-7 text-[rgba(22,24,33,0.68)] md:text-lg md:leading-8 lg:text-xl">
          Modernizing enterprises with AI-powered automation and next-generation digital engineering.
        </p>
        <h3 className="m-0 mt-5 text-2xl font-bold leading-[1.18] tracking-[0] text-[#161821] sm:text-[1.7rem] md:mt-7 md:text-3xl lg:mt-8 lg:text-[2.15rem]">
          Enterprise Services Built for Scale
        </h3>
      </div>

      <div className="relative z-10 mb-8 grid w-full max-w-[1120px] grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:mb-11 md:gap-6 lg:mb-12 lg:grid-cols-6 lg:gap-6 xl:gap-7">
        {services.map((service, index) => (
          <article
            className={`reveal-card flex min-h-[104px] flex-col items-center justify-center gap-2.5 rounded-xl border border-[rgba(22,24,33,0.08)] bg-white px-3 py-4 text-center shadow-[0_10px_24px_rgba(22,24,33,0.07)] min-[420px]:min-h-[118px] sm:min-h-[142px] sm:gap-4 md:min-h-[178px] md:gap-5 md:rounded-[14px] md:px-5 md:py-6 lg:min-h-[216px] lg:gap-6 lg:rounded-2xl lg:px-6 lg:py-7 lg:shadow-[0_18px_46px_rgba(22,24,33,0.08)] xl:min-h-[236px] ${
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "min-[420px]:col-span-2 min-[420px]:mx-auto min-[420px]:w-[calc((100%_-_0.75rem)/2)] md:w-[calc((100%_-_1.5rem)/2)] lg:col-span-2 lg:col-start-4 lg:mx-0 lg:w-auto"
            }`}
            key={service.title}
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <h4 className="order-1 m-0 whitespace-pre-wrap text-[12px] font-bold leading-[1.24] tracking-[0] text-[#161821] min-[360px]:text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-[19px]">
              {service.title}
            </h4>
            <span
              className="service-icon-stage order-2 grid aspect-square w-12 place-items-center min-[360px]:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-[108px]"
              style={{ "--service-icon-delay": `${index * 180}ms` }}
            >
              <img className="service-icon-image aspect-square w-full object-contain" src={asset(service.image)} alt="" />
            </span>
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 border-2"
      >
        Talk to Our Experts
      </HeaderActionButton>
    </section>
  );
}
