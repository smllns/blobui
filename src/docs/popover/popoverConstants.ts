import type { PopoverContentProps } from '../../components/popover/popover.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type PopoverPlaygroundState = {
  title: string;
  description: string;
  variant: NonNullable<PopoverContentProps['variant']>;
  size: NonNullable<PopoverContentProps['size']>;
  rounded: NonNullable<PopoverContentProps['rounded']>;
  side: 'top' | 'right' | 'bottom' | 'left';
  align: 'start' | 'center' | 'end';
  sideOffset: string;
  showArrow: boolean;
};

export const POPOVER_INITIAL_STATE: PopoverPlaygroundState = {
  title: 'Popover',
  description: 'This is some popover content.',
  variant: 'default',
  size: 'md',
  rounded: 'md',
  side: 'bottom',
  align: 'center',
  sideOffset: '8',
  showArrow: true,
};

export const popoverControls: Control<PopoverPlaygroundState>[] = [
  {
    key: 'variant',
    label: 'Variant',
    type: 'select',
    options: ['default', 'filled', 'outline', 'ghost'],
  },

  {
    key: 'size',
    label: 'Size',
    type: 'select',
    options: ['sm', 'md', 'lg'],
  },

  {
    key: 'rounded',
    label: 'Rounded',
    type: 'select',
    options: ['sm', 'md', 'lg'],
  },

  {
    key: 'side',
    label: 'Side',
    type: 'select',
    options: ['top', 'right', 'bottom', 'left'],
  },

  {
    key: 'align',
    label: 'Align',
    type: 'select',
    options: ['start', 'center', 'end'],
  },

  {
    key: 'sideOffset',
    label: 'Offset',
    type: 'select',
    options: ['0', '4', '8', '12', '16', '24'],
  },

  {
    key: 'showArrow',
    label: 'Arrow',
    type: 'checkbox',
  },
];
