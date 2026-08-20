import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { AlertPlayground } from './AlertPlayground';
import AlertPreview from './AlertPreview';

export function AlertDocs() {
  return (
    <DocsPage
      header='Alert'
      description='Alerts are messages that stay in the page, next to the thing they are about.'
      preview={<AlertPreview />}
      playground={<AlertPlayground />}
      installation={getInstallation('alert')}
      propSections={componentProps.alert}
    />
  );
}
