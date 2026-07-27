import { DocsPage } from '../components/DocsPage';
import { Card } from '../../components/card/Card';
import { CardPlayground } from './CardPlayground';
import { componentProps } from '../../lib/props';
import { cardVariants } from './card.data';

export function CardDocs() {
  return (
    <DocsPage
      header='Card'
      description='Cards are used to display a small piece of information.'
      preview={
        <>
          {cardVariants.map(({ variant, title, description }) => (
            <Card key={variant} variant={variant}>
              <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
              <p className='text-sm text-neutral-600'>{description}</p>
            </Card>
          ))}
        </>
      }
      playground={<CardPlayground />}
      props={componentProps.card}
    />
  );
}
