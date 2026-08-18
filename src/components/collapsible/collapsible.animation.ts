import { prefersReducedMotion } from '@/lib/prefersReducedMotion';
import { gsap } from 'gsap';

const OPEN_DURATION = 0.25;
const CLOSE_DURATION = 0.2;

const PEEK_HEIGHT = 'var(--collapsible-peek)';

const closedHeight = (element: HTMLDivElement) => {
  const inner = element.firstElementChild;

  if (!(inner instanceof HTMLElement)) return 0;

  return parseFloat(window.getComputedStyle(inner).minHeight) || 0;
};

const closedOpacity = (closed: number) => (closed > 0 ? 1 : 0);

const restAtClosed = (element: HTMLDivElement, closed: number) => {
  element.style.height = closed > 0 ? PEEK_HEIGHT : '0px';
};

export const setCollapsibleClosed = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);

  const closed = closedHeight(element);

  gsap.set(element, {
    opacity: closedOpacity(closed),
  });

  restAtClosed(element, closed);
};

export const setCollapsibleOpen = (element: HTMLDivElement) => {
  gsap.killTweensOf(element);

  gsap.set(element, {
    height: 'auto',
    opacity: 1,
  });
};

export const animateCollapsibleOpen = (
  element: HTMLDivElement,
  peek?: boolean,
) => {
  gsap.killTweensOf(element);

  if (prefersReducedMotion()) {
    if (peek) {
      gsap.set(element, {
        height: element.scrollHeight,
        opacity: 1,
      });
    } else {
      setCollapsibleOpen(element);
    }

    return;
  }

  const closed = closedHeight(element);
  const targetHeight = peek ? `${peek}lh` : element.scrollHeight;

  gsap.fromTo(
    element,
    {
      height: closed,
      opacity: closedOpacity(closed),
    },
    {
      height: targetHeight,
      opacity: 1,
      duration: OPEN_DURATION,
      ease: 'power2.out',
      onComplete: () => {
        if (!peek) {
          gsap.set(element, {
            height: 'auto',
          });
        }
      },
    },
  );
};

export const animateCollapsibleClose = (
  element: HTMLDivElement,
  peek = false,
) => {
  gsap.killTweensOf(element);

  const closed = closedHeight(element);
  const currentHeight = element.scrollHeight;
  const targetHeight = peek ? PEEK_HEIGHT : closed;

  if (prefersReducedMotion()) {
    gsap.set(element, {
      height: targetHeight,
      opacity: peek ? 1 : closedOpacity(closed),
    });

    return;
  }

  gsap.set(element, {
    height: currentHeight,
    opacity: 1,
  });

  gsap.to(element, {
    height: targetHeight,
    opacity: peek ? 1 : closedOpacity(closed),
    duration: CLOSE_DURATION,
    ease: 'power2.in',
    overwrite: true,
  });
};
