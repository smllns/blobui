import { Toast } from '@/components/toast/Toast';
import type { ToastItem } from '@/hooks/useToast';

type ToastContainerProps = {
  toasts: ToastItem[];
  onClose: (id: string) => void;
};

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  if (!toasts.length) return null;

  return (
    <div className='fixed inset-e-4 bottom-4 z-(--z-toast) w-120'>
      {toasts.map((toast, index) => {
        const reverseIndex = toasts.length - index - 1;

        return (
          <div
            key={toast.id}
            className='absolute inset-x-0 bottom-0 flex justify-end transition-all duration-300 ease-out'
            style={{
              transform: `
                translateY(${reverseIndex * -8}px)
                scale(${1 - reverseIndex * 0.04})
              `,
              opacity: Math.max(0.4, 1 - reverseIndex * 0.15),
              zIndex: toasts.length - reverseIndex,
            }}
          >
            <Toast
              tone={toast.tone}
              size={toast.size}
              title={toast.title}
              description={toast.description}
              icon={toast.icon}
              action={toast.action}
              closing={toast.closing}
              onClose={toast.showClose ? () => onClose(toast.id) : undefined}
            />
          </div>
        );
      })}
    </div>
  );
}
