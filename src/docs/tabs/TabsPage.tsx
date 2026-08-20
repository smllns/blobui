import { DocsPage } from '../components/DocsPage';
import { TAB_STATES } from './tabsStates';
import { getInstallation } from '../utils/getInstallation';
import { componentProps } from '@/lib/props';
import { TabsPreview } from './TabsPreview';
import { TabsPlayground } from './TabsPlayground';

export function TabsDocs() {
  return (
    <DocsPage
      header='Tabs'
      description='Switches between sections of related content. Tabs provide a single navigation group where the active tab identifies the current section and keyboard arrows move between options.'
      preview={<TabsPreview />}
      states={TAB_STATES}
      playground={<TabsPlayground />}
      installation={getInstallation('tabs')}
      propSections={componentProps.tabs}
    />
  );
}
