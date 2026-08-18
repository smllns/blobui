import { gsap } from 'gsap';
import { motionDuration } from '@/lib/prefersReducedMotion';

export const animateAccordionOpen = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);

  gsap.fromTo(
    element,
    {
      height: 0,
      opacity: 0,
    },
    {
      height: element.scrollHeight,
      opacity: 1,
      duration: motionDuration(0.25),
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(element, {
          height: 'auto',
        });
      },
    },
  );
};

export const animateAccordionClose = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);
  gsap.set(element, {
    height: element.scrollHeight,
  });
  gsap.to(element, {
    height: 0,
    opacity: 0,
    duration: motionDuration(0.2),
    ease: 'power2.in',
  });
};

export const setAccordionClosed = (element: HTMLDivElement) => {
  gsap.set(element, {
    height: 0,
    opacity: 0,
  });
};
