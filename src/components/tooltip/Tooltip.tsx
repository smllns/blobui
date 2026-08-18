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
  open: openProp,
  portal = true,
  ...props
}: TooltipProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateTooltipIn,
      animateExit: animateTooltipOut,
    });

  const controlled = openProp !== undefined;

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root
        open={controlled ? openProp : open}
        onOpenChange={controlled ? undefined : handleOpenChange}
        delayDuration={delayDuration}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        {(() => {
          const bubble = (
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
          );

          return portal ? (
            <TooltipPrimitive.Portal>{bubble}</TooltipPrimitive.Portal>
          ) : (
            bubble
          );
        })()}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
