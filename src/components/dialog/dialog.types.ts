import type * as DialogPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

import {
  dialogContentStyles,
  dialogFooterStyles,
  dialogOverlayStyles,
} from './dialog.styles';

export interface DialogContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentStyles> {
  overlay?: 'dark' | 'light';
  showCloseButton?: boolean;
}

export interface DialogOverlayProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
    VariantProps<typeof dialogOverlayStyles> {}

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export type DialogBodyProps = React.HTMLAttributes<HTMLDivElement>;

export interface DialogFooterProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogFooterStyles> {}

export type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;
