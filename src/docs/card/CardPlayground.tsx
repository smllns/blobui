import { CARD_CONTROLS, CARD_INITIAL_STATE } from './cardConstants';
import { generateCardCode } from './generateCardCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Card } from '@/components/card/Card';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

export function CardPlayground() {
  const { state, update } = usePlaygroundState(CARD_INITIAL_STATE);
  const code = generateCardCode(state);
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={CARD_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center'>
          <Card variant={state.variant} padding={state.padding}>
            <h3 className='mb-2 text-heading-md'>Card title</h3>

            <p className='text-body-sm text-fg-tertiary'>
              This is a flexible container for grouping related content.
            </p>
          </Card>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
