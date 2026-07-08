import type {
  SwitchSize,
  SwitchVariant,
} from '../../../../components/switch/switch.types';
import type { Control } from '../controls/ControlsRenderer';

export type SwitchPlaygroundState = {
  variant: SwitchVariant;
  size: SwitchSize;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};
export const SWITCH_INITIAL_STATE: SwitchPlaygroundState = {
  variant: 'default',
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};
export const switchControls: Control<SwitchPlaygroundState>[] = [
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
