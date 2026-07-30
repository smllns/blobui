import type { TooltipProps } from '../../components/tooltip/tooltip.types';
import type { Align, BasicSize, Side } from '../../components/types';
import {
  ALIGN_OPTIONS,
  BASIC_SIZE_OPTIONS,
  SIDE_OPTIONS,
} from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type TooltipPlaygroundState = {
  content: string;
  variant: NonNullable<TooltipProps['variant']>;
  size: BasicSize;
  side: Side;
  align: Align;
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

export const TOOLTIP_CONTROLS = [
  selectControl<TooltipPlaygroundState>('variant', 'Variant', [
    'default',
    'light',
    'success',
    'destructive',
  ]),
  selectControl<TooltipPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<TooltipPlaygroundState>('side', 'Side', SIDE_OPTIONS),
  selectControl<TooltipPlaygroundState>('align', 'Align', ALIGN_OPTIONS),
  checkboxControl<TooltipPlaygroundState>('startIcon', 'Start Icon'),
  checkboxControl<TooltipPlaygroundState>('endIcon', 'End Icon'),
];
