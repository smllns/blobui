import type { TooltipProps } from '@/components/tooltip/tooltip.types';

export const previewTooltips: Pick<
  TooltipProps,
  'content' | 'variant' | 'side'
>[] = [
  {
    content: 'Default tooltip',
    variant: 'default',
    side: 'top',
  },
  {
    content: 'Light tooltip',
    variant: 'light',
    side: 'right',
  },
  {
    content: 'Success tooltip',
    variant: 'success',
    side: 'bottom',
  },
  {
    content: 'Destructive tooltip',
    variant: 'destructive',
    side: 'left',
  },
];
