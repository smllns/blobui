import type {
  TooltipSize,
  TooltipVariant,
} from '../../components/tooltip/tooltip.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type TooltipPlaygroundState = {
  content: string;
  variant: TooltipVariant;
  size: TooltipSize;
  side: 'top' | 'right' | 'bottom' | 'left';
  align: 'start' | 'center' | 'end';

  startIcon: boolean;
  endIcon: boolean;
};
export const TOOLTIP_INITIAL_STATE: TooltipPlaygroundState = {
  content: 'This is a tooltip!',
  variant: 'default',
  size: 'md',
  side: 'bottom',
  align: 'center',

  startIcon: false,
  endIcon: false,
};
export const tooltipControls: Control<TooltipPlaygroundState>[] = [
  {
    key: 'variant',
    type: 'select',
    label: 'Variant',
    options: ['default', 'light', 'success', 'destructive'],
  },

  {
    key: 'size',
    type: 'select',
    label: 'Size',
    options: ['sm', 'md', 'lg'],
  },

  {
    key: 'side',
    type: 'select',
    label: 'Side',
    options: ['top', 'right', 'bottom', 'left'],
  },

  {
    key: 'align',
    type: 'select',
    label: 'Align',
    options: ['start', 'center', 'end'],
  },

  {
    key: 'startIcon',
    type: 'checkbox',
    label: 'Start icon',
  },

  {
    key: 'endIcon',
    type: 'checkbox',
    label: 'End icon',
  },
];
