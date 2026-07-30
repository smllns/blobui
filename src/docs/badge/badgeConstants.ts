import type { BadgeProps } from '../../components/badge/badge.types';
import type { BasicSize } from '../../components/types';
import { BASIC_SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type BadgePlaygroundState = {
  variant: NonNullable<BadgeProps['variant']>;
  size: BasicSize;
  leftIcon: boolean;
  rightIcon: boolean;
};

export const BADGE_INITIAL_STATE: BadgePlaygroundState = {
  variant: 'default',
  size: 'md',
  leftIcon: false,
  rightIcon: false,
};

export const BADGE_CONTROLS = [
  selectControl<BadgePlaygroundState>('variant', 'Variant', [
    'default',
    'secondary',
    'outline',
    'ghost',
    'success',
    'warning',
    'destructive',
  ]),
  selectControl<BadgePlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<BadgePlaygroundState>('leftIcon', 'Left Icon'),
  checkboxControl<BadgePlaygroundState>('rightIcon', 'Right Icon'),
];
