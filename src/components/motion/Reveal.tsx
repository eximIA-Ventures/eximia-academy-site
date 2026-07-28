"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion, m } from "motion/react";
import {
  EASE_OUT_SOFT,
  getRevealDelayMs,
  REDUCED_MOTION_QUERY,
  REVEAL_DISTANCE_PX,
  REVEAL_DURATION_SECONDS,
} from "@/components/motion/config";

type RevealProps = PropsWithChildren<{
  className?: string;
  /** Índice do item no grupo. Cada passo adiciona 70 ms. */
  stagger?: number;
}>;

export function Reveal({
  children,
  className,
  stagger = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const alreadyVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;

    setEnhanced(true);
    setRevealed(alreadyVisible);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setRevealed(true);
        observer.unobserve(element);
      },
      {
        threshold: 0.15,
        rootMargin: "0px",
      },
    );

    observer.observe(element);

    const stopForReducedMotion = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        return;
      }

      observer.disconnect();
      setEnhanced(false);
      setRevealed(true);
    };

    reducedMotion.addEventListener("change", stopForReducedMotion);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stopForReducedMotion);
    };
  }, []);

  const visible = !enhanced || revealed;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={elementRef}
        className={className}
        data-reveal=""
        initial={false}
        animate={
          visible
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: REVEAL_DISTANCE_PX }
        }
        transition={{
          delay: getRevealDelayMs(stagger) / 1000,
          duration: REVEAL_DURATION_SECONDS,
          ease: EASE_OUT_SOFT,
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

