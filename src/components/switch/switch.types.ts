import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { switchStyles } from './switch.styles';
import type { ForceState } from '@/components/shared/types';

type NativeSwitchProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'onChange' | 'children'
>;

export interface SwitchProps
  extends NativeSwitchProps, VariantProps<typeof switchStyles> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  disabled?: boolean;
  forceState?: ForceState;
}
