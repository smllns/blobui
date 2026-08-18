import type { CommonStylingVariant } from '@/components/shared/types';

export const previewPopovers: {
  variant: CommonStylingVariant;
  title: string;
  description: string;
}[] = [
  {
    variant: 'default',
    title: 'Default',
    description: 'A balanced style for most interfaces.',
  },
  {
    variant: 'filled',
    title: 'Filled',
    description: 'Uses a solid background to stand out.',
  },
  {
    variant: 'outline',
    title: 'Outline',
    description: 'Transparent background with a subtle border.',
  },
  {
    variant: 'ghost',
    title: 'Ghost',
    description: 'Minimal appearance with almost no visual chrome.',
  },
];
