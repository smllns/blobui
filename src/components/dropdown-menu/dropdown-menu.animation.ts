import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export function animateDropdownEnter(node: HTMLDivElement) {
  gsap.fromTo(
    node,
    {
      opacity: 0,
      y: 8,
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

export function animateDropdownExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  gsap.to(node, {
    opacity: 0,
    y: 8,
    scale: 0.96,
    duration: motionDuration(0.12),
    ease: 'power2.in',
    onComplete,
  });
}
