import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

const ENTER_DURATION = 0.25;
const EXIT_DURATION = 0.18;
const OFFSET = 8;
const SCALE = 0.96;

export function animateDialogEnter(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.fromTo(
    node,
    {
      opacity: 0,
      y: OFFSET,
      scale: SCALE,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(ENTER_DURATION),
      ease: 'power3.out',
      clearProps: 'opacity,transform',
    },
  );
}

export function animateDialogExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    opacity: 0,
    y: OFFSET,
    scale: SCALE,
    duration: motionDuration(EXIT_DURATION),
    ease: 'power3.in',
    onComplete,
  });
}

export function animateDialogReopen(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: motionDuration(ENTER_DURATION),
    ease: 'power3.out',
    clearProps: 'opacity,transform',
  });
}
