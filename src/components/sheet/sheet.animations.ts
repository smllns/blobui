import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';
import type { Side } from '@/components/shared/types';

const ENTER_DURATION = 0.3;
const EXIT_DURATION = 0.2;
const SNAP_DURATION = 0.24;

type Offscreen = { xPercent?: number; yPercent?: number };

const offscreen: Record<Side, Offscreen> = {
  right: { xPercent: 100 },
  left: { xPercent: -100 },
  top: { yPercent: -100 },
  bottom: { yPercent: 100 },
};

const onscreen = { xPercent: 0, yPercent: 0, x: 0, y: 0 };

export function animateSheetEnter(node: HTMLDivElement, side: Side) {
  gsap.killTweensOf(node);

  gsap.fromTo(
    node,
    { ...offscreen[side], x: 0, y: 0, opacity: 1 },
    {
      ...onscreen,
      opacity: 1,
      duration: motionDuration(ENTER_DURATION),
      ease: 'power3.out',
    },
  );
}

export function animateSheetExit(
  node: HTMLDivElement,
  side: Side,
  onComplete: () => void,
) {
  gsap.killTweensOf(node);

  const horizontal = side === 'left' || side === 'right';
  const distance = horizontal ? node.offsetWidth : node.offsetHeight;
  const sign = side === 'right' || side === 'bottom' ? 1 : -1;

  gsap.to(node, {
    xPercent: 0,
    yPercent: 0,
    [horizontal ? 'x' : 'y']: distance * sign,
    opacity: 0,
    duration: motionDuration(EXIT_DURATION),
    ease: 'power3.in',
    onComplete,
  });
}

export function animateSheetReopen(node: HTMLDivElement) {
  gsap.killTweensOf(node);

  gsap.to(node, {
    ...onscreen,
    opacity: 1,
    duration: motionDuration(ENTER_DURATION),
    ease: 'power3.out',
  });
}

export function setSheetDrag(
  node: HTMLDivElement,
  side: Side,
  distance: number,
) {
  const horizontal = side === 'left' || side === 'right';

  gsap.set(node, horizontal ? { x: distance } : { y: distance });
}

export function releaseSheetDrag(node: HTMLDivElement) {
  gsap.to(node, {
    x: 0,
    y: 0,
    duration: motionDuration(SNAP_DURATION),
    ease: 'power3.out',
  });
}
