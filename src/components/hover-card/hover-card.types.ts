import type { ReactNode } from 'react';
import type * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import type { VariantProps } from 'class-variance-authority';
import type { Align, Side } from '@/components/shared/types';
import type { ButtonProps } from '@/components/button/button.types';
import type { surfaceStyles } from '@/components/shared/surface.styles';

export interface HoverCardProps extends Omit<
  HoverCardPrimitive.HoverCardProps,
  'open' | 'defaultOpen'
> {
  children: ReactNode;
  open?: boolean;
}

export type HoverCardContextValue = {
  open: boolean;
  coarse: boolean;
  contentId: string;
  setContentRef: (element: HTMLDivElement | null) => void;
  handleOpenChange: (next: boolean) => void;
};

export type HoverCardTriggerProps = Omit<
  ButtonProps,
  'variant' | 'children'
> & {
  variant?: 'unstyled' | 'underline';
  children?: React.ReactNode;
};

export interface HoverCardContentProps
  extends
    Omit<HoverCardPrimitive.HoverCardContentProps, 'asChild'>,
    VariantProps<typeof surfaceStyles> {
  side?: Side;
  align?: Align;
  loading?: boolean;
  showCloseButton?: boolean;
  portal?: boolean;
  positioning?: 'floating' | 'static';
}
