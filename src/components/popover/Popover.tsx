import * as PopoverPrimitive from '@radix-ui/react-popover';
import { createContext, forwardRef, useContext, useRef, useState } from 'react';

import { cn } from '../../lib/cn';

import type { PopoverArrowProps, PopoverContentProps } from './popover.types';

import { popoverArrowStyles, popoverContentStyles } from './popover.styles';

import { animatePopoverEnter, animatePopoverExit } from './popover.animations';

type PopoverContextValue = {
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error('Popover components must be used inside Popover');
  }

  return context;
}

const Popover = ({ children, ...props }: PopoverPrimitive.PopoverProps) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
      return;
    }

    const content = contentRef.current;

    if (!content) {
      setOpen(false);
      return;
    }

    animatePopoverExit(content, () => {
      setOpen(false);
    });
  };

  return (
    <PopoverContext.Provider
      value={{
        contentRef,
      }}
    >
      <PopoverPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverContent = forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    { className, variant, size, rounded, sideOffset = 8, ...props },
    forwardedRef,
  ) => {
    const { contentRef } = usePopoverContext();

    const setContentRef = (node: HTMLDivElement | null) => {
      contentRef.current = node;

      if (node) {
        animatePopoverEnter(node);
      }

      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    return (
      <PopoverPortal>
        <PopoverPrimitive.Content
          ref={setContentRef}
          sideOffset={sideOffset}
          className={cn(
            popoverContentStyles({
              variant,
              size,
              rounded,
            }),
            className,
          )}
          {...props}
        />
      </PopoverPortal>
    );
  },
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverArrow = forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  PopoverArrowProps
>(({ className, variant, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cn(
      popoverArrowStyles({
        variant,
      }),
      className,
    )}
    {...props}
  />
));

PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
};
