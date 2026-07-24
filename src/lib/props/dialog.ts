import { childrenProp, classNameProp } from './commonProps';
import { prop } from './helpers';

export const dialogProps = [
  prop('open', 'boolean', '-', 'Controls dialog open state'),

  prop(
    'onOpenChange',
    '(open: boolean) => void',
    '-',
    'Callback fired when dialog open state changes',
  ),
  childrenProp,
];

export const dialogContentProps = [
  prop(
    'size',
    "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    'md',
    'Controls dialog width',
  ),

  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the dialog content',
  ),

  prop(
    'padding',
    "'none' | 'sm' | 'md' | 'lg'",
    'md',
    'Controls inner spacing of the dialog content',
  ),

  prop(
    'overlay',
    "'dark' | 'light'",
    'dark',
    'Controls dialog overlay appearance',
  ),

  prop(
    'showCloseButton',
    'boolean',
    'true',
    'Shows close button in the top-right corner',
  ),

  classNameProp,
  childrenProp,
];
