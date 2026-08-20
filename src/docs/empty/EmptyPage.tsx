import { DocsPage } from '../components/DocsPage';
import { Empty } from '@/components/empty/Empty';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { EmptyPlayground } from './EmptyPlayground';
import { specimens } from './emptyPreview';

export function EmptyDocs() {
  return (
    <DocsPage
      header='Empty state'
      description='The block that stands in for content that is not there, and asks for the one thing that would fix it.'
      preview={
        <div className='grid w-full grid-cols-2 gap-4'>
          {specimens.map(({ state, title, text, action }) => (
            <Empty
              key={state}
              state={state}
              variant='bordered'
              title={title}
              actions={action}
            >
              {text}
            </Empty>
          ))}
        </div>
      }
      playground={<EmptyPlayground />}
      installation={getInstallation('empty')}
      propSections={componentProps.empty}
    />
  );
}
