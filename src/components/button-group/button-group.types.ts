import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonGroupStyles } from './button-group.styles';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';
export type ButtonGroupGap = 'joined' | 'spaced';

export type ButtonGroupRole = 'group' | 'toolbar';

export interface ButtonGroupProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'role'>,
    VariantProps<typeof buttonGroupStyles> {
  children: ReactNode;
  role?: ButtonGroupRole;
  disabled?: boolean;
  loading?: boolean;
}
