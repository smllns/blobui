import type {
  Align,
  BasicSize,
  CommonStylingVariant,
  Side,
} from '@/components/shared/types';
import {
  ALIGN_OPTIONS,
  BASIC_SIZE_OPTIONS,
  COMMON_VARIANTS,
  SIDE_OPTIONS,
} from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export const HOVER_CARD_TRIGGER_VARIANTS = ['underline', 'unstyled'];

export type HoverCardPlaygroundState = {
  triggerLabel: string;
  name: string;
  handle: string;
  bio: string;
  triggerVariant: 'unstyled' | 'underline';
  variant: CommonStylingVariant;
  rounded: BasicSize;
  side: Side;
  align: Align;
  sideOffset: string;
  openDelay: 100 | 200 | 300 | 400 | 500;
  closeDelay: 50 | 150 | 250 | 350 | 450;
  loading: boolean;
  showCloseButton: boolean;
};

export const HOVER_CARD_INITIAL_STATE: HoverCardPlaygroundState = {
  triggerLabel: '@priya',
  name: 'Priya Raman',
  handle: '@priya',
  bio: 'Design systems lead. Keeps the tokens honest and the components boring.',
  triggerVariant: 'underline',
  variant: 'default',
  rounded: 'md',
  side: 'bottom',
  align: 'start',
  sideOffset: '6',
  openDelay: 300,
  closeDelay: 150,
  loading: false,
  showCloseButton: false,
};

export const HOVER_CARD_CONTROLS = [
  selectControl<HoverCardPlaygroundState>(
    'triggerVariant',
    'Trigger',
    HOVER_CARD_TRIGGER_VARIANTS,
  ),
  selectControl<HoverCardPlaygroundState>(
    'variant',
    'Variant',
    COMMON_VARIANTS,
  ),
  selectControl<HoverCardPlaygroundState>(
    'rounded',
    'Rounded',
    BASIC_SIZE_OPTIONS,
  ),
  selectControl<HoverCardPlaygroundState>('side', 'Side', SIDE_OPTIONS),
  selectControl<HoverCardPlaygroundState>('align', 'Align', ALIGN_OPTIONS),
  selectControl<HoverCardPlaygroundState>('sideOffset', 'Offset', [
    '0',
    '6',
    '12',
    '24',
    '48',
  ]),
  selectControl<HoverCardPlaygroundState>('openDelay', 'Open Delay', [
    '100',
    '200',
    '300',
    '400',
    '500',
  ]),
  selectControl<HoverCardPlaygroundState>('closeDelay', 'Close Delay', [
    '50',
    '150',
    '250',
    '350',
    '450',
  ]),
  checkboxControl<HoverCardPlaygroundState>('loading', 'Loading'),
  checkboxControl<HoverCardPlaygroundState>('showCloseButton', 'Close Button'),
];
