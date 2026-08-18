import type { EmptyProps, EmptyState } from '@/components/empty/empty.types';
import type { BasicSize } from '@/components/shared/types';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';
import { EMPTY_COPY } from './empty.data';

export type EmptyVariant = NonNullable<EmptyProps['variant']>;

export type EmptyPlaygroundState = {
  state: EmptyState;
  size: BasicSize;
  variant: EmptyVariant;
  icon: boolean;
  text: boolean;
  action: boolean;
};

export const EMPTY_STATE_OPTIONS = Object.keys(EMPTY_COPY) as EmptyState[];

export const EMPTY_VARIANT_OPTIONS: EmptyVariant[] = [
  'plain',
  'bordered',
  'sunken',
];

export const EMPTY_INITIAL_STATE: EmptyPlaygroundState = {
  state: 'no-data',
  size: 'md',
  variant: 'bordered',
  icon: true,
  text: true,
  action: true,
};

export const EMPTY_CONTROLS = [
  selectControl<EmptyPlaygroundState>('state', 'State', EMPTY_STATE_OPTIONS),
  selectControl<EmptyPlaygroundState>(
    'variant',
    'Variant',
    EMPTY_VARIANT_OPTIONS,
  ),
  selectControl<EmptyPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<EmptyPlaygroundState>('icon', 'Icon'),
  checkboxControl<EmptyPlaygroundState>('text', 'Body copy'),
  checkboxControl<EmptyPlaygroundState>('action', 'Action'),
];
