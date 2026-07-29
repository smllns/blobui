import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { radioStyles } from './radio.styles';

type NativeRadioProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'>;

export interface RadioProps
  extends NativeRadioProps, VariantProps<typeof radioStyles> {
  label?: ReactNode;
  description?: ReactNode;
  error?: boolean;
  errorMessage?: ReactNode;
}
