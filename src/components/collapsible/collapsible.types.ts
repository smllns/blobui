import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { ButtonVariant } from '@/components/button/button.types';
import type { ExtendedSize } from '@/components/shared/types';

export type CollapsibleHeadingLevel = 2 | 3 | 4 | 5 | 6;

export type CollapsibleAlign = 'start' | 'end' | 'stretch';

export interface CollapsibleProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> {
  trigger: ReactNode;
  triggerOpen?: ReactNode;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: CollapsibleAlign;
  headingLevel?: CollapsibleHeadingLevel;
  peek?: boolean;
  variant?: ButtonVariant;
  size?: ExtendedSize;
  disabled?: boolean;
  loading?: boolean;
  forceState?: 'hover' | 'active' | 'focus';
}
