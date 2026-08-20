import { TOAST_TONES } from '../options';
import {
  BASIC_SIZES,
  classNameProp,
  iconProp,
  sizeProp,
  toneProp,
} from './commonProps';
import { prop } from './helpers';

const toastContentProps = [
  toneProp(TOAST_TONES, 'neutral', 'Colours the icon. The panel stays neutral'),

  sizeProp(BASIC_SIZES, 'md', 'Controls toast size'),

  prop('title', 'string', '-', 'Main title text of the toast'),

  prop(
    'description',
    'string',
    '-',
    'Optional secondary text shown below title',
  ),

  {
    ...iconProp,
    default: 'tone icon',
    description:
      'Icon in the leading slot. Defaults to the icon of the tone; pass null to drop it',
  },

  prop(
    'action',
    'ReactNode',
    '-',
    'Optional action element (button or custom UI)',
  ),
];

export const toastProps = [
  ...toastContentProps,

  prop(
    'onClose',
    '() => void',
    '-',
    'Renders the dismiss button, and fires once the exit animation has finished',
  ),

  prop(
    'closing',
    'boolean',
    'false',
    'Plays the exit animation and then calls onClose. The container sets it; a toast never dismisses itself',
  ),

  classNameProp,
];

export const showToastOptions = [
  ...toastContentProps,

  prop(
    'showClose',
    'boolean',
    'false',
    'Gives the toast an onClose, so the dismiss button appears',
  ),

  prop(
    'duration',
    'number',
    '2000',
    'Time in milliseconds before the toast is automatically dismissed',
  ),
];
