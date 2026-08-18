import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export function animatePopoverEnter(node: HTMLDivElement) {
  const side = node.dataset.side;

  const offset = {
    top: { y: 8, x: 0 },
    bottom: { y: -8, x: 0 },
    left: { x: 8, y: 0 },
    right: { x: -8, y: 0 },
  };

  const position = offset[side as keyof typeof offset] ?? offset.bottom;

  gsap.fromTo(
    node,
    {
      opacity: 0,
      scale: 0.96,
      x: position.x,
      y: position.y,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: motionDuration(0.2),
      ease: 'power3.out',
      clearProps: 'all',
    },
  );
}

export function animatePopoverExit(
  node: HTMLDivElement,
  onComplete: () => void,
) {
  const side = node.dataset.side;

  const offset = {
    top: { y: 6, x: 0 },
    bottom: { y: -6, x: 0 },
    left: { x: 6, y: 0 },
    right: { x: -6, y: 0 },
  };

  const position = offset[side as keyof typeof offset] ?? offset.bottom;

  gsap.to(node, {
    opacity: 0,
    scale: 0.96,
    x: position.x,
    y: position.y,
    duration: motionDuration(0.15),
    ease: 'power3.in',
    onComplete,
  });
}
