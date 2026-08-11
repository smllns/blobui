import * as PopoverPrimitive from '@radix-ui/react-popover';
import { createContext, forwardRef } from 'react';
import { cn } from '@/lib/cn';
import type { PopoverArrowProps, PopoverContentProps } from './popover.types';
import { popoverArrowStyles, popoverContent } from './popover.styles';
import { animatePopoverEnter, animatePopoverExit } from './popover.animations';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';

type PopoverContextValue = {
  contentRef: React.RefObject<HTMLDivElement | null>;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

const Popover = ({ children, ...props }: PopoverPrimitive.PopoverProps) => {
  const { open, contentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animatePopoverEnter,
      animateExit: animatePopoverExit,
    });

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
>(({ className, variant, size, rounded, sideOffset = 8, ...props }) => {
  const { setContentRef } = useAnimatedOpen<HTMLDivElement>({
    animateEnter: animatePopoverEnter,
    animateExit: animatePopoverExit,
  });

  return (
    <PopoverPortal>
      <PopoverPrimitive.Content
        ref={setContentRef}
        sideOffset={sideOffset}
        className={cn(
          popoverContent({
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
});

const PopoverArrow = forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Arrow>,
  PopoverArrowProps
>(({ className, variant, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    width={12}
    height={6}
    className={cn(
      popoverArrowStyles({
        variant,
      }),
      className,
    )}
    {...props}
  />
));

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
};
