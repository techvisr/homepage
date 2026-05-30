import { ChevronDown } from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";

const metrics = [
  {
    desktopClass:
      "left-[10%] top-0 w-[92px] rotate-[-8deg] sm:left-[18%] sm:w-[104px] md:left-[5%] md:w-[132px] lg:left-[6%] lg:top-1 lg:w-[124px] xl:left-[3%] xl:w-[158px] 2xl:left-0 2xl:w-[185px] min-[1800px]:w-[205px]",
    compactClass: "w-[46px] rotate-[-8deg] min-[360px]:w-[52px] sm:w-[68px] md:w-[84px]",
    motionClass: "hero-drift-down-right",
    image: "/images/hero-metric-launches.png",
    alt: "3X faster product launches",
  },
  {
    desktopClass:
      "left-[4%] top-[128px] w-[174px] rotate-[5deg] sm:left-[16%] sm:top-[136px] sm:w-[200px] md:left-[18%] md:top-[104px] md:w-[250px] lg:left-[24%] lg:top-[104px] lg:w-[220px] xl:left-[19%]  xl:w-[300px] 2xl:w-[360px] min-[1800px]:w-[400px]",
    compactClass: "w-[80px] rotate-[5deg] min-[360px]:w-[92px] sm:w-[126px] md:w-[158px]",
    motionClass: "hero-drift-down-right",
    image: "/images/hero-metric-reliability.png",
    alt: "99.9% infrastructure reliability",
  },
  {
    desktopClass:
      "right-[4%] top-[130px] w-[168px] rotate-[-7deg] sm:right-[14%] sm:top-[138px] sm:w-[194px] md:left-auto md:right-[18%] md:top-[102px] md:w-[242px] lg:right-[24%] lg:top-[104px] lg:w-[214px] xl:right-[19%] xl:right-[17%] xl:w-[290px] 2xl:w-[342px] min-[1800px]:w-[380px]",
    compactClass: "w-[78px] rotate-[-7deg] min-[360px]:w-[90px] sm:w-[124px] md:w-[154px]",
    motionClass: "hero-drift-up-left",
    image: "/images/hero-metric-velocity.png",
    alt: "40% faster release velocity",
  },
  {
    desktopClass:
      "right-[10%] top-[12px] w-[92px] rotate-[2deg] sm:right-[18%] sm:w-[104px] md:right-[7%] md:w-[132px] lg:right-[6%] lg:top-[54px] lg:w-[120px] xl:right-[3%] xl:w-[154px] 2xl:right-0 2xl:w-[181px] min-[1800px]:w-[200px]",
    compactClass: "w-[46px] rotate-[2deg] min-[360px]:w-[52px] sm:w-[68px] md:w-[84px]",
    motionClass: "hero-drift-down-right-soft",
    image: "/images/hero-metric-efficiency.png",
    alt: "65% operational efficiency gains",
  },
];

export default function HeroSection() {
  return (
    <section className="relative max-w-[100vw] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center brightness-[0.68] saturate-[0.95]"
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
        className="pointer-events-none absolute inset-x-0 top-[286px] z-30 mx-auto hidden h-[235px] w-full max-w-[900px] select-none lg:block xl:top-[318px] xl:h-[280px] xl:max-w-[1100px] 2xl:top-[360px] 2xl:h-[310px] 2xl:max-w-[1180px] min-[1800px]:top-[390px] min-[1800px]:h-[340px] min-[1800px]:max-w-[1320px]"
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
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(75%_62%_at_50%_24%,rgba(10,9,16,0.08)_0%,rgba(4,4,7,0.48)_62%,rgba(0,0,0,0.78)_100%),linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.26)_46%,rgba(0,0,0,0.52)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.42)_0%,transparent_24%,transparent_76%,rgba(0,0,0,0.4)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-40 grid min-h-[clamp(400px,52svh,480px)] content-start px-4 pb-4 pt-6 min-[360px]:px-5 sm:px-8 sm:pt-10 md:min-h-[clamp(500px,62svh,600px)] md:pb-6 md:pt-12 lg:min-h-[clamp(540px,72svh,620px)] lg:px-12 lg:pt-14 xl:min-h-[clamp(620px,70svh,700px)] xl:px-16 xl:pt-16 2xl:min-h-[clamp(700px,70svh,780px)] 2xl:px-24 2xl:pt-20 min-[1800px]:min-h-[clamp(760px,82svh,860px)] min-[1800px]:pt-24">
        <div className="mx-auto grid w-full min-w-0 max-w-[1040px] justify-items-center gap-3 text-center sm:gap-5 md:gap-6 lg:gap-6">
          <h1 className="m-0 max-w-full text-[1.62rem] font-extrabold leading-[1.04] tracking-[0] [font-family:var(--font-figma-display),Barlow,sans-serif] [text-shadow:0_8px_32px_rgba(0,0,0,0.38)] motion-safe:animate-[heroReveal_800ms_ease_both] min-[360px]:text-[1.78rem] sm:text-[2.45rem] md:text-[3.1rem] lg:max-w-[900px] lg:text-[3.35rem] lg:leading-[1] xl:text-[4rem] 2xl:text-[4.6rem]">
            AI-Native Engineering for Modern Digital Enterprises
          </h1>
          <p className="m-0 max-w-[38rem] text-xs leading-[1.42] [text-shadow:0_5px_22px_rgba(0,0,0,0.42)] motion-safe:animate-[heroReveal_800ms_120ms_ease_both] min-[360px]:text-[13px] sm:text-[15px] md:max-w-[46rem] md:text-base lg:max-w-[52rem] lg:text-base lg:leading-[1.32] xl:text-lg 2xl:text-xl">
            A digital transformation company focused on building scalable software, intelligent
            automation, and cloud-driven ecosystems for modern enterprises.
          </p>
          <HeaderActionButton
            light
            className="max-w-full rounded-xl !min-h-11 !px-5 !py-3 text-sm font-semibold motion-safe:animate-[heroReveal_800ms_220ms_ease_both] sm:text-base xl:rounded-[14px]"
          >
            Start Your Transformation
          </HeaderActionButton>
        </div>

        <div
          className="pointer-events-none mx-auto mt-3 grid w-full min-w-0 max-w-[184px] grid-cols-[auto_auto] items-center justify-center gap-x-2.5 gap-y-1.5 select-none min-[360px]:max-w-[216px] min-[360px]:gap-x-3 sm:max-w-[320px] md:mt-5 md:max-w-[600px] md:grid-cols-[auto_auto_auto_auto] md:gap-x-4 md:gap-y-0 lg:hidden"
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
          className="mx-auto mt-2 hidden animate-[scrollBounce_1.6s_ease-in-out_infinite] items-center gap-2 text-[10px] font-medium tracking-[0.08em] text-white/90 lg:absolute lg:bottom-4 lg:left-1/2 lg:mt-0 lg:inline-flex lg:-translate-x-1/2"
          href="#our-story"
        >
          <span>SCROLL</span>
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
}
