import { DocsPage } from '../components/DocsPage';
import { ButtonGroupPlayground } from './ButtonGroupPlayground';
import { ButtonGroupPreview } from './ButtonGroupPreview';
import { GROUP_STATES } from './buttonGroupStates';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';

export function ButtonGroupDocs() {
  return (
    <DocsPage
      header='Button group'
      description='A group of independent buttons with shared borders, rounded corners, and consistent focus styles.'
      preview={<ButtonGroupPreview />}
      states={GROUP_STATES}
      playground={<ButtonGroupPlayground />}
      installation={getInstallation('buttonGroup')}
      propSections={componentProps.buttonGroup}
    />
  );
}
