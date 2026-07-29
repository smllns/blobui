import type { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { toastStyles } from './toast.styles';

export interface ToastProps extends VariantProps<typeof toastStyles> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
  closing?: boolean;
}
