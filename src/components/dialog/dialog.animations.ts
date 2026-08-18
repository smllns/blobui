import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export function animateDialogEnter(node: HTMLDivElement) {
  gsap.fromTo(
    node,
    {
      opacity: 0,
      scale: 0.5,
    },
    {
      opacity: 1,
      scale: 1,
      duration: motionDuration(0.25),
      ease: 'power3.out',
      clearProps: 'all',
    },
  );
}

export function animateDialogExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  gsap.to(node, {
    opacity: 0,
    scale: 0.92,
    duration: motionDuration(0.18),
    ease: 'power3.in',
    onComplete,
  });
}

export function animateOverlayEnter(node: HTMLDivElement) {
  gsap.fromTo(
    node,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: motionDuration(0.25),
      ease: 'power2.out',
    },
  );
}

export function animateOverlayExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  gsap.to(node, {
    opacity: 0,
    duration: motionDuration(0.2),
    ease: 'power2.in',
    onComplete,
  });
}
