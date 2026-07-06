import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import type { TooltipProps } from './tooltip.types';
import {
  tooltipArrowStyles,
  tooltipContentStyles,
  tooltipInnerStyles,
} from './tooltip.styles';
import { cn } from '../../lib/cn';

export function Tooltip({
  children,
  content,
  side = 'top',
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

  // ENTER animation
  useEffect(() => {
    if (!open || !contentRef.current) return;
    const el = contentRef.current;
    gsap.set(el, {
      opacity: 0,
      y: 6,
      scale: 0.96,
    });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.18,
      ease: 'power2.out',
    });
  }, [open]);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
      return;
    }

    // EXIT animation BEFORE unmount
    if (!contentRef.current) {
      setOpen(false);
      return;
    }

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 6,
      scale: 0.96,
      duration: 0.12,
      ease: 'power2.in',
      onComplete: () => {
        setOpen(false);
      },
    });
  };

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root open={open} onOpenChange={handleOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={contentRef}
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
