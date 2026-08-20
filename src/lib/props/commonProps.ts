import { prop, union } from './helpers';

export {
  BASIC_SIZE_OPTIONS as BASIC_SIZES,
  CHOICE_SIZE_OPTIONS as CHOICE_SIZES,
  COMMON_VARIANTS,
  SIZE_OPTIONS as EXTENDED_SIZES,
} from '../options';

const ORIENTATIONS = ['horizontal', 'vertical'] as const;

export const classNameProp = prop(
  'className',
  'string',
  '-',
  'Additional CSS classes for customization',
);

export const childrenProp = prop(
  'children',
  'ReactNode',
  '-',
  'Content displayed inside the component',
);

export const disabledProp = prop(
  'disabled',
  'boolean',
  'false',
  'Disables component interaction',
);

export const fieldPropsOf = (type = 'string') => [
  prop('label', type, '-', 'Label for the component'),

  prop('description', type, '-', 'Helper text for the component'),

  prop(
    'errorMessage',
    type,
    '-',
    'Error message for the component that overrides description',
  ),
];

export const fieldProps = fieldPropsOf();

export const leftIconProp = prop(
  'leftIcon',
  'ReactNode',
  '-',
  'Icon displayed before content',
);
export const iconProp = prop(
  'icon',
  'ReactNode',
  '-',
  'Icon displayed before content',
);

export const rightIconProp = prop(
  'rightIcon',
  'ReactNode',
  '-',
  'Icon displayed after content',
);

export const errorProp = prop(
  'error',
  'boolean',
  'false',
  'Applies error styling to the component',
);

export const fullWidthProp = prop(
  'fullWidth',
  'boolean',
  'false',
  'Makes the component take full width',
);

export const sideProp = prop(
  'side',
  "'top' | 'right' | 'bottom' | 'left'",
  'bottom',
  'Preferred side where the component appears',
);

export const alignProp = prop(
  'align',
  "'start' | 'center' | 'end'",
  'center',
  'Alignment of the component relative to trigger',
);
export const forceStateProp = prop(
  'forceState',
  "'hover' | 'active' | 'focus'",
  'undefined',
  'Paints a pointer state on the trigger that a document cannot produce. Docs and visual tests only',
);

export const portalProp = prop(
  'portal',
  'boolean',
  'true',
  "Renders the panel in a portal to <body>, so no clipping or stacking ancestor can cut it off. false keeps it in the trigger's own subtree, where it clips and scrolls with its container — for specimens",
);

export const sizeProp = (
  sizes: readonly string[],
  defaultSize = 'md',
  description = 'Controls component size',
) => prop('size', union(sizes), defaultSize, description);

export const variantProp = (
  variants: readonly string[],
  defaultVariant = 'default',
  description = 'Visual style of the component',
) => prop('variant', union(variants), defaultVariant, description);

export const toneProp = (
  tones: readonly string[],
  defaultTone = 'neutral',
  description = 'Meaning of the component. Sets its colour',
) => prop('tone', union(tones), defaultTone, description);

export const orientationProp = (
  description = 'Axis the component is laid out along',
  defaultOrientation = 'horizontal',
) => prop('orientation', union(ORIENTATIONS), defaultOrientation, description);

export const loadingProp = (
  description = 'Shows a spinner in place of the leading icon and disables interaction',
) => prop('loading', 'boolean', 'false', description);

export const readOnlyProp = (
  description = 'Keeps the value readable and focusable, without the edit affordance',
) => prop('readOnly', 'boolean', 'false', description);

export const blockProp = (
  description = 'Stretches the component to its container and gives every member an equal share of it',
) => prop('block', 'boolean', 'false', description);

export const iconOnlyProp = (
  description = 'Square icon-only control. Needs an aria-label',
) => prop('iconOnly', 'boolean', 'false', description);

export const requiredProp = (
  description = 'Marks the label with an asterisk and sets required on the control',
) => prop('required', 'boolean', 'false', description);

export const idProp = (
  description = 'Id of the control, and the anchor the label and the helper text point at',
  defaultId = 'generated',
) => prop('id', 'string', defaultId, description);

export const placeholderProp = (
  description = 'Placeholder text shown when the field is empty',
) => prop('placeholder', 'string', '-', description);

export const hrefProp = (description = 'Destination of the link') =>
  prop('href', 'string', '-', description);

export const checkedProp = (
  description = 'Controlled checked state of the component',
  defaultChecked = '-',
) => prop('checked', 'boolean', defaultChecked, description);

export const onChangeProp = (
  description = 'Change handler for the value',
  type = '(e: React.ChangeEvent<HTMLInputElement>) => void',
) => prop('onChange', type, '-', description);

export const openProp = (
  description = 'Controls the open state',
  defaultOpen = '-',
) => prop('open', 'boolean', defaultOpen, description);

export const defaultOpenProp = (
  description = 'Open state before any interaction',
) => prop('defaultOpen', 'boolean', 'false', description);

export const onOpenChangeProp = (
  description = 'Callback fired when the open state changes',
) => prop('onOpenChange', '(open: boolean) => void', '-', description);

export const controlledValueProps = ({
  type,
  value,
  defaultValue,
  onValueChange,
  initial = '-',
  changeType = `(value: ${type}) => void`,
}: {
  type: string;
  value: string;
  defaultValue: string;
  onValueChange: string;
  initial?: string;
  changeType?: string;
}) => [
  prop('value', type, '-', value),

  prop('defaultValue', type, initial, defaultValue),

  prop('onValueChange', changeType, '-', onValueChange),
];
