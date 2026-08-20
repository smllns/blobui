import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { BasicSize, ForceState } from '@/components/shared/types';

export type TabsOrientation = 'horizontal' | 'vertical';

export type TabsActivation = 'automatic' | 'manual';

export interface TabItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  content?: ReactNode;
  disabled?: boolean;
  forceState?: ForceState;
}

type NativeTabsProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'defaultValue' | 'onChange' | 'children'
>;

export interface TabsProps extends NativeTabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: TabsOrientation;
  size?: BasicSize;
  block?: boolean;
  activation?: TabsActivation;
}
