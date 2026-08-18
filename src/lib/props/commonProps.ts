import { prop } from './helpers';

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

export const fieldProps = [
  prop('label', 'string', '-', 'Label for the component'),

  prop('description', 'string', '-', 'Helper text for the component'),

  prop(
    'errorMessage',
    'string',
    '-',
    'Error message for the component that overrides description',
  ),
];

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
