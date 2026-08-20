import type { SegmentedBaseProps } from '@/components/segmented/segmented.types';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Segmented } from '@/components/segmented/Segmented';
import { CodeBlock } from '../components/CodeBlock';
import { generateSegmentedCode } from './generateSegmentedCode';
import {
  PLAIN,
  SEGMENTED_CONTROLS,
  SEGMENTED_INITIAL_STATE,
} from './segmentedConstants';
import { VIEWS } from './segmented.data';

export function SegmentedPlayground() {
  const { state, update } = usePlaygroundState(SEGMENTED_INITIAL_STATE);

  const shared: SegmentedBaseProps = {
    'aria-label': 'View',
    items: state.icons
      ? VIEWS.map(({ value, label, icon }) => ({ value, label, icon }))
      : PLAIN,
    size: state.size,
    block: state.block,
    disabled: state.disabled,
    readOnly: state.readOnly,
    loading: state.loading,
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={SEGMENTED_CONTROLS}
        />
      }
      preview={
        <div className={state.block ? 'w-full max-w-sm' : ''}>
          {state.type === 'multiple' ? (
            <Segmented
              key='multiple'
              {...shared}
              type='multiple'
              defaultValue={['table']}
            />
          ) : (
            <Segmented key='single' {...shared} defaultValue='table' />
          )}
        </div>
      }
      code={<CodeBlock code={generateSegmentedCode(state)} />}
    />
  );
}
