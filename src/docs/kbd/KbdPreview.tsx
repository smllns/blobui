import { Kbd, KbdGroup } from '@/components/kbd/Kbd';

const KbdPreview = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex items-center gap-4'>
        <Kbd size='sm'>esc</Kbd>
        <Kbd>K</Kbd>
        <Kbd size='lg'>shift</Kbd>
        <Kbd pressed>⌥</Kbd>
      </div>

      <KbdGroup keys={['⌘', 'K']} />

      <p className='text-body-md text-fg-secondary'>
        Press <KbdGroup keys={['⌘', '⇧', 'P']} /> to open the command bar.
      </p>
    </div>
  );
};

export default KbdPreview;
