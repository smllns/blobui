import type { BadgeProps } from '../../components/badge/badge.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type BadgePlaygroundState = {
  variant: NonNullable<BadgeProps['variant']>;
  size: NonNullable<BadgeProps['size']>;
  leftIcon: boolean;
  rightIcon: boolean;
};

export const BADGE_INITIAL_STATE: BadgePlaygroundState = {
  variant: 'default',
  size: 'md',
  leftIcon: false,
  rightIcon: false,
};

export const BADGE_SIZES = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
] as const;

export const BADGE_CONTROLS: Control<BadgePlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'destructive',
    ],
  },
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: ['sm', 'md', 'lg'],
  },
  {
    type: 'checkbox',
    key: 'leftIcon',
    label: 'Left icon',
  },
  {
    type: 'checkbox',
    key: 'rightIcon',
    label: 'Right icon',
  },
] as const;
