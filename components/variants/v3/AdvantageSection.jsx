"use client";

import { useEffect, useRef, useState } from "react";
import AdvantageLottieIcon from "./AdvantageLottieIcon";
const INNER_DOT_RADIUS = 26;
const INNER_DOT_TRANSITION_MS = 800;

const radialItems = [
  { angle: -70, textOffsetX: 72, textOffsetY: -24 },
  { angle: -42, textOffsetX: 72, textOffsetY: -4 },
  { angle: -12, textOffsetX: 74, textOffsetY: 0 },
  { angle: 18, textOffsetX: 74, textOffsetY: 0 },
  { angle: 48, textOffsetX: 74, textOffsetY: 8 },
  { angle: 78, textOffsetX: 74, textOffsetY: 54 },
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

const textColumnStyle = (index, layout) => ({
  ...calloutTextPosition(layout, 45),
  zIndex: 10 - index,
});

const outerCircleClass = (isActive, sizeClass) =>
  `pointer-events-auto absolute z-30 isolate grid ${sizeClass} cursor-pointer touch-manipulation place-items-center rounded-full border-transparent p-0 outline-none transition-[transform,box-shadow] duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
    isActive
      ? "shadow-[0_8px_24px_rgba(222,102,84,0.24)]"
      : "shadow-[0_6px_18px_rgba(35,39,49,0.12)]"
  }`;

const outerNotchClass = (isActive, sizeClass) =>
  `pointer-events-none absolute left-1/2 top-1/2 z-[-1] ${sizeClass} ${
    isActive ? "bg-[linear-gradient(135deg,#f69973_0%,#ed735e_52%,#e77490_100%)]" : "bg-[#b7bbca]"
  }`;

const outerCircleStyle = (layout, isActive) => {
  const position = centeredPolarPosition(layout.angle, 47);
  const ring = isActive
    ? "linear-gradient(135deg, #f69973 0%, #ed735e 48%, #e77490 100%)"
    : "linear-gradient(135deg, #c7c9d5, #a4aabb)";

  return {
    ...position,
    background: `linear-gradient(145deg, #ffffff, #f8f7fa) padding-box, ${ring} border-box`,
  };
};

export default function AdvantageSection({ asset, advantages }) {
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
    return <AdvantageLottieIcon index={index} active={isActive} className={sizeClass} />;
  };

  const renderInnerDots = (dotSizeClass = "size-8", bubbleSizeClass = "size-6") => (
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
            className={`pointer-events-auto absolute z-10 rounded-full border-[4px] shadow-[0_3px_8px_rgba(35,39,49,0.12)] outline-none transition-[background,border-color,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-tap-highlight-color:transparent] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#f37135] focus-visible:ring-offset-2 ${
              isSelected ? "border-[#f75a45]" : "border-white"
            } ${dotSizeClass}`}
            style={{
              ...centeredPolarPosition(angle, INNER_DOT_RADIUS),
              backgroundColor: isSelected ? activeLiquidColor : "#929bad",
            }}
            key={angle}
            type="button"
            onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setAdvantageIndex(index); }}
            onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setAdvantageIndex(index); }}
            onClick={() => setAdvantageIndex(index)}
            aria-label={`Show ${title}`}
            aria-pressed={isSelected}
          />
        );
      })}
    </div>
  );

  useEffect(() => () => {
    if (leavingTimerRef.current) {
      window.clearTimeout(leavingTimerRef.current);
    }
  }, []);

  return (
    <section
      id="why-techvisr-"
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

        <h2 className="relative z-10 m-0 max-w-[760px] text-center text-[45px] font-semibold leading-none tracking-[0] text-[#161821] [font-family:var(--font-figma-display),Barlow,sans-serif] max-[820px]:text-[clamp(26px,7.3vw,32px)] max-[820px]:leading-[1.14] xl:max-w-none">
          The Techvisr Advantage
        </h2>

        <div className="relative z-10 mt-6 w-full max-w-[1180px] md:mt-8 xl:mt-6 xl:h-[620px] 2xl:h-[650px]">
          <div className="relative mx-auto aspect-square w-full max-w-[min(320px,82vw)] overflow-visible min-[420px]:max-w-[min(360px,86vw)] sm:max-w-[430px] md:max-w-[600px] lg:max-w-[720px] xl:hidden">
            <div className="advantage-orbit absolute inset-[5%] rounded-full border" />
            <div className="advantage-halo absolute inset-[12%] rounded-full border border-white" />
            <div className="advantage-core absolute inset-[24%] grid place-items-center rounded-full border border-white">
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
                    "size-[58px] border-[3px] min-[380px]:size-[64px] sm:size-[86px] md:size-[104px] md:border-[4px] lg:size-[112px]",
                  )}
                  style={outerCircleStyle(layout, isActive)}
                  key={title}
                  type="button"
                  onPointerEnter={(event) => { if (event.pointerType === "mouse") setAdvantageIndex(index); }}
                  onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setAdvantageIndex(index); }}
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
                  className="advantage-mobile-item reveal-card grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl border p-4 text-left transition-[border-color,box-shadow,background] duration-300 sm:gap-4 md:p-5 xl:hidden"
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
                    <h3 className="advantage-item-title">
                      {title}
                    </h3>
                    <p className="advantage-item-copy">
                      {text}
                    </p>
                  </span>
                </article>
              );
            })}
          </div>

          <div className="relative mx-auto hidden h-full w-[920px] xl:block 2xl:w-[1120px]">
            <div className="absolute left-0 top-[58px] aspect-square w-[470px] 2xl:left-[34px] 2xl:top-[66px] 2xl:w-[500px]">
              <div className="advantage-orbit absolute inset-[5%] rounded-full border" />
              <div className="advantage-halo absolute inset-[12%] rounded-full border border-white" />
              <div className="advantage-core absolute inset-[24%] grid place-items-center rounded-full border border-white">
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
                      className={outerCircleClass(isActive, "size-[84px] border-[3px] 2xl:size-[92px] 2xl:border-[4px]")}
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
                      className={`advantage-callout pointer-events-auto absolute w-[430px] cursor-pointer 2xl:w-[510px] ${index === 4 ? "advantage-callout--industry" : ""}`}
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
                      <h3 className="advantage-item-title">
                        {title}
                      </h3>
                      <p className="advantage-item-copy">
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
