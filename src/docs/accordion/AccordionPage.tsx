import { DocsPage } from '../components/DocsPage';
import { Accordion } from '../../components/accordion/Accordion';
import { AccordionPlayground } from './AccordionPlayground';
import { componentProps } from '@/lib/props';
import { AccordionItems } from './accordion.data';

export function AccordionDocs() {
  return (
    <DocsPage
      header='Accordion'
      description='Accordions are used to display collapsible sections of content.'
      preview={
        <div className='grid grid-cols-3 gap-6 items-start'>
          <Accordion items={AccordionItems} defaultValue='item-1' collapsible />

          <Accordion
            items={AccordionItems}
            type='multiple'
            defaultValue={['item-1', 'item-3']}
            variant='outline'
          />

          <Accordion
            items={AccordionItems}
            variant='ghost'
            defaultValue='item-1'
            collapsible
          />
        </div>
      }
      playground={<AccordionPlayground />}
      props={componentProps.accordion}
    />
  );
}
