import { DocsPage } from '../components/DocsPage';
import { Card } from '../../components/card/Card';
import { CardPlayground } from './CardPlayground';
import { componentProps } from '@/lib/props';
import { cardVariants } from './card.data';
import { getInstallation } from '../utils/getInstallation';

export function CardDocs() {
  return (
    <DocsPage
      header='Card'
      description='Cards are used to display a small piece of information.'
      preview={
        <>
          <div className=' flex flex-row gap-6'>
            {cardVariants.map(({ variant, title, description }) => (
              <Card key={variant} variant={variant}>
                <h3 className='mb-2 text-heading-md'>{title}</h3>
                <p className='text-body-sm text-fg-tertiary'>{description}</p>
              </Card>
            ))}
          </div>
        </>
      }
      playground={<CardPlayground />}
      installation={getInstallation('card')}
      props={componentProps.card}
    />
  );
}
