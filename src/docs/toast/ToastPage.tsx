import { DocsPage } from '../components/DocsPage';
import { Toast } from '../../components/toast/Toast';
import { ToastPlayground } from './ToastPlayground';
import { componentProps } from '../../lib/props';
import { previewToasts } from './toast.data';

export function ToastDocs() {
  return (
    <DocsPage
      header='Toast'
      description='Toasts are used to display a small piece of information.'
      preview={
        <>
          {previewToasts.map((toast) => (
            <Toast key={toast.variant} {...toast} />
          ))}
        </>
      }
      playground={<ToastPlayground />}
      props={componentProps.toast}
    />
  );
}
