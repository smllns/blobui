import { Button } from '../../components/button/Button';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '../../components/popover/Popover';
import type { PopoverContentProps } from '../../components/popover/popover.types';

export const previewPopovers: {
  variant: NonNullable<PopoverContentProps['variant']>;
  title: string;
  description: string;
}[] = [
  {
    variant: 'default',
    title: 'Default',
    description: 'A balanced style for most interfaces.',
  },
  {
    variant: 'filled',
    title: 'Filled',
    description: 'Uses a solid background to stand out.',
  },
  {
    variant: 'outline',
    title: 'Outline',
    description: 'Transparent background with a subtle border.',
  },
  {
    variant: 'ghost',
    title: 'Ghost',
    description: 'Minimal appearance with almost no visual chrome.',
  },
];

export const PreviewPopover = ({
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
