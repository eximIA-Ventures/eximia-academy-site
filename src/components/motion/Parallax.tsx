"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";
import {
  calculateParallaxShift,
  PARALLAX_DEFAULT_FACTOR,
  REDUCED_MOTION_QUERY,
} from "@/components/motion/config";

type ParallaxProps = PropsWithChildren<{
  className?: string;
  factor?: number;
}>;

export function Parallax({
  children,
  className,
  factor = PARALLAX_DEFAULT_FACTOR,
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frame: number | null = null;
    let listening = false;

    const render = () => {
      frame = null;
      const bounds = element.getBoundingClientRect();
      const centerOffset =
        bounds.top + bounds.height / 2 - window.innerHeight / 2;
      const shift = calculateParallaxShift(centerOffset, factor);

      element.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };

    const schedule = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      if (listening || reducedMotion.matches) {
        return;
      }

      listening = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      schedule();
    };

    const stop = () => {
      if (listening) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        listening = false;
      }

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }

      element.style.transform = "none";
    };

    const applyMotionPreference = () => {
      if (reducedMotion.matches) {
        stop();
      } else {
        start();
      }
    };

    reducedMotion.addEventListener("change", applyMotionPreference);
    applyMotionPreference();

    return () => {
      reducedMotion.removeEventListener("change", applyMotionPreference);
      stop();
    };
  }, [factor]);

  return (
    <div
      ref={elementRef}
      className={className}
      data-parallax=""
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

