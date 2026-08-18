import { Segmented } from '@/components/segmented/Segmented';
import { PLAIN } from './segmentedConstants';
import { VIEWS } from './segmented.data';

export function SegmentedPreview() {
  return (
    <>
      <Segmented aria-label='View' items={PLAIN} />
      <Segmented
        aria-label='View, small with icons'
        size='sm'
        defaultValue='chart'
        items={VIEWS.map(({ value, label, icon }) => ({ value, label, icon }))}
      />
      <Segmented aria-label='View, switching' loading items={PLAIN} />
    </>
  );
}
