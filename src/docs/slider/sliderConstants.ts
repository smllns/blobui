import type { SliderValue } from '@/components/slider/slider.types';
import type { BasicSize } from '@/components/shared/types';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type SliderStep = '1' | '5' | '10';

export type SliderPlaygroundState = {
  size: BasicSize;
  step: SliderStep;
  range: boolean;
  showValue: boolean;
  label: boolean;
  description: boolean;
  disabled: boolean;
  readOnly: boolean;
  error: boolean;
};

export const SLIDER_STEP_OPTIONS: SliderStep[] = ['1', '5', '10'];

export const SLIDER_SINGLE_VALUE = 40;
export const SLIDER_RANGE_VALUE: [number, number] = [20, 70];

export const defaultSliderValue = (range: boolean): SliderValue =>
  range ? SLIDER_RANGE_VALUE : SLIDER_SINGLE_VALUE;

export const SLIDER_COPY = {
  label: 'Volume',
  description: 'Arrow keys move one step, Page keys ten.',
  errorMessage: 'Pick something under 80 — the room is small.',
};

export const SLIDER_INITIAL_STATE: SliderPlaygroundState = {
  size: 'md',
  step: '1',
  range: false,
  showValue: true,
  label: true,
  description: false,
  disabled: false,
  readOnly: false,
  error: false,
};

export const SLIDER_CONTROLS = [
  selectControl<SliderPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<SliderPlaygroundState>('step', 'Step', SLIDER_STEP_OPTIONS),
  checkboxControl<SliderPlaygroundState>('range', 'Range'),
  checkboxControl<SliderPlaygroundState>('showValue', 'Show value'),
  checkboxControl<SliderPlaygroundState>('label', 'Label'),
  checkboxControl<SliderPlaygroundState>('description', 'Description'),
  checkboxControl<SliderPlaygroundState>('error', 'Error'),
  checkboxControl<SliderPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SliderPlaygroundState>('readOnly', 'Read only'),
];
