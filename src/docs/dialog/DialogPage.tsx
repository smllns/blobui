import { DocsPage } from '../components/DocsPage';
import { DialogPlayground } from './DialogPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import DialogPreview from './DialogPreview';

export function DialogDocs() {
  return (
    <DocsPage
      header='Dialog'
      description='Dialogs are used to display important information or request user actions.'
      preview={<DialogPreview />}
      playground={<DialogPlayground />}
      installation={getInstallation('dialog')}
      propSections={componentProps.dialog}
    />
  );
}
