import { Button } from '@/components/button/Button';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import type { CommonStylingVariant } from '@/components/shared/types';

export const PreviewPopover = ({
  variant,
  title,
  description,
}: {
  variant: CommonStylingVariant;
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
      portal={false}
    >
      <h4 className='mb-2 font-semibold'>{title}</h4>

      <p className='text-body-sm text-fg-tertiary'>{description}</p>

      <PopoverArrow variant={variant} />
    </PopoverContent>
  </Popover>
);
