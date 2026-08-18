import { DocsPage } from '../components/DocsPage';
import { SEGMENTED_STATES } from './segmentedStates';
import { getInstallation } from '../utils/getInstallation';
import { componentProps } from '@/lib/props';
import { SegmentedPlayground } from './SegmentedPlayground';
import { SegmentedPreview } from './SegmentedPreview';

export function SegmentedDocs() {
  return (
    <DocsPage
      header='Segmented'
      description='Switches between different views of the same content without changing the URL or loading a new resource. The active segment is clearly separated from the shared track so the current view is easy to identify.'
      preview={<SegmentedPreview />}
      states={SEGMENTED_STATES}
      playground={<SegmentedPlayground />}
      installation={getInstallation('segmented')}
      props={componentProps.segmented.root}
      subElementProps={componentProps.segmented.item}
      subElementHeader='Segmented item'
    />
  );
}
