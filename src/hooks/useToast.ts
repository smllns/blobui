import type { ToastProps } from '@/components/toast/toast.types';
import { useCallback, useState } from 'react';

export type ToastOptions = Pick<
  ToastProps,
  'tone' | 'size' | 'title' | 'description' | 'icon' | 'action'
> & {
  showClose?: boolean;
  duration?: number;
};

export type ToastItem = ToastOptions & {
  id: string;
  closing?: boolean;
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, closing: true } : toast,
      ),
    );

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 200);
  }, []);

  const showToast = useCallback(
    ({ duration = 2000, ...options }: ToastOptions) => {
      const id = crypto.randomUUID();

      setToasts((prev) => [...prev, { id, ...options }]);

      const closeTimer = window.setTimeout(() => {
        dismissToast(id);
      }, duration);

      return () => window.clearTimeout(closeTimer);
    },
    [dismissToast],
  );

  return {
    toasts,
    showToast,
    dismissToast,
  };
}
