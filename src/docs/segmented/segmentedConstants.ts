import type {
  SegmentedItem,
  SegmentedType,
} from '@/components/segmented/segmented.types';
import type { BasicSize } from '@/components/shared/types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';
import { VIEWS } from './segmented.data';

export const PLAIN: SegmentedItem[] = VIEWS.map(({ value, label }) => ({
  value,
  label,
}));

export type SegmentedPlaygroundState = {
  type: SegmentedType;
  size: BasicSize;
  block: boolean;
  icons: boolean;
  disabled: boolean;
  readOnly: boolean;
  loading: boolean;
};

export const SEGMENTED_INITIAL_STATE: SegmentedPlaygroundState = {
  type: 'single',
  size: 'md',
  block: false,
  icons: false,
  disabled: false,
  readOnly: false,
  loading: false,
};

export const SEGMENTED_TYPES: SegmentedType[] = ['single', 'multiple'];

export const SEGMENTED_CONTROLS = [
  selectControl<SegmentedPlaygroundState>('type', 'Type', SEGMENTED_TYPES),
  selectControl<SegmentedPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<SegmentedPlaygroundState>('block', 'Block'),
  checkboxControl<SegmentedPlaygroundState>('icons', 'Icons'),
  checkboxControl<SegmentedPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SegmentedPlaygroundState>('readOnly', 'Read only'),
  checkboxControl<SegmentedPlaygroundState>('loading', 'Loading'),
];
