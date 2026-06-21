"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const clamp = (value) => Math.min(Math.max(value, 0), 1);
const STORY_VIDEO_SRC = "/videos/our-story.mp4";
const STORY_POSTER_SRC = "/images/our-story-video-poster.png";
const STORY_PLAY_PROGRESS = 0.58;

export default function OurStorySection() {
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
    <section ref={sectionRef} id="our-story" className="our-story-section">
      <img
        className="our-story-wave"
        src="/images/our-story-wave.svg"
        alt=""
        aria-hidden="true"
        draggable={false}
      />

      <div className="our-story-header">
        <h2>Our Story</h2>
      </div>

      <div ref={mediaRef} className="our-story-media">
        {hasVideo ? (
          <video
            ref={videoRef}
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
            src={STORY_POSTER_SRC}
            alt="Techvisr story video"
            draggable={false}
          />
        )}
      </div>

      <a className="our-story-button" href="/contact">
        <span>Start Your Transformation</span>
        <ArrowRight aria-hidden="true" size={20} strokeWidth={1.6667} />
      </a>
    </section>
  );
}
