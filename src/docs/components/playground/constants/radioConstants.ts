import type { RadioSize, RadioVariant } from '../../../../components/radio';
import type { Control } from '../controls/ControlsRenderer';

export type RadioPlaygroundState = {
  variant: RadioVariant;
  size: RadioSize;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};
export const RADIO_INITIAL_STATE: RadioPlaygroundState = {
  variant: 'default',
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};
export const radioControls: Control<RadioPlaygroundState>[] = [
  {
    key: 'variant',
    type: 'select',
    label: 'Variant',
    options: ['default', 'filled', 'outline', 'ghost'],
  },

  {
    key: 'size',
    type: 'select',
    label: 'Size',
    options: ['sm', 'md', 'lg'],
  },

  {
    key: 'checked',
    type: 'checkbox',
    label: 'Checked',
  },
  {
    key: 'disabled',
    type: 'checkbox',
    label: 'Disabled',
  },
  {
    key: 'label',
    type: 'checkbox',
    label: 'Label',
  },

  {
    key: 'description',
    type: 'checkbox',
    label: 'Description',
  },

  {
    key: 'error',
    type: 'checkbox',
    label: 'Error',
  },
  {
    key: 'errorMessage',
    type: 'checkbox',
    label: 'Error Message',
  },
];
