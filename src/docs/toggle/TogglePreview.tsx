import { Toggle } from '@/components/toggle/Toggle';
import { Archive } from '@/ui/icons/Archive';
import { Bold } from '@/ui/icons/Bold';
import { Italic } from '@/ui/icons/Italic';
import { Underline } from '@/ui/icons/Underline';

export const TogglePreview = () => {
  return (
    <>
      <Toggle iconOnly aria-label='Bold' defaultPressed>
        <Bold />
      </Toggle>

      <Toggle iconOnly aria-label='Italic'>
        <Italic />
      </Toggle>

      <Toggle iconOnly aria-label='Underline'>
        <Underline />
      </Toggle>

      <Toggle variant='outline' leftIcon={<Archive />}>
        Show archived
      </Toggle>

      <Toggle variant='outline' defaultPressed>
        Compact rows
      </Toggle>

      <Toggle disabled defaultPressed>
        Locked on
      </Toggle>
    </>
  );
};
