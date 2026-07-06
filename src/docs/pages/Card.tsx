import { DocsPage } from '../components/DocsPage';
import { Card } from '../../components/card';
import { CardPlayground } from '../components/playground/CardPlayground';
import { cardProps } from '../../lib/cardProps';

export function CardDocs() {
  const cardVariants = [
    {
      variant: 'default' as const,
      title: 'Default',
      description: 'Standard card with a subtle border.',
    },
    {
      variant: 'filled' as const,
      title: 'Filled',
      description: 'Filled background for grouped content.',
    },
    {
      variant: 'outline' as const,
      title: 'Outline',
      description: 'Transparent background with an outline.',
    },
  ];
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
      props={cardProps}
    />
  );
}
