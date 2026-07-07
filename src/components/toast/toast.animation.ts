import { gsap } from 'gsap';

export const animateToastIn = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 16,
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.25,
      ease: 'power2.out',
    },
  );
};

export const animateToastOut = (
  element: HTMLDivElement,
  onComplete: () => void,
) => {
  gsap.killTweensOf(element);

  gsap.to(element, {
    opacity: 0,
    y: 16,
    scale: 0.96,
    duration: 0.2,
    ease: 'power2.in',
    onComplete,
  });
};
