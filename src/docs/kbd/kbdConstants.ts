import type { KbdVariant } from '@/components/kbd/kbd.types';
import type { BasicSize } from '@/components/shared/types';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type KbdPlaygroundState = {
  size: BasicSize;
  variant: KbdVariant;
  group: boolean;
  pressed: boolean;
  inline: boolean;
};

export const KBD_VARIANT_OPTIONS: KbdVariant[] = ['default', 'ghost'];

export const KBD_CHORD = ['⌘', 'K'];

export const KBD_SINGLE = 'K';

export const KBD_INITIAL_STATE: KbdPlaygroundState = {
  size: 'md',
  variant: 'default',
  group: true,
  pressed: false,
  inline: false,
};

export const KBD_CONTROLS = [
  selectControl<KbdPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<KbdPlaygroundState>('variant', 'Variant', KBD_VARIANT_OPTIONS),
  checkboxControl<KbdPlaygroundState>('group', 'Chord'),
  checkboxControl<KbdPlaygroundState>('pressed', 'Pressed'),
  checkboxControl<KbdPlaygroundState>('inline', 'In a sentence'),
];
