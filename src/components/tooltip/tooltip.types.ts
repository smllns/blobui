import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { tooltipContentStyles } from './tooltip.styles';
export type TooltipVariant = 'default' | 'light' | 'success' | 'destructive';
export type TooltipSize = 'sm' | 'md' | 'lg';
export interface TooltipProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'content'>,
    VariantProps<typeof tooltipContentStyles> {
  content: ReactNode;
  children: ReactNode;

  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';

  startIcon?: ReactNode;
  endIcon?: ReactNode;
  delayDuration?: number;
}
