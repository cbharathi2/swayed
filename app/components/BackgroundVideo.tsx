"use client";

import { useEffect, useRef } from "react";
import { motion, type MotionStyle, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type BackgroundVideoProps = {
  src?: string;
  parallax?: boolean;
  parallaxRange?: [number, number];
  parallaxOffset?: number;
  className?: string;
  overlayClassName?: string;
  style?: MotionStyle;
};

export default function BackgroundVideo({
  src = "/bg-video.mp4",
  parallax = true,
  parallaxRange = [0, 1200],
  parallaxOffset = -200,
  className = "",
  overlayClassName = "bg-black/40",
  style,
}: BackgroundVideoProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgShift = useTransform(scrollY, parallaxRange, [0, parallaxOffset]);
  const bgShiftSpring = useSpring(bgShift, { stiffness: 60, damping: 20, mass: 0.6 });
  const bgY = prefersReducedMotion || !parallax ? 0 : bgShiftSpring;
  const parallaxOverscan = prefersReducedMotion || !parallax ? 0 : Math.max(Math.abs(parallaxOffset), 120);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      const video = videoRef.current;
      if (video) {
        video.pause();
      }
      return;
    }

    let pauseTimer: number | null = null;
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
        video.play().catch(() => {});
      }

      if (pauseTimer) window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => {
        video.pause();
      }, 160);
    };

    // Ensure the background is paused until the user scrolls.
    const video = videoRef.current;
    if (video) {
      video.pause();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (pauseTimer) window.clearTimeout(pauseTimer);
    };
  }, [prefersReducedMotion]);

  const mergedStyle: MotionStyle = {
    y: bgY,
    top: parallaxOverscan ? `${-parallaxOverscan / 2}px` : 0,
    bottom: parallaxOverscan ? `${-parallaxOverscan / 2}px` : 0,
    left: 0,
    right: 0,
    ...(style ?? {}),
  };

  return (
    <motion.div
      className={`fixed z-[-1] w-full overflow-hidden bg-black transform-gpu will-change-transform ${className}`}
      style={mergedStyle}
    >
      <video
        loop
        muted
        playsInline
        ref={videoRef}
        className="w-full h-full object-cover opacity-50"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </motion.div>
  );
}
