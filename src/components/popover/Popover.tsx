import * as PopoverPrimitive from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import { mergeRefs } from '@/lib/mergeRefs';
import type { PopoverArrowProps, PopoverContentProps } from './popover.types';
import { popoverArrowStyles, popoverContent } from './popover.styles';
import { animatePopoverEnter, animatePopoverExit } from './popover.animations';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';

const Popover = ({
  children,
  open: openProp,
  onOpenChange,
  ...props
}: PopoverPrimitive.PopoverProps) => {
  const { open, handleOpenChange } = useAnimatedOpen<HTMLDivElement>({
    animateEnter: animatePopoverEnter,
    animateExit: animatePopoverExit,
  });

  const controlled = openProp !== undefined;

  return (
    <PopoverPrimitive.Root
      open={controlled ? openProp : open}
      onOpenChange={(next) => {
        if (!controlled) handleOpenChange(next);

        onOpenChange?.(next);
      }}
      {...props}
    >
      {children}
    </PopoverPrimitive.Root>
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
    {
      className,
      variant,
      size,
      rounded,
      sideOffset = 8,
      portal = true,
      ...props
    },
    ref,
  ) => {
    const { setContentRef } = useAnimatedOpen<HTMLDivElement>({
      animateEnter: animatePopoverEnter,
      animateExit: animatePopoverExit,
    });

    const content = (
      <PopoverPrimitive.Content
        ref={mergeRefs(setContentRef, ref)}
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
    );
    return portal ? <PopoverPortal>{content}</PopoverPortal> : content;
  },
);

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
