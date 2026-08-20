import gsap from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

const ENTER_DURATION = 0.3;
const EXIT_DURATION = 0.2;

export function animateOverlayEnter(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.fromTo(
    node,
    { opacity: 0 },
    {
      opacity: 1,
      duration: motionDuration(ENTER_DURATION),
      ease: 'power2.out',
    },
  );
}

export function animateOverlayExit(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    opacity: 0,
    duration: motionDuration(EXIT_DURATION),
    ease: 'power2.in',
  });
}

export function animateOverlayReopen(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    opacity: 1,
    duration: motionDuration(ENTER_DURATION),
    ease: 'power2.out',
  });
}
