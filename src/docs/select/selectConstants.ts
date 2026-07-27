import type {
  SelectSize,
  SelectVariant,
  SelectWidth,
} from '../../components/select/select.types';
import { SIZES } from '../button/buttonConstants';
import type { Control } from '../components/playground/controls/ControlsRenderer';
import { VARIANTS } from '../input/inputConstants';

export type SelectPlaygroundState = {
  variant: SelectVariant;
  size: SelectSize;
  width: SelectWidth;
  disabled: boolean;
  error: boolean;
};

export const SELECT_INITIAL_STATE: SelectPlaygroundState = {
  variant: 'default',
  size: 'md',
  width: 'md',
  disabled: false,
  error: false,
};

export const SELECT_CONTROLS: Control<SelectPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: VARIANTS,
  },
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: SIZES,
  },
  {
    type: 'select',
    key: 'width',
    label: 'Width',
    options: ['auto', 'sm', 'md', 'lg', 'full'],
  },
  {
    type: 'checkbox',
    key: 'disabled',
    label: 'Disabled',
  },
  {
    type: 'checkbox',
    key: 'error',
    label: 'Error',
  },
] as const;
