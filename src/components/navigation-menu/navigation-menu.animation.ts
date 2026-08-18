import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export function animateNavigationMenuEnter(element: HTMLElement) {
  gsap.killTweensOf(element);

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
}

export function animateNavigationMenuExit(
  element: HTMLElement,
  onComplete: () => void,
) {
  gsap.to(element, {
    opacity: 0,
    y: -6,
    scale: 0.96,
    duration: motionDuration(0.12),
    ease: 'power2.in',
    onComplete,
  });
}
