import { useState } from 'react';

import { ControlsRenderer } from './controls/ControlsRenderer';
import { CodeBlock } from '../CodeBlock';

import { PlaygroundShell } from './PlaygroundShell';
import { RADIO_INITIAL_STATE, radioControls } from './constants/radioConstants';
import { generateRadioCode } from './codeGenerators/generateRadioCode';
import { Radio } from '../../../components/radio/Radio';

export function RadioPlayground() {
  const [state, setState] = useState(RADIO_INITIAL_STATE);

  const code = generateRadioCode(state);

  const update = (key: string, value: any) => {
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
          controls={radioControls}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Radio
            variant={state.variant}
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
