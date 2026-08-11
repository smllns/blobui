import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const TYPE_SCALE = [
  'display-2xl',
  'display-xl',
  'display-lg',
  'heading-xl',
  'heading-lg',
  'heading-md',
  'body-lg',
  'body-md',
  'body-sm',
  'caption',
  'micro',
  'field',
] as const;

const ICON_SCALE = [
  'icon-xs',
  'icon-sm',
  'icon-md',
  'icon-lg',
  'icon-xl',
  'icon-2xl',
];
const CONTROL_SCALE = ['control-sm', 'control-md', 'control-lg', 'control-xl'];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [...TYPE_SCALE] }],
      h: [{ h: [...CONTROL_SCALE, ...ICON_SCALE] }],
      w: [{ w: [...CONTROL_SCALE, ...ICON_SCALE] }],
      size: [{ size: [...ICON_SCALE, ...CONTROL_SCALE] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
