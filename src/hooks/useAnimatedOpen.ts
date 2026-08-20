import { useCallback, useRef, useState } from 'react';
import { gsap } from 'gsap';

type UseAnimatedOpenProps<T extends HTMLElement> = {
  animateEnter: (element: T) => void;
  animateExit: (element: T, onComplete: () => void) => void;
};

export function useAnimatedOpen<T extends HTMLElement>({
  animateEnter,
  animateExit,
}: UseAnimatedOpenProps<T>) {
  const [open, setOpen] = useState(false);

  const contentRef = useRef<T | null>(null);
  const exitingRef = useRef(false);

  const setContentRef = useCallback(
    (element: T | null) => {
      if (!element || element === contentRef.current) return;

      contentRef.current = element;
      exitingRef.current = false;
      animateEnter(element);
    },
    [animateEnter],
  );

  const mountedContent = () =>
    contentRef.current?.isConnected ? contentRef.current : null;

  const handleOpenChange = (nextOpen: boolean) => {
    const element = mountedContent();

    if (nextOpen) {
      if (element && exitingRef.current) {
        exitingRef.current = false;
        gsap.killTweensOf(element);
        animateEnter(element);
      }

      setOpen(true);
      return;
    }

    if (!element) {
      setOpen(false);
      return;
    }

    exitingRef.current = true;

    animateExit(element, () => {
      if (!exitingRef.current) return;

      exitingRef.current = false;
      setOpen(false);
    });
  };

  return {
    open,
    setOpen,
    contentRef,
    setContentRef,
    handleOpenChange,
  };
}
