import type {
  SelectSize,
  SelectVariant,
} from '../../../../components/select/select.types';
import type { Control } from '../controls/ControlsRenderer';
import { SIZES } from './btnConstants';
import { VARIANTS } from './inputConstants';

export type SelectPlaygroundState = {
  variant: SelectVariant;
  size: SelectSize;
  fullWidth: boolean;
  disabled: boolean;
  error: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
};

export const SELECT_INITIAL_STATE: SelectPlaygroundState = {
  variant: 'default',
  size: 'md',
  fullWidth: false,
  disabled: false,
  error: false,
  leftIcon: false,
  rightIcon: false,
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
    type: 'checkbox',
    key: 'fullWidth',
    label: 'Full width',
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
  {
    type: 'checkbox',
    key: 'leftIcon',
    label: 'Left icon',
  },
  {
    type: 'checkbox',
    key: 'rightIcon',
    label: 'Right icon',
  },
] as const;
