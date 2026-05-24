"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const clamp = (value) => Math.min(Math.max(value, 0), 1);
const STORY_VIDEO_SRC = "/videos/our-story.mp4";
const STORY_POSTER_SRC = "/images/our-story-video-poster.png";

export default function StorySection() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const video = videoRef.current;

    if (!section || !media) {
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const enterProgress = clamp((viewportHeight - rect.top) / (viewportHeight * 0.72));
      const exitProgress = clamp((rect.bottom - viewportHeight * 0.18) / (viewportHeight * 0.58));
      const progress = Math.min(enterProgress, exitProgress);
      const isActive = progress > 0.16;

      media.style.setProperty("--story-progress", progress.toFixed(3));
      media.dataset.active = isActive ? "true" : "false";

      if (video && hasVideo) {
        if (isActive) {
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [hasVideo]);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative isolate overflow-hidden bg-white px-5 pb-[72px] pt-16 md:px-8 md:pb-20 md:pt-20 lg:px-20 lg:pb-24 lg:pt-[100px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_70%_at_50%_100%,rgba(243,113,53,0.12)_0%,rgba(255,255,255,0)_58%),linear-gradient(180deg,#ffffff_0%,#fffaf7_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20"
      >
        <img
          className="absolute left-[-22vw] top-[-42px] h-[560px] w-[210vw] max-w-none object-fill md:left-[-16vw] md:top-[-80px] md:h-[680px] md:w-[185vw] lg:left-[0vw] lg:top-[-220px] lg:h-[820px] lg:w-[160vw] "
          src="/images/story-wave-pattern.svg"
          alt=""
          draggable={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="relative z-10 m-0 w-full max-w-[940px] text-center text-[42px] font-bold leading-[1.2] tracking-[0] text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif] md:text-[56px] lg:text-[62px]">
          Our Story
        </h2>

        <div
          ref={mediaRef}
          className="story-media-frame relative z-10 mt-10 w-full select-none overflow-hidden bg-black md:mt-[52px] lg:mt-[62px]"
        >
          {hasVideo ? (
            <video
              ref={videoRef}
              className="aspect-[848/486] w-full select-none object-cover"
              poster={STORY_POSTER_SRC}
              muted
              playsInline
              loop
              preload="metadata"
              onError={() => setHasVideo(false)}
            >
              <source src={STORY_VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            <img
              className="aspect-[848/486] w-full select-none object-cover"
              src={STORY_POSTER_SRC}
              alt="Techvisr story video"
              draggable={false}
            />
          )}
        </div>

        <HeaderActionButton
          variant="outline"
          // size="large"
          className="relative z-10 mt-7 max-w-full [font-family:var(--font-figma-body),Roboto,sans-serif] hover:text-[#161821] md:mt-9 lg:mt-10"
        >
          Start Your Transformation
        </HeaderActionButton>
      </div>
    </section>
  );
}
