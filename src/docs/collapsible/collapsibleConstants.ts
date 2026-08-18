import type { ButtonVariant } from '@/components/button/button.types';
import type { CollapsibleAlign } from '@/components/collapsible/collapsible.types';
import type { ExtendedSize } from '@/components/shared/types';
import { SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type CollapsiblePlaygroundState = {
  variant: ButtonVariant;
  size: ExtendedSize;
  align: CollapsibleAlign;
  open: boolean;
  peek: boolean;
  disabled: boolean;
  loading: boolean;
};

export const COLLAPSIBLE_VARIANTS: ButtonVariant[] = [
  'ghost',
  'outline',
  'soft',
  'secondary',
  'primary',
  'link',
];

export const COLLAPSIBLE_ALIGN_OPTIONS: CollapsibleAlign[] = [
  'start',
  'end',
  'stretch',
];

export const COLLAPSIBLE_INITIAL_STATE: CollapsiblePlaygroundState = {
  variant: 'ghost',
  size: 'md',
  align: 'start',
  open: false,
  peek: false,
  disabled: false,
  loading: false,
};

export const COLLAPSIBLE_CONTROLS = [
  selectControl<CollapsiblePlaygroundState>(
    'variant',
    'Variant',
    COLLAPSIBLE_VARIANTS,
  ),
  selectControl<CollapsiblePlaygroundState>('size', 'Size', SIZE_OPTIONS),
  selectControl<CollapsiblePlaygroundState>(
    'align',
    'Align',
    COLLAPSIBLE_ALIGN_OPTIONS,
  ),
  checkboxControl<CollapsiblePlaygroundState>('open', 'Open'),
  checkboxControl<CollapsiblePlaygroundState>('peek', 'Peek'),
  checkboxControl<CollapsiblePlaygroundState>('disabled', 'Disabled'),
  checkboxControl<CollapsiblePlaygroundState>('loading', 'Loading'),
];

export const COLLAPSIBLE_COPY = {
  trigger: 'Read more',
  triggerOpen: 'Read less',
  body:
    'A collapsible is one disclosure with no frame, no siblings and no ' +
    'exclusivity. Reach for it when a block of content is worth offering but ' +
    'not worth showing by default: a truncated description, a set of advanced ' +
    'options, the rest of a thread.',
};
