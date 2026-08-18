import type {
  ToggleSize,
  ToggleVariant,
} from '@/components/toggle/toggle.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type TogglePlaygroundState = {
  variant: ToggleVariant;
  size: ToggleSize;
  pressed: boolean;
  iconOnly: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
  loading: boolean;
  disabled: boolean;
};

export const TOGGLE_VARIANT_OPTIONS: ToggleVariant[] = ['default', 'outline'];

export const TOGGLE_SIZE_OPTIONS: ToggleSize[] = ['sm', 'md', 'lg', 'xl'];

export const TOGGLE_COPY = {
  label: 'Show archived',
  iconLabel: 'Bold',
};

export const TOGGLE_INITIAL_STATE: TogglePlaygroundState = {
  variant: 'default',
  size: 'md',
  pressed: false,
  iconOnly: false,
  leftIcon: true,
  rightIcon: false,
  loading: false,
  disabled: false,
};

export const TOGGLE_CONTROLS = [
  selectControl<TogglePlaygroundState>(
    'variant',
    'Variant',
    TOGGLE_VARIANT_OPTIONS,
  ),
  selectControl<TogglePlaygroundState>('size', 'Size', TOGGLE_SIZE_OPTIONS),
  checkboxControl<TogglePlaygroundState>('pressed', 'Pressed'),
  checkboxControl<TogglePlaygroundState>('iconOnly', 'Icon only'),
  checkboxControl<TogglePlaygroundState>('leftIcon', 'Left icon'),
  checkboxControl<TogglePlaygroundState>('rightIcon', 'Right icon'),
  checkboxControl<TogglePlaygroundState>('loading', 'Loading'),
  checkboxControl<TogglePlaygroundState>('disabled', 'Disabled'),
];
