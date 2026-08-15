import type { ResizableOrientation } from '@/components/resizable/resizable.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type ResizablePlaygroundState = {
  orientation: ResizableOrientation;
  collapsible: boolean;
  disabled: boolean;
};

export const RESIZABLE_ORIENTATIONS: ResizableOrientation[] = [
  'horizontal',
  'vertical',
];

export const RESIZABLE_INITIAL_STATE: ResizablePlaygroundState = {
  orientation: 'horizontal',
  collapsible: false,
  disabled: false,
};

export const RESIZABLE_CONTROLS = [
  selectControl<ResizablePlaygroundState>(
    'orientation',
    'Orientation',
    RESIZABLE_ORIENTATIONS,
  ),
  checkboxControl<ResizablePlaygroundState>(
    'collapsible',
    'Collapsible first panel',
  ),
  checkboxControl<ResizablePlaygroundState>('disabled', 'Disabled'),
];
