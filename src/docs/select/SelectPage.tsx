import { DocsPage } from '../components/DocsPage';
import { SelectPlayground } from './SelectPlayground';
import { componentProps } from '@/lib/props';
import { SelectPreview } from './SelectPreview';
import { getInstallation } from '../utils/getInstallation';
import { SELECT_STATES } from './selectStates';

export function SelectDocs() {
  return (
    <DocsPage
      header='Select'
      description='A select component for capturing user data.'
      preview={<SelectPreview />}
      states={SELECT_STATES}
      playground={<SelectPlayground />}
      installation={getInstallation('select')}
      propSections={componentProps.select}
    />
  );
}
