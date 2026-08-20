import type * as DialogPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';
import type { sheetContentStyles } from './sheet.styles';
import type { Side } from '@/components/shared/types';

export type SheetProps = DialogPrimitive.DialogProps;

export interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    Omit<VariantProps<typeof sheetContentStyles>, 'side'> {
  side?: Side;
  grabber?: boolean;
  showCloseButton?: boolean;
  loading?: boolean;
}

export type SheetTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export type SheetDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;
