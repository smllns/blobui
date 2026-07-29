import type { AccordionProps } from '../../components/accordion/accordion.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type AccordionPlaygroundState = {
  variant: NonNullable<AccordionProps['variant']>;
  type: NonNullable<AccordionProps['type']>;
  collapsible: boolean;
  disabledItem: boolean;
};

export const ACCORDION_INITIAL_STATE: AccordionPlaygroundState = {
  variant: 'default',
  type: 'single',
  collapsible: true,
  disabledItem: false,
};

export const ACCORDION_CONTROLS: Control<AccordionPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: ['default', 'filled', 'outline', 'ghost'],
  },
  {
    type: 'select',
    key: 'type',
    label: 'Type',
    options: ['single', 'multiple'],
  },
  {
    type: 'checkbox',
    key: 'collapsible',
    label: 'Collapsible',
  },
  {
    type: 'checkbox',
    key: 'disabledItem',
    label: 'Disabled item',
  },
] as const;
