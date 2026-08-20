import { DocsPage } from '../components/DocsPage';
import { SheetPlayground } from './SheetPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import SheetPreview from './SheetPreview';

export function SheetDocs() {
  return (
    <DocsPage
      header='Sheet'
      description='A dialog that slides in from an edge of the screen. Supports left, right, top, and bottom positions, with optional grab-to-dismiss behavior for top and bottom sheets.'
      preview={<SheetPreview />}
      playground={<SheetPlayground />}
      installation={getInstallation('sheet')}
      propSections={componentProps.sheet}
    />
  );
}
