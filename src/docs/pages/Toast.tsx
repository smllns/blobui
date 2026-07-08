import { DocsPage } from '../components/DocsPage';
import { Toast } from '../../components/toast/Toast';
import { ToastPlayground } from '../components/playground/ToastPlayground';
import { toastProps } from '../../lib/toastProps';

export function ToastDocs() {
  return (
    <DocsPage
      header='Toast'
      description='Toasts are used to display a small piece of information.'
      preview={
        <>
          <Toast
            variant='default'
            title='Default toast'
            description='This is a default notification'
            icon='🔔'
          />

          <Toast
            variant='success'
            title='Success'
            description='Everything worked correctly'
            icon='✅'
          />

          <Toast
            variant='warning'
            title='Warning'
            description='Something might need attention'
            icon='⚠️'
          />

          <Toast
            variant='destructive'
            title='Error'
            description='Something went wrong'
            icon='❌'
          />
        </>
      }
      playground={<ToastPlayground />}
      props={toastProps}
    />
  );
}
