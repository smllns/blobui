import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export function animateContextMenuEnter(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.fromTo(
    node,
    {
      opacity: 0,
      scale: 0.96,
    },
    {
      opacity: 1,
      scale: 1,
      duration: motionDuration(0.16),
      ease: 'power2.out',
    },
  );
}

export function animateContextMenuExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    opacity: 0,
    scale: 0.96,
    duration: motionDuration(0.1),
    ease: 'power2.in',
    onComplete,
  });
}
