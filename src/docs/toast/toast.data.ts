import type { ToastOptions } from '@/hooks/useToast';

export const previewToasts: ToastOptions[] = [
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
