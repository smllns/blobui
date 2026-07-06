import { DocsPage } from '../components/DocsPage';
import { Radio } from '../../components/radio';
import { RadioPlayground } from '../components/playground/RadioPlayground';
import { radioProps } from '../../lib/radioProps';

export function RadioDocs() {
  return (
    <DocsPage
      header='Radio'
      description='Radio buttons allow users to select one option from a set of mutually exclusive options.'
      preview={
        <>
          <Radio name='radio' value='primary' label='Primary' />

          <Radio
            name='radio'
            value='secondary'
            variant='filled'
            label='Filled'
          />

          <Radio
            name='radio'
            value='outline'
            variant='outline'
            label='Outline'
          />

          <Radio name='radio' value='ghost' variant='ghost' label='Ghost' />
        </>
      }
      playground={<RadioPlayground />}
      props={radioProps}
    />
  );
}
