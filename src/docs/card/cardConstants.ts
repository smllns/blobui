import type { CardProps } from '@/components/card/card.types';
import { selectControl } from '../components/playground/controls/controlHelpers';

export type CardPlaygroundState = {
  variant: NonNullable<CardProps['variant']>;
  padding: NonNullable<CardProps['padding']>;
};

export const CARD_INITIAL_STATE: CardPlaygroundState = {
  variant: 'default',
  padding: 'md',
};

export const CARD_CONTROLS = [
  selectControl<CardPlaygroundState>('variant', 'Variant', [
    'default',
    'filled',
    'outline',
    'ghost',
    'elevated',
  ]),
  selectControl<CardPlaygroundState>('padding', 'Padding', [
    'none',
    'sm',
    'md',
    'lg',
  ]),
];
