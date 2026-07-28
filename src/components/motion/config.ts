export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const EASE_OUT_SOFT = [0.22, 1, 0.36, 1] as const;
export const REVEAL_DURATION_SECONDS = 0.7;
export const REVEAL_DISTANCE_PX = 24;
export const REVEAL_STAGGER_MS = 70;
export const PARALLAX_MAX_SHIFT_PX = 48;
export const PARALLAX_MAX_FACTOR = 0.12;
export const PARALLAX_DEFAULT_FACTOR = 0.06;
export const BREATHE_MIN_SECONDS = 9;
export const BREATHE_MAX_SECONDS = 12;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function normalizeParallaxFactor(factor: number) {
  const safeFactor = Number.isFinite(factor)
    ? factor
    : PARALLAX_DEFAULT_FACTOR;

  return clamp(safeFactor, -PARALLAX_MAX_FACTOR, PARALLAX_MAX_FACTOR);
}

export function calculateParallaxShift(
  centerOffset: number,
  factor: number,
) {
  return clamp(
    centerOffset * normalizeParallaxFactor(factor),
    -PARALLAX_MAX_SHIFT_PX,
    PARALLAX_MAX_SHIFT_PX,
  );
}

export function normalizeBreatheDuration(durationSeconds: number) {
  const safeDuration = Number.isFinite(durationSeconds)
    ? durationSeconds
    : BREATHE_MIN_SECONDS;

  return clamp(safeDuration, BREATHE_MIN_SECONDS, BREATHE_MAX_SECONDS);
}

export function getRevealDelayMs(stagger: number) {
  const safeIndex = Number.isFinite(stagger)
    ? Math.max(0, Math.floor(stagger))
    : 0;

  return safeIndex * REVEAL_STAGGER_MS;
}

