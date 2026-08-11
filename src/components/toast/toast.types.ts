import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { toastIconStyles, toastStyles } from './toast.styles';

export type ToastTone = NonNullable<
  VariantProps<typeof toastIconStyles>['tone']
>;

export interface ToastProps
  extends
    VariantProps<typeof toastStyles>,
    VariantProps<typeof toastIconStyles> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
  closing?: boolean;
}
