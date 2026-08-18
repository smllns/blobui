import type { ProgressProps } from '@/components/progress/progress.types';
import type { BasicSize } from '@/components/shared/types';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type ProgressTone = NonNullable<ProgressProps['tone']>;

export type ProgressValue = '0' | '25' | '50' | '75' | '100';

export type ProgressPlaygroundState = {
  size: BasicSize;
  tone: ProgressTone;
  value: ProgressValue;
  indeterminate: boolean;
  disabled: boolean;
};

export const PROGRESS_TONE_OPTIONS: ProgressTone[] = [
  'accent',
  'success',
  'warning',
  'danger',
];

export const PROGRESS_VALUE_OPTIONS: ProgressValue[] = [
  '0',
  '25',
  '50',
  '75',
  '100',
];

export const PROGRESS_LABEL = 'Uploading';

export const PROGRESS_INITIAL_STATE: ProgressPlaygroundState = {
  size: 'md',
  tone: 'accent',
  value: '50',
  indeterminate: false,
  disabled: false,
};

export const PROGRESS_CONTROLS = [
  selectControl<ProgressPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<ProgressPlaygroundState>('tone', 'Tone', PROGRESS_TONE_OPTIONS),
  selectControl<ProgressPlaygroundState>(
    'value',
    'Value',
    PROGRESS_VALUE_OPTIONS,
  ),
  checkboxControl<ProgressPlaygroundState>('indeterminate', 'Indeterminate'),
  checkboxControl<ProgressPlaygroundState>('disabled', 'Disabled'),
];
