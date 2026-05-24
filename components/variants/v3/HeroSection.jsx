import { ChevronDown } from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";

const metrics = [
  {
    desktopClass:
      "left-[10%] top-0 w-[92px] rotate-[-8deg] sm:left-[18%] sm:w-[104px] md:left-[5%] md:w-[132px] lg:left-[4%] lg:top-3 lg:w-[138px] xl:left-0 xl:w-[185px]",
    compactClass: "w-[78px] rotate-[-8deg] min-[360px]:w-[92px] md:w-[108px]",
    motionClass: "hero-drift-down-right",
    image: "/images/hero-metric-launches.png",
    alt: "3X faster product launches",
  },
  {
    desktopClass:
      "left-[4%] top-[128px] w-[174px] rotate-[5deg] sm:left-[16%] sm:top-[136px] sm:w-[200px] md:left-[18%] md:top-[104px] md:w-[250px] lg:left-[18%] lg:top-[118px] lg:w-[250px] xl:w-[360px]",
    compactClass: "w-[142px] rotate-[5deg] min-[360px]:w-[174px] md:w-[210px]",
    motionClass: "hero-drift-down-right",
    image: "/images/hero-metric-reliability.png",
    alt: "99.9% infrastructure reliability",
  },
  {
    desktopClass:
      "right-[4%] top-[130px] w-[168px] rotate-[-7deg] sm:right-[14%] sm:top-[138px] sm:w-[194px] md:left-auto md:right-[11%] md:top-[102px] md:w-[242px] lg:right-[18%] lg:top-[116px] lg:w-[240px] xl:right-[17%] xl:w-[342px]",
    compactClass: "w-[138px] rotate-[-7deg] min-[360px]:w-[168px] md:w-[204px]",
    motionClass: "hero-drift-up-left",
    image: "/images/hero-metric-velocity.png",
    alt: "40% faster release velocity",
  },
  {
    desktopClass:
      "right-[10%] top-[12px] w-[92px] rotate-[2deg] sm:right-[18%] sm:w-[104px] md:right-[7%] md:w-[132px] lg:right-[4%] lg:top-[68px] lg:w-[136px] xl:right-0 xl:w-[181px]",
    compactClass: "w-[78px] rotate-[2deg] min-[360px]:w-[92px] md:w-[108px]",
    motionClass: "hero-drift-down-right-soft",
    image: "/images/hero-metric-efficiency.png",
    alt: "65% operational efficiency gains",
  },
];

export default function HeroSection() {
  return (
    <section className="relative max-w-[100vw] overflow-hidden bg-black text-white lg:min-h-[790px] xl:min-h-[860px]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        src="/videos/hero-background.mp4"
      >
        <source src="/videos/hero-background.mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-x-0 top-[390px] z-30 mx-auto hidden h-[300px] w-full max-w-[980px] select-none lg:block xl:top-[430px] xl:h-[330px] xl:max-w-[1180px]"
        aria-label="Business outcome metrics"
      >
        {metrics.map((metric, index) => (
          <div
            className={`pointer-events-none absolute select-none ${metric.desktopClass} ${metric.motionClass}`}
            key={metric.alt}
            style={{ "--delay": `${index * 180}ms` }}
          >
            <img
              className="pointer-events-none h-auto w-full max-w-none select-none drop-shadow-[0_16px_30px_rgba(0,0,0,0.36)]"
              src={metric.image}
              alt={metric.alt}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.36)_34%,rgba(0,0,0,0.22)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-40 grid content-start px-3 pb-5 pt-[72px] min-[360px]:px-6 md:pb-6 md:pt-[76px] lg:min-h-[790px] lg:px-16 lg:pt-[86px] xl:min-h-[860px] xl:px-[100px]">
        <div className="mx-auto grid w-full min-w-0 max-w-[1120px] justify-items-center gap-6 text-center md:gap-[30px]">
          <h1 className="m-0 max-w-full text-[34px] font-extrabold leading-[1.03] tracking-[0] [font-family:var(--font-figma-display),Barlow,sans-serif] [text-shadow:0_8px_32px_rgba(0,0,0,0.32)] motion-safe:animate-[heroReveal_800ms_ease_both] min-[360px]:text-[38px] sm:text-[52px] lg:max-w-[1120px] lg:text-[70px] lg:leading-[0.99] xl:text-[84px]">
            AI-Native Engineering for Modern Digital Enterprises
          </h1>
          <p className="m-0 max-w-full text-[15px] leading-[1.32] [text-shadow:0_5px_22px_rgba(0,0,0,0.38)] motion-safe:animate-[heroReveal_800ms_120ms_ease_both] min-[360px]:text-[16px] sm:text-[21px] sm:leading-[1.22] lg:max-w-[908px] xl:text-[27px] xl:leading-[1.18]">
            A digital transformation company focused on building scalable software, intelligent
            automation, and cloud-driven ecosystems for modern enterprises.
          </p>
          <HeaderActionButton
            light
            className="h-12 max-w-full rounded-[13px] px-4 text-[15px] font-semibold motion-safe:animate-[heroReveal_800ms_220ms_ease_both] min-[360px]:h-[50px] min-[360px]:px-6 min-[360px]:text-[16px] xl:h-[52px] xl:rounded-[14px] xl:text-[17px]"
          >
            Start Your Transformation
          </HeaderActionButton>
        </div>

        <div
          className="pointer-events-none mx-auto mt-7 grid w-full min-w-0 max-w-[294px] grid-cols-[auto_auto] items-center justify-center gap-x-4 gap-y-3 select-none min-[360px]:max-w-[360px] min-[360px]:gap-x-5 md:mt-8 md:max-w-[760px] md:grid-cols-[auto_auto_auto_auto] md:gap-x-4 md:gap-y-0 lg:hidden"
          aria-label="Business outcome metrics"
        >
          {metrics.map((metric, index) => (
            <div
              className={`pointer-events-none select-none ${metric.compactClass} ${metric.motionClass}`}
              key={`compact-${metric.alt}`}
              style={{ "--delay": `${index * 180}ms` }}
            >
              <img
                className="pointer-events-none h-auto w-full max-w-none select-none drop-shadow-[0_16px_30px_rgba(0,0,0,0.36)]"
                src={metric.image}
                alt={metric.alt}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <a
          className="mx-auto mt-4 inline-flex animate-[scrollBounce_1.6s_ease-in-out_infinite] items-center gap-2 text-[13px] font-medium tracking-[0.08em] text-white lg:absolute lg:bottom-5 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
          href="#our-story"
        >
          <span>SCROLL</span>
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
}
