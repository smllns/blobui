import { useState } from 'react';
import { CARD_CONTROLS, CARD_INITIAL_STATE } from './cardConstants';
import { generateCardCode } from './generateCardCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Card } from '../../components/card/Card';
import { CodeBlock } from '../components/CodeBlock';

export function CardPlayground() {
  const [state, setState] = useState(CARD_INITIAL_STATE);

  const code = generateCardCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
        <div className='flex items-center justify-center '>
          <Card variant={state.variant} padding={state.padding}>
            <h3 className='mb-2 text-lg font-semibold'>Card title</h3>

            <p className='text-sm text-neutral-600'>
              This is a flexible container for grouping related content.
            </p>
          </Card>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
