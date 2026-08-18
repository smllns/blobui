import {
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  fullWidthProp,
} from './commonProps';
import { prop } from './helpers';

export const inputGroupProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the shell, shared with Input',
  ),

  prop(
    'leading',
    'ReactNode',
    '-',
    'Addon before the field. A string is wrapped in an addon; a Button or a Select is placed as it is and becomes a region of the shell',
  ),

  prop(
    'trailing',
    'ReactNode',
    '-',
    'Addon after the field, same rules as leading',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'An addon is resolving something — a domain check, a unit conversion. The spinner takes over a slot, the shell drops to the disabled paint, and the group stops taking pointers',
  ),

  prop(
    'loadingSide',
    "'leading' | 'trailing'",
    'trailing',
    'Which slot the spinner takes over. The addon that was there is replaced for the duration',
  ),

  prop(
    'loadingLabel',
    'string',
    'Loading',
    'What a screen reader is told while loading. aria-busy suppresses the group, so this sentence is the only signal — say what is being resolved',
  ),

  prop(
    'readOnly',
    'boolean',
    'false',
    'Keeps the value readable and focusable. The addons keep their fill — the value cannot be edited, the frame is not off',
  ),

  fullWidthProp,
  errorProp,

  prop(
    'placeholder',
    'string',
    '-',
    'Placeholder text shown when the field is empty',
  ),

  prop('value', 'string', '-', 'Controlled field value'),

  prop(
    'onChange',
    '(e: React.ChangeEvent<HTMLInputElement>) => void',
    '-',
    'Change handler for the field value',
  ),

  ...fieldProps,
  disabledProp,
  forceStateProp,
  classNameProp,
];

export const inputGroupAddonProps = [
  prop(
    'variant',
    "'fill' | 'bare'",
    'fill',
    'fill is the sunken block with a partition. bare drops both, for a currency symbol or a unit that reads as part of the value',
  ),

  prop(
    'iconOnly',
    'boolean',
    'false',
    'Squares the addon at the shell height, so a row of icon addons stays on the grid',
  ),

  classNameProp,
  childrenProp,
];
