import type { ToastProps } from '../../components/toast/toast.types';

export const previewToasts: Pick<
  ToastProps,
  'variant' | 'title' | 'description' | 'icon'
>[] = [
  {
    variant: 'default',
    title: 'Default toast',
    description: 'This is a default notification',
    icon: '🔔',
  },
  {
    variant: 'success',
    title: 'Success',
    description: 'Everything worked correctly',
    icon: '✅',
  },
  {
    variant: 'warning',
    title: 'Warning',
    description: 'Something might need attention',
    icon: '⚠️',
  },
  {
    variant: 'destructive',
    title: 'Error',
    description: 'Something went wrong',
    icon: '❌',
  },
];
