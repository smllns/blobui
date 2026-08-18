import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export const animateSelectEnter = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: -6,
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(0.18),
      ease: 'power2.out',
    },
  );
};

export const animateSelectExit = (
  element: HTMLElement,
  onComplete?: () => void,
) => {
  gsap.to(element, {
    opacity: 0,
    y: -6,
    scale: 0.96,
    duration: motionDuration(0.12),
    ease: 'power2.in',
    onComplete,
  });
};
