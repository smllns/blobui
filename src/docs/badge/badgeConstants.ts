import type { BadgeProps } from '../../components/badge/badge.types';
import type { ExtendedSize } from '../../components/shared/types';
import { EMPHASIS_OPTIONS, SHAPE_OPTIONS, TONE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type BadgePlaygroundState = {
  tone: NonNullable<BadgeProps['tone']>;
  emphasis: NonNullable<BadgeProps['emphasis']>;
  shape: NonNullable<BadgeProps['shape']>;
  size: Exclude<ExtendedSize, 'xs'>;
  dot: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
};

export const BADGE_INITIAL_STATE: BadgePlaygroundState = {
  tone: 'neutral',
  emphasis: 'soft',
  shape: 'pill',
  size: 'md',
  dot: false,
  leftIcon: false,
  rightIcon: false,
};

export const BADGE_CONTROLS = [
  selectControl<BadgePlaygroundState>('tone', 'Tone', TONE_OPTIONS),
  selectControl<BadgePlaygroundState>('emphasis', 'Emphasis', EMPHASIS_OPTIONS),
  selectControl<BadgePlaygroundState>('shape', 'Shape', SHAPE_OPTIONS),
  selectControl<BadgePlaygroundState>('size', 'Size', ['sm', 'md', 'lg', 'xl']),
  checkboxControl<BadgePlaygroundState>('dot', 'Dot'),
  checkboxControl<BadgePlaygroundState>('leftIcon', 'Left Icon'),
  checkboxControl<BadgePlaygroundState>('rightIcon', 'Right Icon'),
];
