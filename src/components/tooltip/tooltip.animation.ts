import { gsap } from 'gsap';

export const animateTooltipIn = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 6,
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.18,
      ease: 'power2.out',
    },
  );
};

export const animateTooltipOut = (
  element: HTMLDivElement,
  onComplete: () => void,
) => {
  gsap.killTweensOf(element);

  gsap.to(element, {
    opacity: 0,
    y: 6,
    scale: 0.96,
    duration: 0.12,
    ease: 'power2.in',
    onComplete,
  });
};
