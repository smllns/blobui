import type { IconSize } from '../../components/shared/types';
import type { AvatarStatus } from '../../components/avatar/avatar.types';
import {
  AVATAR_SHAPE_OPTIONS,
  AVATAR_SIZE_OPTIONS,
  AVATAR_STATUS_OPTIONS,
} from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type AvatarPlaygroundState = {
  shape: (typeof AVATAR_SHAPE_OPTIONS)[number];
  size: IconSize;
  status: AvatarStatus | 'none';
  showImage: boolean;
  fallback: boolean;
};

export const AVATAR_INITIAL_STATE: AvatarPlaygroundState = {
  shape: 'circle',
  size: 'md',
  status: 'none',
  showImage: true,
  fallback: true,
};

export const AVATAR_CONTROLS = [
  selectControl<AvatarPlaygroundState>('shape', 'Shape', [
    ...AVATAR_SHAPE_OPTIONS,
  ]),
  selectControl<AvatarPlaygroundState>('size', 'Size', AVATAR_SIZE_OPTIONS),
  selectControl<AvatarPlaygroundState>('status', 'Status', [
    'none',
    ...AVATAR_STATUS_OPTIONS,
  ]),
  checkboxControl<AvatarPlaygroundState>('showImage', 'Show Image'),
  checkboxControl<AvatarPlaygroundState>('fallback', 'Fallback'),
];
