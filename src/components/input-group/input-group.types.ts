import type {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { CommonStylingVariant } from '@/components/shared/types';
import { inputGroupAddonStyles } from './input-group.styles';

export type InputGroupSide = 'leading' | 'trailing';

export type InputGroupAddonVariant = NonNullable<
  VariantProps<typeof inputGroupAddonStyles>['variant']
>;

export interface InputGroupProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'children'
> {
  variant?: CommonStylingVariant;
  fullWidth?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  error?: boolean;
  loading?: boolean;
  loadingSide?: InputGroupSide;
  loadingLabel?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  required?: boolean;
  id?: string;
  forceState?: 'hover' | 'active' | 'focus';
}

export interface InputGroupAddonProps
  extends
    ComponentPropsWithoutRef<'span'>,
    VariantProps<typeof inputGroupAddonStyles> {
  children?: ReactNode;
}
