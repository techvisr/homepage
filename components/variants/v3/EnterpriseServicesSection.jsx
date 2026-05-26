import HeaderActionButton from "./HeaderActionButton";

export default function EnterpriseServicesSection({ asset, services }) {
  return (
    <section
      id="enterprise-services"
      className="relative grid justify-items-center overflow-hidden bg-[radial-gradient(85%_48%_at_50%_0%,rgba(243,113,53,0.11),transparent_58%),radial-gradient(78%_52%_at_50%_100%,rgba(239,65,105,0.08),transparent_64%),linear-gradient(180deg,#ffffff_0%,#fff9f6_48%,#ffffff_100%)] px-5 py-14 md:px-8 md:py-[72px] lg:px-20 lg:py-[88px]"
    >
      <div className="relative z-10 mx-auto mb-9 grid max-w-[1040px] gap-4 text-center md:mb-11 md:gap-5 lg:mb-12">
        <h2 className="m-0 max-w-[980px] text-[32px] font-extrabold leading-[1.1] tracking-[0] text-[#161821] md:text-[44px] lg:text-[58px]">
          Turning Operational Complexity Into Digital Advantage
        </h2>
        <p className="mx-auto m-0 max-w-[820px] text-[16px] leading-[1.42] text-[rgba(22,24,33,0.68)] md:text-[19px] md:leading-[1.34] lg:text-[22px]">
          Modernizing enterprises with AI-powered automation and next-generation digital engineering.
        </p>
        <h3 className="m-0 mt-7 text-[26px] font-bold leading-[1.18] tracking-[0] text-[#161821] md:mt-8 md:text-[31px] lg:mt-9 lg:text-[36px]">
          Enterprise Services Built For Scale
        </h3>
      </div>

      <div className="relative z-10 mb-9 grid w-full max-w-[1020px] grid-cols-1 gap-4 min-[560px]:grid-cols-2 md:mb-11 md:gap-6 lg:mb-12 lg:grid-cols-6 lg:gap-7">
        {services.map((service, index) => (
          <article
            className={`reveal-card flex min-h-[148px] flex-col items-center justify-center gap-4 rounded-[12px] border border-[rgba(22,24,33,0.08)] bg-white px-3 py-5 text-center shadow-[0_14px_34px_rgba(22,24,33,0.07)] md:min-h-[190px] md:gap-5 md:rounded-[14px] md:px-5 md:py-6 lg:min-h-[240px] lg:gap-6 lg:rounded-2xl lg:px-6 lg:py-7 lg:shadow-[0_18px_46px_rgba(22,24,33,0.08)] ${
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "min-[560px]:col-span-2 min-[560px]:mx-auto min-[560px]:w-[calc((100%_-_1rem)/2)] md:w-[calc((100%_-_1.5rem)/2)] lg:col-span-2 lg:col-start-4 lg:mx-0 lg:w-auto"
            }`}
            key={service.title}
          >
            <h4 className="order-1 m-0 whitespace-pre-wrap text-[14px] font-bold leading-[1.28] tracking-[0] text-[#161821] min-[360px]:text-[15px] md:text-[17px] lg:text-[19px]">
              {service.title}
            </h4>
            <img className="order-2 aspect-square w-[58px] object-contain md:w-[82px] lg:w-[108px]" src={asset(service.image)} alt="" />
          </article>
        ))}
      </div>

      <HeaderActionButton
        variant="outline"
        size="default"
        className="relative z-10 min-h-[54px] border-2 px-6 text-[17px] md:min-h-[58px] md:px-7 md:text-[18px]"
      >
        Talk to Our Experts
      </HeaderActionButton>
    </section>
  );
}
