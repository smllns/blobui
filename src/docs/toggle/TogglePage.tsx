import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { TOGGLE_STATES } from './toggleStates';
import { TogglePlayground } from './TogglePlayground';
import { TogglePreview } from './TogglePreview';

export function ToggleDocs() {
  return (
    <DocsPage
      header='Toggle'
      description='A button with a second state. Use it for an independent on/off mode — a formatting button, a filter — where nothing else changes when you press it.'
      preview={<TogglePreview />}
      states={TOGGLE_STATES}
      playground={<TogglePlayground />}
      installation={getInstallation('toggle')}
      props={componentProps.toggle}
    />
  );
}
