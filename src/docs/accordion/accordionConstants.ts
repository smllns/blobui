import type { AccordionProps } from '../../components/accordion/accordion.types';
import type { CommonStylingVariant } from '../../components/types';
import { COMMON_VARIANTS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type AccordionPlaygroundState = {
  variant: CommonStylingVariant;
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

export const ACCORDION_CONTROLS = [
  selectControl<AccordionPlaygroundState>(
    'variant',
    'Variant',
    COMMON_VARIANTS,
  ),
  selectControl<AccordionPlaygroundState>('type', 'Type', [
    'single',
    'multiple',
  ]),
  checkboxControl<AccordionPlaygroundState>('collapsible', 'Collapsible'),
  checkboxControl<AccordionPlaygroundState>('disabledItem', 'Disabled Item'),
];
