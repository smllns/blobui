import {
  COMMON_VARIANTS,
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  fullWidthProp,
  iconOnlyProp,
  idProp,
  loadingProp,
  onChangeProp,
  placeholderProp,
  readOnlyProp,
  requiredProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const inputGroupProps = [
  variantProp(
    COMMON_VARIANTS,
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

  loadingProp(
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

  readOnlyProp(
    'Keeps the value readable and focusable. The addons keep their fill — the value cannot be edited, the frame is not off',
  ),

  fullWidthProp,
  errorProp,

  placeholderProp(),

  prop('value', 'string', '-', 'Controlled field value'),

  onChangeProp('Change handler for the field value'),

  ...fieldProps,

  requiredProp(
    'Marks the label with an asterisk and sets required on the field',
  ),

  idProp('Id of the field, and the anchor the label and the helper text point at. Falls back to name, then to a generated one'),

  disabledProp,
  forceStateProp,
  classNameProp,
];

export const inputGroupAddonProps = [
  variantProp(
    ['fill', 'bare'],
    'fill',
    'fill is the sunken block with a partition. bare drops both, for a currency symbol or a unit that reads as part of the value',
  ),

  iconOnlyProp(
    'Squares the addon at the shell height, so a row of icon addons stays on the grid',
  ),

  classNameProp,
  childrenProp,
];
