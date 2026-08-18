export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const motionDuration = (seconds: number) =>
  prefersReducedMotion() ? 0 : seconds;
