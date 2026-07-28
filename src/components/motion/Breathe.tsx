"use client";

import type { PropsWithChildren } from "react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { normalizeBreatheDuration } from "@/components/motion/config";

type BreatheProps = PropsWithChildren<{
  className?: string;
  durationSeconds?: number;
}>;

export function Breathe({
  children,
  className,
  durationSeconds = 9,
}: BreatheProps) {
  const reducedMotion = useReducedMotion();
  const duration = normalizeBreatheDuration(durationSeconds);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        data-breathe=""
        aria-hidden="true"
        initial={{ opacity: 0.75, scale: 1 }}
        animate={
          reducedMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [0.75, 1, 0.75], scale: [1, 1.06, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                duration,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
