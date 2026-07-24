import { DocsPage } from '../components/DocsPage';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '../../components/popover/Popover';
import { Button } from '../../components/button/Button';
import { PopoverPlayground } from '../components/playground/PopoverPlayground';
import { componentProps } from '../../lib/props';

const PreviewPopover = ({
  variant,
  title,
  description,
}: {
  variant: 'default' | 'filled' | 'outline' | 'ghost';
  title: string;
  description: string;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant={variant === 'filled' ? 'primary' : 'secondary'}>
        {title}
      </Button>
    </PopoverTrigger>

    <PopoverContent
      variant={variant}
      side='bottom'
      align='center'
      sideOffset={10}
    >
      <h4 className='mb-2 font-semibold'>{title}</h4>

      <p className='text-sm text-neutral-600'>{description}</p>

      <PopoverArrow variant={variant} />
    </PopoverContent>
  </Popover>
);

export function PopoverDocs() {
  return (
    <DocsPage
      header='Popover'
      description='A popover displays rich content in a floating panel, triggered by a user interaction such as a click or focus.'
      preview={
        <>
          <PreviewPopover
            variant='default'
            title='Default'
            description='A balanced style for most interfaces.'
          />

          <PreviewPopover
            variant='filled'
            title='Filled'
            description='Uses a solid background to stand out.'
          />

          <PreviewPopover
            variant='outline'
            title='Outline'
            description='Transparent background with a subtle border.'
          />

          <PreviewPopover
            variant='ghost'
            title='Ghost'
            description='Minimal appearance with almost no visual chrome.'
          />
        </>
      }
      playground={<PopoverPlayground />}
      props={componentProps.popover}
    />
  );
}
