"use client";

import { useEffect, useRef, useState } from "react";
import { CodeXml, Cpu, ShieldCheck, Network, Focus, TrendingUp } from "lucide-react";
import { createAdvantageAnimation } from "./advantageAnimations";

const fallbacks = [CodeXml, Cpu, ShieldCheck, Network, Focus, TrendingUp];
// Match the supplied animations to the six advantages in display order.
const animations = ["smooth-gears", "ai-network", "security-safe", "technology-network", "gear", "quad-cube"];

async function loadAnimationData(index, signal) {
  const name = animations[index];
  if (!name) return createAdvantageAnimation(index);
  const response = await fetch(`/lotties/advantages/${name}.json`, { signal });
  if (!response.ok) throw new Error(`Unable to load ${name}`);
  return response.json();
}

export default function AdvantageLottieIcon({ index, active, className }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const posterFrameRef = useRef(36);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [ready, setReady] = useState(false);
  const Fallback = fallbacks[index] || CodeXml;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(containerRef.current);
    return () => { media.removeEventListener("change", updateMotion); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!visible || playerRef.current) return;
    let cancelled = false;
    const controller = new AbortController();
    Promise.all([
      import("lottie-web/build/player/lottie_light"),
      loadAnimationData(index, controller.signal),
    ]).then(([{ default: lottie }, animationData]) => {
      if (cancelled || !containerRef.current) return;
      posterFrameRef.current = Math.floor((animationData.op - animationData.ip) * 0.5);
      const player = lottie.loadAnimation({ container: containerRef.current, renderer: "svg", loop: true, autoplay: false, animationData, rendererSettings: { progressiveLoad: true } });
      playerRef.current = player;
      const showAnimation = () => {
        if (playerRef.current !== player) return;
        player.goToAndStop(posterFrameRef.current, true);
        setReady(true);
      };
      if (player.isLoaded) showAnimation();
      else player.addEventListener("DOMLoaded", showAnimation);
    }).catch(() => { /* Keep the matching static icon if the player cannot load. */ });
    return () => { cancelled = true; controller.abort(); };
  }, [visible, index]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    if (active && visible && !reducedMotion) player.play();
    else player.goToAndStop(posterFrameRef.current, true);
  }, [active, visible, reducedMotion, ready]);

  useEffect(() => () => { playerRef.current?.destroy(); playerRef.current = null; }, []);

  return (
    <span className={`advantage-lottie-icon ${className}`} data-active={active} aria-hidden="true">
      {!ready && <Fallback className="absolute inset-0 h-full w-full" strokeWidth={1.8} />}
      <span ref={containerRef} className="absolute inset-0" />
    </span>
  );
}
