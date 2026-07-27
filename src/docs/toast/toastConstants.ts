import type { ToastProps } from '../../components/toast/toast.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type ToastPlaygroundState = {
  variant: NonNullable<ToastProps['variant']>;
  size: NonNullable<ToastProps['size']>;
  title: string;
  description: boolean;
  icon: boolean;
  action: boolean;
  showClose: boolean;
};

export const TOAST_INITIAL_STATE: ToastPlaygroundState = {
  variant: 'default',
  size: 'md',
  title: 'Notification title',
  description: true,
  icon: true,
  action: false,
  showClose: true,
};

export const TOAST_CONTROLS: Control<ToastPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: ['default', 'success', 'warning', 'destructive', 'info'],
  },
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: ['sm', 'md', 'lg'],
  },

  {
    type: 'checkbox',
    key: 'description',
    label: 'Show description',
  },
  {
    type: 'checkbox',
    key: 'icon',
    label: 'Show icon',
  },
  {
    type: 'checkbox',
    key: 'action',
    label: 'Show action button',
  },
  {
    type: 'checkbox',
    key: 'showClose',
    label: 'Show close button',
  },
];
