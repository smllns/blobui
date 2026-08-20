import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { SLIDER_STATES } from './sliderStates';
import { SliderPlayground } from './SliderPlayground';
import SliderPreview from './SliderPreview';

export function SliderDocs() {
  return (
    <DocsPage
      header='Slider'
      description='Selects a value along a continuous range. The full control provides the interaction area, while the thumb indicates the current value and receives keyboard focus.'
      preview={<SliderPreview />}
      states={SLIDER_STATES}
      playground={<SliderPlayground />}
      installation={getInstallation('slider')}
      propSections={componentProps.slider}
    />
  );
}
