import { gsap } from 'gsap';

const enterOffset = {
  top: { x: 0, y: 6 },
  bottom: { x: 0, y: -6 },
  left: { x: 6, y: 0 },
  right: { x: -6, y: 0 },
} as const;

type PlacedSide = keyof typeof enterOffset;

function getOffset(element: HTMLElement) {
  const side = element.dataset.side as PlacedSide | undefined;
  return enterOffset[side ?? 'bottom'] ?? enterOffset.bottom;
}

function getTransformOrigin(element: HTMLElement) {
  const side = element.dataset.side ?? 'bottom';
  const align = element.dataset.align ?? 'center';

  if (side === 'left') return 'right center';
  if (side === 'right') return 'left center';

  const block = side === 'top' ? 'bottom' : 'top';
  const inline =
    align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';

  return `${inline} ${block}`;
}

export const animateHoverCardEnter = (element: HTMLElement) => {
  const { x, y } = getOffset(element);

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.96,
      x,
      y,
      transformOrigin: getTransformOrigin(element),
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.18,
      ease: 'power2.out',
    },
  );
};

export const animateHoverCardExit = (
  element: HTMLElement,
  onComplete?: () => void,
) => {
  const { x, y } = getOffset(element);

  gsap.to(element, {
    opacity: 0,
    scale: 0.96,
    x,
    y,
    duration: 0.12,
    ease: 'power2.in',
    onComplete,
  });
};
