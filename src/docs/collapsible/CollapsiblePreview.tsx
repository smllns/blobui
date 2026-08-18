import { Collapsible } from '@/components/collapsible/Collapsible';

const replies = [
  'Kate — this is the part I keep coming back to.',
  'Miro — same, the second paragraph answers it.',
  'Ann — worth pinning somewhere.',
  'Leo — agreed, shipping it.',
];

const prose =
  'A collapsible is one disclosure with no frame, no siblings and no exclusivity. ' +
  'Reach for it when a block of content is worth offering but not worth showing by ' +
  'default: a truncated description, a set of advanced options, the rest of a thread. ' +
  'An accordion is a set of these with a wall around them and at most one open at a ' +
  'time, which is a different promise and a different component.';

const CollapsiblePreview = () => {
  return (
    <div className='grid grid-cols-3 gap-6 items-start'>
      <Collapsible trigger='Show 4 more replies' triggerOpen='Show less'>
        <ul className='flex flex-col gap-2'>
          {replies.map((reply) => (
            <li key={reply}>{reply}</li>
          ))}
        </ul>
      </Collapsible>

      <Collapsible peek trigger='Read more' triggerOpen='Read less'>
        {prose}
      </Collapsible>

      <Collapsible
        align='stretch'
        variant='outline'
        trigger='Advanced options'
        defaultOpen
      >
        Timeouts, retries and everything else nobody sets on the first run.
      </Collapsible>
    </div>
  );
};

export default CollapsiblePreview;
