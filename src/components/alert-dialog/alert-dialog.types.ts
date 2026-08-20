import type * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type { ButtonProps } from '@/components/button/button.types';

export type AlertDialogTone = 'danger' | 'warning' | 'info';

export type AlertDialogProps = AlertDialogPrimitive.AlertDialogProps;

export interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> {
  tone?: AlertDialogTone;
  loading?: boolean;
}

export interface AlertDialogIconProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertDialogTone;
}

export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;

export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>;

export type AlertDialogCancelProps = Omit<ButtonProps, 'ref'>;

export type AlertDialogActionProps = Omit<ButtonProps, 'ref'>;
