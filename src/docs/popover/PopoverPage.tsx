import { DocsPage } from '../components/DocsPage';
import { PopoverPlayground } from './PopoverPlayground';
import { componentProps } from '@/lib/props';
import { previewPopovers } from './popover.data';
import { PreviewPopover } from './PreviewPopover';
import { getInstallation } from '../utils/getInstallation';
import { POPOVER_STATES } from './popoverStates';

export function PopoverDocs() {
  return (
    <DocsPage
      header='Popover'
      description='A popover displays rich content in a floating panel, triggered by a user interaction such as a click or focus.'
      preview={
        <>
          {previewPopovers.map((popover) => (
            <PreviewPopover key={popover.variant} {...popover} />
          ))}
        </>
      }
      states={POPOVER_STATES}
      playground={<PopoverPlayground />}
      installation={getInstallation('popover')}
      propSections={componentProps.popover}
    />
  );
}
