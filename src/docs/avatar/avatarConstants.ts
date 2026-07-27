import type { AvatarProps } from '../../components/avatar/avatar.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type AvatarPlaygroundState = {
  variant: NonNullable<AvatarProps['variant']>;
  size: NonNullable<AvatarProps['size']>;
  showImage: boolean;
  fallback: boolean;
};

export const AVATAR_INITIAL_STATE: AvatarPlaygroundState = {
  variant: 'default',
  size: 'md',
  showImage: true,
  fallback: true,
};

export const AVATAR_CONTROLS: Control<AvatarPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: ['default', 'outline', 'soft', 'ghost'],
  },
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  {
    type: 'checkbox',
    key: 'showImage',
    label: 'Show image',
  },
  {
    type: 'checkbox',
    key: 'fallback',
    label: 'Fallback',
  },
] as const;
