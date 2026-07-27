import type {
  InputSize,
  InputVariant,
} from '../../components/input/input.types';
import { SIZES } from '../button/buttonConstants';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export const VARIANTS: InputVariant[] = [
  'default',
  'filled',
  'outline',
  'ghost',
];
export type InputPlaygroundState = {
  variant: InputVariant;
  size: InputSize;
  fullWidth: boolean;
  error: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
  disabled: boolean;
  label: boolean;
  description: boolean;
  errorMessage: boolean;
};

export const INPUT_INITIAL_STATE: InputPlaygroundState = {
  variant: 'default',
  size: 'md',
  fullWidth: false,
  error: false,
  leftIcon: false,
  rightIcon: false,
  disabled: false,
  label: false,
  description: false,
  errorMessage: false,
};

export const inputControls: Control<InputPlaygroundState>[] = [
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
    key: 'error',
    label: 'Error',
  },
  {
    type: 'checkbox',
    key: 'disabled',
    label: 'Disabled',
  },
  {
    type: 'checkbox',
    key: 'fullWidth',
    label: 'Full width',
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
  {
    type: 'checkbox',
    key: 'label',
    label: 'Label',
  },
  {
    type: 'checkbox',
    key: 'description',
    label: 'Description',
  },
  {
    type: 'checkbox',
    key: 'errorMessage',
    label: 'Error message',
  },
];
