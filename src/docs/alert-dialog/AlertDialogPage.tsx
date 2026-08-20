import { DocsPage } from '../components/DocsPage';
import { AlertDialogPlayground } from './AlertDialogPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import AlertDialogPreview from './AlertDialogPreview';

export function AlertDialogDocs() {
  return (
    <DocsPage
      header='Alert dialog'
      description='A dialog that has to be answered. No close button, no light dismiss, focus on Cancel and the destructive action on the trailing edge — three deliberate ways it is harder to leave than a Dialog.'
      preview={<AlertDialogPreview />}
      playground={<AlertDialogPlayground />}
      installation={getInstallation('alertDialog')}
      propSections={componentProps.alertDialog}
    />
  );
}
