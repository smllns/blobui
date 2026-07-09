import { useLayoutEffect, useRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  animateAccordionClose,
  animateAccordionOpen,
  setAccordionClosed,
} from './accordion.animation';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (element.dataset.state === 'closed') {
      setAccordionClosed(element);
    }

    const observer = new MutationObserver(() => {
      const state = element.dataset.state;

      if (state === 'open') {
        animateAccordionOpen(element);
      }

      if (state === 'closed') {
        animateAccordionClose(element);
      }
    });

    observer.observe(element, {
      attributes: true,
      attributeFilter: ['data-state'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AccordionPrimitive.Content ref={ref} forceMount className={className}>
      {children}
    </AccordionPrimitive.Content>
  );
}
