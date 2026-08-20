import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { KBD_STATES } from './kbdStates';
import { KbdPlayground } from './KbdPlayground';
import KbdPreview from './KbdPreview';

export function KbdDocs() {
  return (
    <DocsPage
      header='Kbd'
      description='A compact visual representation of a keyboard key or key combination.'
      preview={<KbdPreview />}
      states={KBD_STATES}
      playground={<KbdPlayground />}
      installation={getInstallation('kbd')}
      propSections={componentProps.kbd}
    />
  );
}
