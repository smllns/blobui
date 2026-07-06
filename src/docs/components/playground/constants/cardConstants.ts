import type { CardProps } from '../../../../components/card/card.types';
import type { Control } from '../controls/ControlsRenderer';

export type CardPlaygroundState = {
  variant: NonNullable<CardProps['variant']>;
  padding: NonNullable<CardProps['padding']>;
};

export const CARD_INITIAL_STATE: CardPlaygroundState = {
  variant: 'default',
  padding: 'md',
};

export const CARD_CONTROLS: Control<CardPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: ['default', 'filled', 'outline', 'ghost', 'elevated'],
  },
  {
    type: 'select',
    key: 'padding',
    label: 'Padding',
    options: ['none', 'sm', 'md', 'lg'],
  },
] as const;
