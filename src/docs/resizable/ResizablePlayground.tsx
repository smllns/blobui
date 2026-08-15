import { useState } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Resizable } from '@/components/resizable/Resizable';
import { generateResizableCode } from './generateResizableCode';
import {
  RESIZABLE_CONTROLS,
  RESIZABLE_INITIAL_STATE,
} from './resizableConstants';
import { PanelBody } from './ResizablePreview';

export function ResizablePlayground() {
  const [state, setState] = useState(RESIZABLE_INITIAL_STATE);
  const code = generateResizableCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((previous) => ({ ...previous, [key]: value }));
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={RESIZABLE_CONTROLS}
        />
      }
      preview={
        <div className='h-56 w-100'>
          <Resizable
            key={`${state.orientation}-${state.collapsible}`}
            orientation={state.orientation}
            disabled={state.disabled}
            panels={[
              {
                id: 'files',
                defaultSize: 30,
                minSize: 20,
                collapsible: state.collapsible,
                collapsedSize: 0,
                children: (
                  <PanelBody title='Files'>
                    {state.collapsible
                      ? 'Enter on the divider folds this away and brings it back.'
                      : 'Tab to the divider and use the arrow keys.'}
                  </PanelBody>
                ),
              },
              {
                id: 'editor',
                minSize: 30,
                children: (
                  <PanelBody title='Editor'>
                    Shift with an arrow key moves ten times as far.
                  </PanelBody>
                ),
              },
            ]}
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
