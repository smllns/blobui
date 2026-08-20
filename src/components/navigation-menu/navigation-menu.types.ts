import type * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Align, ForceState } from '@/components/shared/types';

export type NavigationMenuAlign = Extract<Align, 'start' | 'end'>;

export type NavigationMenuColumns = 1 | 2 | 3;

export type NavigationMenuRows = 'auto' | 2 | 3;

export type NavigationMenuProps = Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>,
  'value' | 'onValueChange'
> & {
  defaultValue?: string;
  listClassName?: string;
  children: ReactNode;
};

export type NavigationMenuItemProps = {
  label: ReactNode;
  value?: string;
  align?: NavigationMenuAlign;
  columns?: NavigationMenuColumns;
  rows?: NavigationMenuRows;
  disabled?: boolean;
  forceState?: ForceState;
  className?: string;
  panelClassName?: string;
  gridClassName?: string;
  children: ReactNode;
};

export type NavigationMenuLinkProps = Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>,
  'active'
> & {
  current?: boolean;
  disabled?: boolean;
  forceState?: ForceState;
};

type NavigationMenuCardContent = {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

export type NavigationMenuCardProps = Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>,
  'title' | 'children'
> &
  NavigationMenuCardContent & {
    forceState?: ForceState;
  };

export type NavigationMenuFeatureProps = Omit<
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>,
  'title'
> &
  NavigationMenuCardContent & {
    span?: 'column' | 'cell';
    forceState?: ForceState;
  };
