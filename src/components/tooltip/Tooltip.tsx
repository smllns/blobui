import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
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
