"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightSquare } from "lucide-react";

const advantageIcons = [
  { image: "7597dd54e6f39c152c930dcd9571d9be9f290e7f.png" },
  { image: "8a352124b8b879108b2b10abd8dd8854bce272b6.png" },
  { image: "advantage-security-icon.png" },
  { image: "advantage-integration-icon.png" },
  { image: "d7287a66d8a93b50e79122c70fab2a63c6d6ba2e.png" },
  { component: ArrowUpRightSquare },
];
const INNER_DOT_RADIUS = 26;
const INNER_DOT_TRANSITION_MS = 800;

const radialItems = [
  { angle: -70, textOffsetX: 88, textOffsetY: -50 },
  { angle: -42, textOffsetX: 88, textOffsetY: -10 },
  { angle: -12, textOffsetX: 90, textOffsetY: -10 },
  { angle: 18, textOffsetX: 92, textOffsetY: 0 },
  { angle: 48, textOffsetX: 92, textOffsetY: 20 },
  { angle: 78, textOffsetX: 92, textOffsetY: 70 },
];

const innerDotAngles = [-76, -47, -16, 15, 44, 75];

const polarPosition = (angle, radius) => {
  const radians = (angle * Math.PI) / 180;

  return {
    left: `${50 + Math.cos(radians) * radius}%`,
    top: `${50 + Math.sin(radians) * radius}%`,
  };
};

const polarPoint = (angle, radius) => {
  const radians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
};

const centeredPolarPosition = (angle, radius) => ({
  ...polarPosition(angle, radius),
  transform: "translate(-50%, -50%)",
});

const activeDotStyle = (index, radius = INNER_DOT_RADIUS) => ({
  ...centeredPolarPosition(innerDotAngles[index] ?? innerDotAngles[0], radius),
});

const activeLiquidColor = "#f75a45";

const liquidTravelAngle = (fromIndex, toIndex) => {
  const from = polarPoint(innerDotAngles[fromIndex] ?? innerDotAngles[0], INNER_DOT_RADIUS);
  const to = polarPoint(innerDotAngles[toIndex] ?? innerDotAngles[0], INNER_DOT_RADIUS);
  const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;

  return ((angle % 180) + 180) % 180;
};

const calloutTextPosition = ({ angle, textOffsetX = 72, textOffsetY = 0 }, radius) => ({
  ...polarPosition(angle, radius),
  transform: `translate(${textOffsetX}px, calc(-50% + ${textOffsetY}px))`,
});

const notchStyle = (outerAngle, innerAngle, distance = "54px") => {
  const outer = polarPoint(outerAngle, 47);
  const inner = polarPoint(innerAngle, 30);
  const targetAngle = (Math.atan2(inner.y - outer.y, inner.x - outer.x) * 180) / Math.PI;
  const notchDistance = typeof distance === "number" ? `${distance}px` : distance;

  return {
    clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
    transform: `translate(-50%, -50%) rotate(${targetAngle - 180}deg) translateX(calc(${notchDistance} * -1))`,
  };
};

const inactiveTextClass = "text-[#b8b8b8]";

const textColumnStyle = (index, layout) => ({
  ...calloutTextPosition(layout, 45),
  zIndex: 10 - index,
});

const desktopTextOffsetClass = (index) => {
  if (index === 5) {
    return "w-[440px] 2xl:w-[600px]";
  }

  return "w-[440px] 2xl:w-[660px]";
};

const desktopHeadingClass = (isActive) =>
  `m-0 text-[1.85rem] font-extrabold leading-[1.08] tracking-[0] 2xl:text-[2.3rem] ${isActive ? "text-[#161821]" : inactiveTextClass}`;

const desktopCopyClass = (isActive) =>
  `m-0 mt-2 text-base font-medium leading-[1.45] 2xl:text-xl ${isActive ? "text-[#8d8d8d]" : "text-[#c6c6c6]"}`;

const outerCircleClass = (isActive, sizeClass) =>
  `pointer-events-auto absolute z-30 isolate grid ${sizeClass} cursor-pointer touch-manipulation place-items-center rounded-full border-transparent p-0 outline-none transition-[transform,box-shadow] duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
    isActive
      ? "shadow-[0_14px_28px_rgba(243,88,72,0.28)]"
      : "shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
  }`;

const outerIconClass = (isActive) => (isActive ? "text-[#f45b45]" : "text-[#8a8a8a]");
const iconFilter = (isActive) =>
  isActive
    ? "brightness(0) saturate(100%) invert(48%) sepia(82%) saturate(1558%) hue-rotate(328deg) brightness(105%) contrast(96%)"
    : "brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(0%) hue-rotate(151deg) brightness(95%) contrast(89%)";

const outerNotchClass = (isActive, sizeClass) =>
  `pointer-events-none absolute left-1/2 top-1/2 z-[-1] ${sizeClass} ${
    isActive ? "bg-[linear-gradient(135deg,#ff7238_0%,#f84845_52%,#e92f79_100%)]" : "bg-[#8a8a8a]"
  }`;

const outerCircleStyle = (layout, isActive) => {
  const position = centeredPolarPosition(layout.angle, 47);
  const ring = isActive
    ? "linear-gradient(135deg, #ff7238 0%, #f84845 48%, #e92f79 100%)"
    : "linear-gradient(#8a8a8a, #8a8a8a)";

  return {
    ...position,
    background: `linear-gradient(#f3f3f3, #f3f3f3) padding-box, ${ring} border-box`,
  };
};

export default function AdvantageSection({ asset, advantages }) {
  const sectionRef = useRef(null);
  const liquidIndexRef = useRef(0);
  const leavingTimerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [liquidIndex, setLiquidIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [liquidMotion, setLiquidMotion] = useState({ angle: 0, moving: false, id: 0 });

  const setAdvantageIndex = (index) => {
    const currentLiquidIndex = liquidIndexRef.current;

    if (currentLiquidIndex !== index) {
      liquidIndexRef.current = index;
      setLeavingIndex(currentLiquidIndex);
      setLiquidMotion((currentMotion) => ({
        angle: liquidTravelAngle(currentLiquidIndex, index),
        moving: true,
        id: currentMotion.id + 1,
      }));
      setLiquidIndex(index);

      if (leavingTimerRef.current) {
        window.clearTimeout(leavingTimerRef.current);
      }

      leavingTimerRef.current = window.setTimeout(() => {
        setLeavingIndex(null);
        setLiquidMotion((currentMotion) => ({ ...currentMotion, moving: false }));
        leavingTimerRef.current = null;
      }, INNER_DOT_TRANSITION_MS);
    }

    setActiveIndex((currentIndex) => (currentIndex === index ? currentIndex : index));
  };

  const handleKeyboardSelection = (event, index) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    setAdvantageIndex(index);
  };

  const renderAdvantageIcon = (index, isActive, sizeClass) => {
    const icon = advantageIcons[index] ?? advantageIcons[0];

    if (icon.image) {
      return (
        <img
          className={`${sizeClass} object-contain`}
          src={asset(icon.image)}
          style={{ filter: iconFilter(isActive) }}
          alt=""
          aria-hidden="true"
        />
      );
    }

    const Icon = icon.component ?? ArrowUpRightSquare;

    return <Icon className={`${outerIconClass(isActive)} ${sizeClass}`} strokeWidth={1.8} aria-hidden="true" />;
  };

  const renderInnerDots = (dotSizeClass = "size-10", bubbleSizeClass = "size-[34px]") => (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
      <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
        {leavingIndex !== null && (
          <span
            className={`absolute rounded-full ${bubbleSizeClass}`}
            style={{
              ...activeDotStyle(leavingIndex),
              background: activeLiquidColor,
              transition: `opacity ${INNER_DOT_TRANSITION_MS}ms ease`,
            }}
            aria-hidden="true"
          />
        )}
        <span
          className={`absolute ${bubbleSizeClass}`}
          style={{
            ...activeDotStyle(liquidIndex),
            transition: `left ${INNER_DOT_TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1), top ${INNER_DOT_TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1)`,
          }}
          aria-hidden="true"
        >
          <span
            key={liquidMotion.id}
            className="absolute inset-0 rounded-full"
            style={{
              background: activeLiquidColor,
              transform: `rotate(${liquidMotion.angle}deg) scaleX(${liquidMotion.moving ? 1.22 : 1}) scaleY(${liquidMotion.moving ? 0.9 : 1})`,
              transition: `transform ${INNER_DOT_TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1)`,
            }}
          />
        </span>
      </div>

      {innerDotAngles.map((angle, index) => {
        const isSelected = index === liquidIndex;
        const title = advantages[index]?.[0] ?? `advantage ${index + 1}`;

        return (
          <button
            className={`pointer-events-auto absolute z-10 rounded-full border-[5px] shadow-[0_4px_10px_rgba(0,0,0,0.26)] outline-none transition-[background,border-color,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-tap-highlight-color:transparent] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
              isSelected ? "border-[#f75a45]" : "border-white"
            } ${dotSizeClass}`}
            style={{
              ...centeredPolarPosition(angle, INNER_DOT_RADIUS),
              backgroundColor: isSelected ? activeLiquidColor : "#8e8e8e",
            }}
            key={angle}
            type="button"
            onMouseEnter={() => setAdvantageIndex(index)}
            onFocus={() => setAdvantageIndex(index)}
            onClick={() => setAdvantageIndex(index)}
            aria-label={`Show ${title}`}
            aria-pressed={isSelected}
          />
        );
      })}
    </div>
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    let frame = 0;

    const updateActiveAdvantage = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 0.999);
      const nextIndex = Math.min(advantages.length - 1, Math.floor(progress * advantages.length));

      setAdvantageIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveAdvantage);
    };

    updateActiveAdvantage();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [advantages.length]);

  useEffect(() => () => {
    if (leavingTimerRef.current) {
      window.clearTimeout(leavingTimerRef.current);
    }
  }, []);

  return (
    <section
      id="why-techvisr-"
      ref={sectionRef}
      className="advantage-section relative scroll-mt-24 overflow-hidden md:scroll-mt-28 lg:min-h-0"
      aria-label="The Techvisr Advantage"
    >
      <div className="relative isolate grid content-start justify-items-center px-4 pb-14 pt-20 sm:px-6 sm:pb-16 sm:pt-20 md:px-8 md:pb-20 md:pt-24 lg:px-12 lg:py-24 2xl:px-20">
        <img
          className="advantage-partner-wave"
          src="/images/our-story-wave.svg"
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        <h2 className="relative z-10 m-0 max-w-[760px] text-center text-[32px] font-extrabold leading-[1.06] tracking-[0] text-[#161821] sm:text-5xl md:text-[3.4rem] lg:text-[4rem] xl:max-w-none xl:whitespace-nowrap xl:text-[4.5rem]">
          The Techvisr Advantage
        </h2>

        <div className="relative z-10 mt-10 w-full max-w-[1180px] md:mt-12 xl:mt-6 xl:h-[660px] 2xl:h-[725px]">
          <div className="relative mx-auto aspect-square w-full max-w-[min(320px,82vw)] overflow-visible min-[420px]:max-w-[min(360px,86vw)] sm:max-w-[430px] md:max-w-[600px] lg:max-w-[720px] xl:hidden">
            <div className="absolute inset-[5%] rounded-full border-[3px] border-[#8f8f8f]" />
            <div className="absolute inset-[12%] rounded-full border border-white bg-[radial-gradient(circle_at_50%_45%,#f5f5f5_0%,#ebebeb_56%,#f4f4f4_100%)] shadow-[inset_0_0_28px_rgba(0,0,0,0.04)]" />
            <div className="absolute inset-[24%] grid place-items-center rounded-full border border-white bg-[radial-gradient(circle_at_44%_38%,#ffffff_0%,#f4f4f4_68%,#ededed_100%)] shadow-[0_16px_28px_rgba(0,0,0,0.16)]">
              <div className="relative h-[96px] w-[140px] min-[380px]:h-[112px] min-[380px]:w-[160px] md:h-[128px] md:w-[190px] lg:h-[136px] lg:w-[204px]">
                <img
                  className="absolute left-1/2 top-0 h-[60px] w-auto -translate-x-1/2 object-contain min-[380px]:h-[70px] md:h-[78px] lg:h-[82px]"
                  src={asset("0b24c7c2d782973d27bd119c9b63dbddc971b776.png")}
                  alt=""
                />
                <img
                  className="absolute bottom-0 left-1/2 h-[25px] w-auto -translate-x-1/2 object-contain min-[380px]:h-[28px] md:h-[32px] lg:h-[34px]"
                  src={asset("TechvisrV4a.png")}
                  alt=""
                />
              </div>
            </div>

            {renderInnerDots("size-5 min-[380px]:size-6 md:size-9 lg:size-10", "size-4 min-[380px]:size-[18px] md:size-8 lg:size-[34px]")}
            {advantages.map(([title], index) => {
              const isActive = index === activeIndex;
              const layout = radialItems[index];

              return (
                <button
                  className={outerCircleClass(
                    isActive,
                    "size-[58px] border-[6px] min-[380px]:size-[64px] min-[380px]:border-[7px] sm:size-[86px] sm:border-[9px] md:size-[104px] md:border-[10px] lg:size-[112px]",
                  )}
                  style={outerCircleStyle(layout, isActive)}
                  key={title}
                  type="button"
                  onPointerEnter={() => setAdvantageIndex(index)}
                  onPointerDown={() => setAdvantageIndex(index)}
                  onMouseEnter={() => setAdvantageIndex(index)}
                  onFocus={() => setAdvantageIndex(index)}
                  onClick={() => setAdvantageIndex(index)}
                  aria-label={`Show ${title}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={outerNotchClass(
                      isActive,
                      "h-4 w-[18px] [--advantage-notch-distance:36px] min-[380px]:h-[18px] min-[380px]:w-5 min-[380px]:[--advantage-notch-distance:38px] sm:[--advantage-notch-distance:49px] md:h-[22px] md:w-[24px] md:[--advantage-notch-distance:60px] lg:h-[24px] lg:w-[26px] lg:[--advantage-notch-distance:64px]",
                    )}
                    style={notchStyle(layout.angle, innerDotAngles[index], "var(--advantage-notch-distance, 38px)")}
                  />
                  {renderAdvantageIcon(index, isActive, "size-12 md:size-16 lg:size-[72px]")}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-5 md:gap-7 xl:mt-0 xl:block">
            {advantages.map(([title, text], index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  className={`reveal-card grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-xl border bg-white/92 p-3 text-left shadow-[0_8px_20px_rgba(22,24,33,0.07)] transition-[border-color,box-shadow,transform] duration-300 sm:gap-4 sm:rounded-2xl sm:p-4 md:p-5 xl:hidden ${
                    isActive
                      ? "border-[#f37135]/45 shadow-[0_16px_38px_rgba(243,113,53,0.13)]"
                      : "border-[rgba(22,24,33,0.1)]"
                  }`}
                  key={title}
                  style={{ "--reveal-delay": `${index * 55}ms` }}
                  onMouseEnter={() => setAdvantageIndex(index)}
                  onFocus={() => setAdvantageIndex(index)}
                  onClick={() => setAdvantageIndex(index)}
                  onKeyDown={(event) => handleKeyboardSelection(event, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${title}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border-2 sm:size-11 ${
                      isActive ? "border-[#f37135] text-[#f45b45]" : "border-[#dedede] text-[#8a8a8a]"
                    }`}
                    aria-hidden="true"
                  >
                    {renderAdvantageIcon(index, isActive, "size-5 sm:size-6")}
                  </span>
                  <span className="min-w-0">
                    <h3 className="m-0 text-base font-extrabold leading-[1.12] tracking-[0] text-[#161821] sm:text-xl md:text-[1.65rem]">
                      {title}
                    </h3>
                    <p className="m-0 mt-1 text-xs font-medium leading-5 text-[#777] sm:mt-2 sm:text-[15px] sm:leading-7 md:text-[17px]">
                      {text}
                    </p>
                  </span>
                </article>
              );
            })}
          </div>

          <div className="relative mx-auto hidden h-full w-[920px] xl:block 2xl:w-[1120px]">
            <div className="absolute left-0 top-[58px] aspect-square w-[470px] 2xl:left-[34px] 2xl:top-[66px] 2xl:w-[500px]">
              <div className="absolute inset-[5%] rounded-full border-[3px] border-[#8f8f8f]" />
              <div className="absolute inset-[12%] rounded-full border border-white bg-[radial-gradient(circle_at_50%_45%,#f5f5f5_0%,#ebebeb_56%,#f4f4f4_100%)] shadow-[inset_0_0_30px_rgba(0,0,0,0.04)]" />
              <div className="absolute inset-[24%] grid place-items-center rounded-full border border-white bg-[radial-gradient(circle_at_44%_38%,#ffffff_0%,#f4f4f4_68%,#ededed_100%)] shadow-[0_16px_30px_rgba(0,0,0,0.14)]">
                <div className="relative h-[136px] w-[204px] 2xl:h-[144px] 2xl:w-[214px]">
                  <img
                    className="absolute left-1/2 top-0 h-[82px] w-auto -translate-x-1/2 object-contain 2xl:h-[88px]"
                    src={asset("0b24c7c2d782973d27bd119c9b63dbddc971b776.png")}
                    alt=""
                  />
                  <img
                    className="absolute bottom-0 left-1/2 h-[34px] w-auto -translate-x-1/2 object-contain 2xl:h-[36px]"
                    src={asset("TechvisrV4a.png")}
                    alt=""
                  />
                </div>
              </div>

              {renderInnerDots()}
            </div>

            <div className="pointer-events-none absolute left-0 top-[58px] z-20 aspect-square w-[470px] overflow-visible 2xl:left-[34px] 2xl:top-[66px] 2xl:w-[500px]">
              {advantages.map(([title, text], index) => {
                const isActive = index === activeIndex;
                const layout = radialItems[index];

                return (
                  <article key={title}>
                    <button
                      className={outerCircleClass(isActive, "size-[92px] border-[10px] 2xl:size-[104px] 2xl:border-[11px]")}
                      style={outerCircleStyle(layout, isActive)}
                      type="button"
                      onPointerEnter={() => setAdvantageIndex(index)}
                      onPointerDown={() => setAdvantageIndex(index)}
                      onMouseEnter={() => setAdvantageIndex(index)}
                      onFocus={() => setAdvantageIndex(index)}
                      onClick={() => setAdvantageIndex(index)}
                      aria-label={`Show ${title}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={outerNotchClass(isActive, "h-[22px] w-[24px] 2xl:h-[24px] 2xl:w-[26px]")}
                        style={notchStyle(layout.angle, innerDotAngles[index], 54)}
                      />
                      {renderAdvantageIcon(index, isActive, "size-16 2xl:size-[72px]")}
                    </button>
                    <div
                      className={`pointer-events-auto absolute ${desktopTextOffsetClass(index)} cursor-pointer transition-[opacity,color] duration-700 ${isActive ? "opacity-100" : "opacity-82"}`}
                      style={textColumnStyle(index, layout)}
                      onMouseEnter={() => setAdvantageIndex(index)}
                      onFocus={() => setAdvantageIndex(index)}
                      onClick={() => setAdvantageIndex(index)}
                      onKeyDown={(event) => handleKeyboardSelection(event, index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Show ${title}`}
                      aria-pressed={isActive}
                    >
                      <h3 className={desktopHeadingClass(isActive)}>
                        {title}
                      </h3>
                      <p className={desktopCopyClass(isActive)}>
                        {text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
