import { DocsPage } from '../components/DocsPage';
import { Radio } from '@/components/radio/Radio';
import { RadioPlayground } from './RadioPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { RADIO_STATES } from './radioStates';

export function RadioDocs() {
  return (
    <DocsPage
      header='Radio'
      description='Radio buttons allow users to select one option from a set of mutually exclusive options.'
      preview={
        <>
          <Radio name='radio' value='daily' label='Daily' defaultChecked />
          <Radio
            name='radio'
            value='weekly'
            label='Weekly'
            description='A digest every Monday morning'
          />
          <Radio name='radio' value='never' label='Never' />
          <Radio name='radio' value='large' label='Large' size='lg' />
        </>
      }
      states={RADIO_STATES}
      playground={<RadioPlayground />}
      installation={getInstallation('radio')}
      propSections={componentProps.radio}
    />
  );
}
