import { DocsPage } from '../components/DocsPage';
import { ContextMenuPlayground } from './ContextMenuPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import ContextMenuPreview from './ContextMenuPreview';

export function ContextMenuDocs() {
  return (
    <DocsPage
      header='Context menu'
      description='The dropdown menu, anchored to a pointer instead of a button. The panel is the one the dropdown already uses; what this component owns is the anchor — the flip on both axes, the corner it grows from, and the keyboard path that Shift + F10 opens.'
      preview={<ContextMenuPreview />}
      playground={<ContextMenuPlayground />}
      installation={getInstallation('contextMenu')}
      propSections={componentProps.contextMenu}
    />
  );
}
