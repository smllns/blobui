import type {
  ButtonSize,
  ButtonVariant,
} from '../../components/button/button.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export const VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'destructive',
];

export const SIZES: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export type PlaygroundState = {
  variant: ButtonVariant;
  size: ButtonSize;
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
};
export const BTN_INITIAL_STATE: PlaygroundState = {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  leftIcon: false,
  rightIcon: false,
};

export const btnControls: Control<PlaygroundState>[] = [
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
    key: 'loading',
    label: 'Loading',
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
];
