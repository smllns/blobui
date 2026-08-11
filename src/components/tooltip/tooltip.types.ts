import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { tooltipStyles } from './tooltip.styles';
import type { Align, Side } from '@/components/shared/types';

export interface TooltipProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'content'>,
    VariantProps<typeof tooltipStyles> {
  content: ReactNode;
  children: ReactNode;
  side?: Side;
  align?: Align;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  delayDuration?: number;
}
