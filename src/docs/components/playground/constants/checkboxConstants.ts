import type { ButtonSize } from '../../../../components/button/button.types';
import type { Control } from '../controls/ControlsRenderer';
import { SIZES } from './btnConstants';

export const CHECKBOX_VARIANTS = ['default'] as const;

export type CheckboxPlaygroundState = {
  size: ButtonSize;
  checked: boolean;
  disabled: boolean;
  error: boolean;

  label: boolean;
  description: boolean;
  errorMessage: boolean;
  leftIcon: boolean;
};

export const CHECKBOX_INITIAL_STATE: CheckboxPlaygroundState = {
  size: 'md',
  checked: false,
  disabled: false,
  error: false,

  label: false,
  description: false,
  errorMessage: false,
  leftIcon: false,
};

export const checkboxControls: Control<CheckboxPlaygroundState>[] = [
  {
    type: 'select',
    key: 'size',
    label: 'Size',
    options: SIZES,
  },
  {
    type: 'checkbox',
    key: 'checked',
    label: 'Checked',
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
  {
    type: 'checkbox',
    key: 'leftIcon',
    label: 'Left Icon',
  },
];
