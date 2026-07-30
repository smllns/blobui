import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Input } from '../../components/input/Input';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { generateInputCode } from './generateInputCode';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import {
  INPUT_INITIAL_STATE,
  INPUT_CONTROLS,
  type InputPlaygroundState,
} from './inputConstants';

export function InputPlayground() {
  const [state, setState] = useState(INPUT_INITIAL_STATE);

  const code = generateInputCode(state);

  const update = <K extends keyof InputPlaygroundState>(
    key: K,
    value: InputPlaygroundState[K],
  ) => {
    setState((prev) => {
      let next = {
        ...prev,
        [key]: value,
      };

      if (key === 'errorMessage' && value) {
        next.error = true;
        next.description = false;
      }

      if (key === 'description' && value) {
        next.errorMessage = false;
        next.error = false;
      }

      if (key === 'error' && !value) {
        next.errorMessage = false;
      }

      return next;
    });
  };
  return (
    <PlaygroundShell
      controls={
        <>
          <ControlsRenderer
            state={state}
            update={update}
            controls={INPUT_CONTROLS}
          />
        </>
      }
      preview={
        <Input
          placeholder='Type something...'
          variant={state.variant}
          size={state.size}
          fullWidth={state.fullWidth}
          error={state.error}
          leftIcon={state.leftIcon ? <span>💖</span> : undefined}
          rightIcon={state.rightIcon ? <span>💖</span> : undefined}
          disabled={state.disabled}
          label={state.label ? 'Label' : undefined}
          description={
            state.description && !state.errorMessage
              ? 'Input description'
              : undefined
          }
          errorMessage={state.errorMessage ? 'Something went wrong' : undefined}
        />
      }
      code={<CodeBlock code={code} />}
    />
  );
}
