"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightSquare, BrainCircuit, GlobeLock, LockKeyhole, PanelsTopLeft, Settings } from "lucide-react";

const advantageIcons = [PanelsTopLeft, BrainCircuit, LockKeyhole, BrainCircuit, Settings, ArrowUpRightSquare];
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

const notchStyle = (outerAngle, innerAngle, distance) => {
  const outer = polarPoint(outerAngle, 47);
  const inner = polarPoint(innerAngle, 30);
  const targetAngle = (Math.atan2(inner.y - outer.y, inner.x - outer.x) * 180) / Math.PI;

  return {
    clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
    transform: `translate(-50%, -50%) rotate(${targetAngle - 180}deg) translateX(-${distance}px)`,
  };
};

const inactiveTextClass = "text-[#b8b8b8]";

const textColumnStyle = (index, layout) => ({
  ...calloutTextPosition(layout, 45),
  zIndex: 10 - index,
});

const desktopTextOffsetClass = (index) => {
  if (index === 5) {
    return "w-[520px] xl:w-[600px]";
  }

  return "w-[520px] xl:w-[680px]";
};

const desktopHeadingClass = (isActive) =>
  `m-0 text-[30px] font-extrabold leading-[1.08] xl:text-[37px] ${isActive ? "text-[#161821]" : inactiveTextClass}`;

const desktopCopyClass = (isActive) =>
  `m-0 mt-2 text-[18px] font-medium leading-[1.35] xl:text-[20px] ${isActive ? "text-[#8d8d8d]" : "text-[#c6c6c6]"}`;

const outerCircleClass = (isActive, sizeClass) =>
  `absolute isolate grid ${sizeClass} cursor-pointer place-items-center rounded-full border-transparent p-0 outline-none transition-[transform,box-shadow] duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
    isActive
      ? "shadow-[0_14px_28px_rgba(243,88,72,0.28)]"
      : "shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
  }`;

const outerIconClass = (isActive) => (isActive ? "text-[#f45b45]" : "text-[#8a8a8a]");

const outerNotchClass = (isActive, sizeClass) =>
  `absolute left-1/2 top-1/2 z-[-1] ${sizeClass} ${
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

  const renderInnerDots = (dotSizeClass = "size-10", bubbleSizeClass = "size-[34px]") => (
    <div className="absolute inset-0 z-10 overflow-visible">
      <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" style={{ filter: "url(#advantage-gooeyness)" }}>
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
            className={`absolute z-10 rounded-full border-[5px] shadow-[0_4px_10px_rgba(0,0,0,0.26)] outline-none transition-[background,border-color,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-tap-highlight-color:transparent] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
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
      className="relative overflow-hidden bg-white lg:min-h-0"
      aria-label="The Techvisr Advantage"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="advantage-gooeyness" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="relative isolate grid content-start justify-items-center px-5 pb-16 pt-[88px] md:px-8 md:pt-[108px] lg:px-12 lg:pb-10 lg:pt-[72px] xl:pt-[76px]">
        <img
          className="pointer-events-none absolute bottom-[-320px] left-[-260px] z-0 h-auto w-[1680px] max-w-none opacity-[0.13] md:bottom-[-360px] md:left-[-170px] lg:bottom-[-420px] lg:left-[-120px] lg:w-[1900px]"
          src="/images/story-wave-pattern.svg"
          alt=""
          aria-hidden="true"
        />

        <h2 className="relative z-10 m-0 text-center text-[40px] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#161821] md:text-[58px] lg:text-[68px] xl:text-[72px]">
          The Techvisr Advantage
        </h2>

        <div className="relative z-10 mt-12 w-full max-w-[1180px] lg:mt-4 lg:h-[690px] xl:mt-5 xl:h-[725px]">
          <div className="relative mx-auto aspect-square w-full max-w-[430px] lg:hidden">
            <div className="absolute inset-[5%] rounded-full border-[3px] border-[#8f8f8f]" />
            <div className="absolute inset-[12%] rounded-full border border-white bg-[radial-gradient(circle_at_50%_45%,#f5f5f5_0%,#ebebeb_56%,#f4f4f4_100%)] shadow-[inset_0_0_28px_rgba(0,0,0,0.04)]" />
            <div className="absolute inset-[24%] grid place-items-center rounded-full border border-white bg-[radial-gradient(circle_at_44%_38%,#ffffff_0%,#f4f4f4_68%,#ededed_100%)] shadow-[0_16px_28px_rgba(0,0,0,0.16)]">
              <div className="grid justify-items-center gap-2">
                <img className="h-20 w-20 object-contain md:h-24 md:w-24" src={asset("0b24c7c2d782973d27bd119c9b63dbddc971b776.png")} alt="" />
                <img className="w-32 md:w-40" src={asset("2b505ce3b912ab094138fc521132f921a2ec04b8.png")} alt="" />
              </div>
            </div>

            {renderInnerDots("size-6 md:size-10", "size-[18px] md:size-[34px]")}
          </div>

          <div className="relative mx-auto mt-[-430px] aspect-square w-full max-w-[430px] md:mt-[-430px] lg:hidden">
            {advantages.map(([title], index) => {
              const Icon = advantageIcons[index] ?? GlobeLock;
              const isActive = index === activeIndex;
              const layout = radialItems[index];

              return (
                <button
                  className={outerCircleClass(isActive, "size-[86px] border-[9px] md:size-[98px] md:border-[10px]")}
                  style={outerCircleStyle(layout, isActive)}
                  key={title}
                  type="button"
                  onMouseEnter={() => setAdvantageIndex(index)}
                  onFocus={() => setAdvantageIndex(index)}
                  onClick={() => setAdvantageIndex(index)}
                  aria-label={`Show ${title}`}
                >
                  <span
                    className={outerNotchClass(isActive, "h-[20px] w-[22px] md:h-[22px] md:w-[24px]")}
                    style={notchStyle(layout.angle, innerDotAngles[index], 52)}
                  />
                  <Icon className={outerIconClass(isActive)} size={34} strokeWidth={1.8} />
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 md:gap-7 lg:mt-0 lg:block">
            {advantages.map(([title, text], index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  className={`cursor-pointer transition-[opacity,color] duration-700 lg:hidden ${
                    isActive ? "opacity-100" : "opacity-78"
                  }`}
                  key={title}
                  onMouseEnter={() => setAdvantageIndex(index)}
                  onFocus={() => setAdvantageIndex(index)}
                  onClick={() => setAdvantageIndex(index)}
                  onKeyDown={(event) => handleKeyboardSelection(event, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${title}`}
                  aria-pressed={isActive}
                >
                  <h3 className={`m-0 text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] md:text-[36px] lg:text-[31px] xl:text-[37px] ${isActive ? "text-[#161821]" : "text-[#b8b8b8]"}`}>
                    {title}
                  </h3>
                  <p className={`m-0 mt-1.5 text-[17px] font-medium leading-[1.35] md:text-[20px] lg:text-[15px] xl:text-[20px] ${isActive ? "text-[#8d8d8d]" : "text-[#c6c6c6]"}`}>
                    {text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="absolute left-[18px] top-[60px] aspect-square w-[470px] xl:left-[34px] xl:top-[66px] xl:w-[500px]">
              <div className="absolute inset-[5%] rounded-full border-[3px] border-[#8f8f8f]" />
              <div className="absolute inset-[12%] rounded-full border border-white bg-[radial-gradient(circle_at_50%_45%,#f5f5f5_0%,#ebebeb_56%,#f4f4f4_100%)] shadow-[inset_0_0_30px_rgba(0,0,0,0.04)]" />
              <div className="absolute inset-[24%] grid place-items-center rounded-full border border-white bg-[radial-gradient(circle_at_44%_38%,#ffffff_0%,#f4f4f4_68%,#ededed_100%)] shadow-[0_16px_30px_rgba(0,0,0,0.14)]">
                <div className="grid justify-items-center gap-2">
                  <img className="h-24 w-24 object-contain xl:h-28 xl:w-28" src={asset("0b24c7c2d782973d27bd119c9b63dbddc971b776.png")} alt="" />
                  <img className="w-40 xl:w-44" src={asset("2b505ce3b912ab094138fc521132f921a2ec04b8.png")} alt="" />
                </div>
              </div>

              {renderInnerDots()}
            </div>

            <div className="absolute left-[18px] top-[60px] aspect-square w-[470px] overflow-visible xl:left-[34px] xl:top-[66px] xl:w-[500px]">
              {advantages.map(([title, text], index) => {
                const Icon = advantageIcons[index] ?? GlobeLock;
                const isActive = index === activeIndex;
                const layout = radialItems[index];

                return (
                  <article key={title}>
                    <button
                      className={outerCircleClass(isActive, "size-[92px] border-[10px] xl:size-[104px] xl:border-[11px]")}
                      style={outerCircleStyle(layout, isActive)}
                      type="button"
                      onMouseEnter={() => setAdvantageIndex(index)}
                      onFocus={() => setAdvantageIndex(index)}
                      onClick={() => setAdvantageIndex(index)}
                      aria-label={`Show ${title}`}
                    >
                      <span
                        className={outerNotchClass(isActive, "h-[22px] w-[24px] xl:h-[24px] xl:w-[26px]")}
                        style={notchStyle(layout.angle, innerDotAngles[index], 54)}
                      />
                      <Icon className={outerIconClass(isActive)} size={36} strokeWidth={1.8} />
                    </button>
                    <div
                      className={`absolute ${desktopTextOffsetClass(index)} cursor-pointer transition-[opacity,color] duration-700 ${isActive ? "opacity-100" : "opacity-82"}`}
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
