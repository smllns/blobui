import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { TooltipProps } from './tooltip.types';
import {
  tooltipArrowStyles,
  tooltipStyles,
  tooltipInnerStyles,
} from './tooltip.styles';
import { cn } from '@/lib/cn';
import { animateTooltipIn, animateTooltipOut } from './tooltip.animation';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';

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
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateTooltipIn,
      animateExit: animateTooltipOut,
    });

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
            ref={setContentRef}
            side={side}
            align={align}
            sideOffset={8}
            className={cn(tooltipStyles({ variant, size }), className)}
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
