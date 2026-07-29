import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { tooltipContentStyles } from './tooltip.styles';
import type { Align, Side } from '../types';
export interface TooltipProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'content'>,
    VariantProps<typeof tooltipContentStyles> {
  content: ReactNode;
  children: ReactNode;
  side?: Side;
  align?: Align;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  delayDuration?: number;
}
