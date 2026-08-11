import { useState } from 'react';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { RADIO_INITIAL_STATE, RADIO_CONTROLS } from './radioConstants';
import { generateRadioCode } from './generateRadioCode';
import { Radio } from '../../components/radio/Radio';

export function RadioPlayground() {
  const [state, setState] = useState(RADIO_INITIAL_STATE);

  const code = generateRadioCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((prev) => {
      const next = { ...prev, [key]: value };

      if (key === 'errorMessage' && value) {
        next.error = true;
        next.description = '';
      }

      if (key === 'error' && !value) {
        next.errorMessage = '';
      }

      if (key === 'description' && value) {
        next.errorMessage = '';
      }

      return next;
    });
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={RADIO_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Radio
            checked={state.checked}
            disabled={state.disabled}
            size={state.size}
            label={state.label ? 'Radio label' : undefined}
            description={state.description ? 'Radio description' : undefined}
            error={state.error}
            errorMessage={state.errorMessage ? 'Error message' : undefined}
          ></Radio>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
