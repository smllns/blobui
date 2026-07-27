import type { DialogContentProps } from '../../components/dialog/dialog.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type DialogPlaygroundState = {
  size: NonNullable<DialogContentProps['size']>;
  variant: NonNullable<DialogContentProps['variant']>;
  overlay: NonNullable<DialogContentProps['overlay']>;
  padding: NonNullable<DialogContentProps['padding']>;
  showCloseButton: boolean;
};

export const DIALOG_SIZES = ['sm', 'md', 'lg', 'xl', 'full'];

export const DIALOG_VARIANTS = ['default', 'filled', 'outline', 'ghost'];

export const DIALOG_OVERLAYS = ['dark', 'light'];

export const DIALOG_PADDINGS = ['none', 'sm', 'md', 'lg'];

export const DIALOG_INITIAL_STATE: DialogPlaygroundState = {
  size: 'md',
  variant: 'default',
  overlay: 'dark',
  padding: 'md',
  showCloseButton: true,
};

export const DIALOG_CONTROLS: Control<DialogPlaygroundState>[] = [
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: DIALOG_SIZES,
  },
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: DIALOG_VARIANTS,
  },
  {
    type: 'select',
    key: 'overlay',
    label: 'Overlay',
    options: DIALOG_OVERLAYS,
  },
  {
    type: 'select',
    key: 'padding',
    label: 'Padding',
    options: DIALOG_PADDINGS,
  },
  {
    type: 'checkbox',
    key: 'showCloseButton',
    label: 'Close button',
  },
];
