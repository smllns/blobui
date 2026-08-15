import { ButtonGroup } from '@/components/button-group/ButtonGroup';
import { Button } from '@/components/button/Button';
import { AlignCenter } from '@/ui/icons/AlignCenter';
import { AlignLeft } from '@/ui/icons/AlignLeft';
import { AlignRight } from '@/ui/icons/AlignRight';
import { ChevronDown } from '@/ui/icons/ChevronDown';

export function ButtonGroupPreview() {
  return (
    <>
      <ButtonGroup aria-label='Export'>
        <Button variant='secondary'>Copy link</Button>
        <Button variant='secondary'>Download</Button>
        <Button variant='secondary'>Share</Button>
      </ButtonGroup>

      <ButtonGroup aria-label='Publish'>
        <Button>Publish</Button>
        <Button iconOnly aria-label='Publish options'>
          <ChevronDown />
        </Button>
      </ButtonGroup>

      <ButtonGroup role='toolbar' aria-label='Alignment'>
        <Button variant='ghost' iconOnly aria-label='Align start'>
          <AlignLeft />
        </Button>
        <Button variant='ghost' iconOnly aria-label='Align centre'>
          <AlignCenter />
        </Button>
        <Button variant='ghost' iconOnly aria-label='Align end'>
          <AlignRight />
        </Button>
      </ButtonGroup>

      <ButtonGroup gap='spaced' aria-label='Form actions'>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save changes</Button>
      </ButtonGroup>
    </>
  );
}
