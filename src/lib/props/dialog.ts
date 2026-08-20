import { childrenProp, classNameProp } from './commonProps';
import { describe, prop } from './helpers';

export const dialogProps = [
  prop(
    'open',
    'boolean',
    '-',
    'Open state, controlled. Left out, the dialog keeps its own and plays the exit animation before it unmounts',
  ),

  prop(
    'onOpenChange',
    '(open: boolean) => void',
    '-',
    'Called with the state asked for by the trigger, the close button, Escape and a click outside. Controlled, it is the only way the dialog closes',
  ),

  prop(
    'modal',
    'boolean',
    'true',
    'Holds focus inside the dialog and makes the rest of the page inert. false leaves the page behind interactive',
  ),

  childrenProp,
];

export const dialogContentProps = [
  prop(
    'size',
    "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    'md',
    'Maximum width of the panel. full fills the viewport',
  ),

  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the panel',
  ),

  prop(
    'padding',
    "'none' | 'sm' | 'md' | 'lg'",
    'md',
    'Inner spacing of the panel',
  ),

  prop(
    'overlay',
    "'dark' | 'light'",
    'dark',
    'Appearance of the scrim. The content mounts its own portal, overlay and positioner, so nothing has to be wrapped around it',
  ),

  prop(
    'showCloseButton',
    'boolean',
    'true',
    'Shows the close button in the top-end corner',
  ),

  describe(
    classNameProp,
    'Additional CSS classes for the panel itself. The overlay and the positioner that centres it are layers of their own',
  ),

  childrenProp,
];

export const dialogFooterProps = [
  prop(
    'surface',
    "'plain' | 'filled'",
    'plain',
    'plain leaves the actions on the panel; filled sets them apart with a hairline and a sunken band that runs to the panel edges',
  ),

  classNameProp,
  childrenProp,
];
