"use client";

import { useEffect, useRef, useState } from "react";
import HeaderActionButton from "./HeaderActionButton";

const clamp = (value) => Math.min(Math.max(value, 0), 1);
const STORY_VIDEO_SRC = "/videos/our-story.mp4";
const STORY_POSTER_SRC = "/images/our-story-video-poster.png";
const STORY_PLAY_PROGRESS = 0.58;

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
    let wasInPlaybackRange = false;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const enterProgress = clamp((viewportHeight - rect.top) / (viewportHeight * 0.72));
      const exitProgress = clamp((rect.bottom - viewportHeight * 0.18) / (viewportHeight * 0.58));
      const progress = Math.min(enterProgress, exitProgress);
      const isActive = progress > 0.16;
      const shouldPlay = progress >= STORY_PLAY_PROGRESS;

      media.style.setProperty("--story-progress", progress.toFixed(3));
      media.dataset.active = isActive ? "true" : "false";

      if (video && hasVideo && shouldPlay !== wasInPlaybackRange) {
        wasInPlaybackRange = shouldPlay;

        if (shouldPlay) {
          if (video.ended) {
            video.currentTime = 0;
          }

          const playPromise = video.play();

          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
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
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#F3F3F3_50%)] px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 md:px-8 md:pb-28 md:pt-20 lg:px-12 lg:pb-32 lg:pt-24 2xl:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#F3F3F3_50%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-28%] h-[52%] w-[145%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(243,113,53,0.12)_0%,rgba(243,113,53,0.05)_45%,rgba(255,255,255,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-18%] h-[46%] w-[76%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(243,113,53,0.10)_0%,rgba(255,232,221,0.24)_42%,rgba(255,255,255,0)_70%)]" />
        <img
          className="story-wave-layer absolute left-[-70vw] top-[-96px] h-[470px] w-[230vw] max-w-none -rotate-[2deg] object-fill opacity-[0.30] mix-blend-multiply sm:left-[-55vw] sm:top-[-120px] sm:h-[560px] sm:w-[210vw] md:left-[-38vw] md:top-[-150px] md:h-[680px] md:w-[180vw] lg:left-[-16vw] lg:top-[-260px] lg:h-[860px] lg:w-[142vw] 2xl:left-[-8vw] 2xl:h-[940px] 2xl:w-[128vw]"
          src="/images/story-wave-pattern.svg"
          alt=""
          draggable={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.52)_8%,rgba(255,255,255,0)_24%,rgba(255,255,255,0)_76%,rgba(243,243,243,0.72)_92%,#F3F3F3_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.42)_8%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_78%,rgba(243,243,243,0.46)_92%,#F3F3F3_100%)] opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(243,243,243,0.72)_42%,#F3F3F3_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="relative z-10 m-0 w-full max-w-[940px] text-center text-4xl font-bold leading-[1.12] tracking-[0] text-[#161821] [font-family:var(--font-figma-body),Roboto,sans-serif] sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] 2xl:text-[4rem]">
          Our Story
        </h2>

        <div
          ref={mediaRef}
          className="story-media-frame relative z-10 mt-8 w-full max-w-[1180px] select-none overflow-hidden bg-black sm:mt-10 md:mt-12 lg:mt-14"
        >
          {hasVideo ? (
            <video
              ref={videoRef}
              className="aspect-[848/486] w-full select-none object-cover"
              poster={STORY_POSTER_SRC}
              controls
              controlsList="nodownload"
              muted
              playsInline
              preload="metadata"
              aria-label="TechVisr company overview video"
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
