import { useRef, useState } from 'react';

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

  const setContentRef = (element: T | null) => {
    contentRef.current = element;

    if (element) {
      animateEnter(element);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setOpen(true);
      return;
    }

    const element = contentRef.current;

    if (!element) {
      setOpen(false);
      return;
    }

    animateExit(element, () => {
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
