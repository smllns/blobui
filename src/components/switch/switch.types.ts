import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { switchStyles } from './switch.styles';

type NativeSwitchProps = Omit<ComponentPropsWithoutRef<'button'>, 'onChange'>;

export interface SwitchProps
  extends NativeSwitchProps, VariantProps<typeof switchStyles> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;

  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;

  disabled?: boolean;
}
