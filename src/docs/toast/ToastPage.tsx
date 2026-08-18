import { DocsPage } from '../components/DocsPage';
import { ToastPlayground } from './ToastPlayground';
import { componentProps } from '@/lib/props';
import { previewToasts } from './toast.data';
import { getInstallation } from '../utils/getInstallation';
import { Button } from '@/components/button/Button';
import { ToastContainer } from '@/components/toast/ToastContainer';
import { useToast } from '@/hooks/useToast';
import { TOAST_STATES } from './toastStates';

export function ToastDocs() {
  const { toasts, showToast, dismissToast } = useToast();

  return (
    <DocsPage
      header='Toast'
      description='Toasts are used to display a small piece of information.'
      preview={
        <>
          <div className='flex flex-wrap gap-6'>
            {previewToasts.map((toast) => (
              <Button
                key={toast.title}
                size='sm'
                variant='primary'
                onClick={() => showToast(toast)}
              >
                {toast.title}
              </Button>
            ))}
          </div>
          <ToastContainer toasts={toasts} onClose={dismissToast} />
        </>
      }
      states={TOAST_STATES}
      playground={<ToastPlayground />}
      installation={getInstallation('toast')}
      props={componentProps.toast}
    />
  );
}
