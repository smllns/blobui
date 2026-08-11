import type { ToastProps } from '../../components/toast/toast.types';

export const previewToasts: Pick<
  ToastProps,
  'tone' | 'title' | 'description' | 'icon'
>[] = [
  {
    tone: 'neutral',
    title: 'Default toast',
    description: 'This is a default notification',
  },
  {
    tone: 'success',
    title: 'Success',
    description: 'Everything worked correctly',
  },
  {
    tone: 'warning',
    title: 'Warning',
    description: 'Something might need attention',
  },
  {
    tone: 'danger',
    title: 'Error',
    description: 'Something went wrong',
  },
];
