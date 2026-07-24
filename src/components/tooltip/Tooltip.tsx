import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useRef, useState } from 'react';
import type { TooltipProps } from './tooltip.types';
import {
  tooltipArrowStyles,
  tooltipContentStyles,
  tooltipInnerStyles,
} from './tooltip.styles';
import { cn } from '../../lib/cn';
import { animateTooltipIn, animateTooltipOut } from './tooltip.animation';

export function Tooltip({
  children,
  content,
  side = 'bottom',
  align = 'center',
  delayDuration = 200,
  variant,
  size,
  startIcon,
  endIcon,
  className,
  ...props
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleContentRef = (element: HTMLDivElement | null) => {
    contentRef.current = element;

    if (!element) return;

    animateTooltipIn(element);
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

    animateTooltipOut(element, () => {
      setOpen(false);
    });
  };

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        delayDuration={delayDuration}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={handleContentRef}
            side={side}
            align={align}
            sideOffset={8}
            className={cn(tooltipContentStyles({ variant, size }), className)}
            {...props}
          >
            <div className={tooltipInnerStyles}>
              {startIcon && <span className='shrink-0'>{startIcon}</span>}

              <span>{content}</span>

              {endIcon && <span className='shrink-0'>{endIcon}</span>}
            </div>

            <TooltipPrimitive.Arrow
              width={10}
              height={5}
              className={tooltipArrowStyles({ variant })}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
