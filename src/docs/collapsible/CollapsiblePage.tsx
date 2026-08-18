import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { COLLAPSIBLE_STATES } from './collapsibleStates';
import { CollapsiblePlayground } from './CollapsiblePlayground';
import CollapsiblePreview from './CollapsiblePreview';

export function CollapsibleDocs() {
  return (
    <DocsPage
      header='Collapsible'
      description='A single disclosure that reveals its content in place.'
      states={COLLAPSIBLE_STATES}
      preview={<CollapsiblePreview />}
      playground={<CollapsiblePlayground />}
      installation={getInstallation('collapsible')}
      props={componentProps.collapsible}
    />
  );
}
