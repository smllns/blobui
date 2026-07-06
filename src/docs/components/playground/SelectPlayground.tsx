import { useState } from 'react';

import { Select } from '../../../components/select';
import { CodeBlock } from '../CodeBlock';
import { PlaygroundShell } from './PlaygroundShell';
import { ControlsRenderer } from './controls/ControlsRenderer';
import {
  SELECT_CONTROLS,
  SELECT_INITIAL_STATE,
  type SelectPlaygroundState,
} from './constants/selectConstants';
import { generateSelectCode } from './codeGenerators/generateSelectCode';

export function SelectPlayground() {
  const [state, setState] = useState(SELECT_INITIAL_STATE);

  const code = generateSelectCode(state);

  const update = <K extends keyof SelectPlaygroundState>(
    key: K,
    value: SelectPlaygroundState[K],
  ) => {
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
          controls={SELECT_CONTROLS}
        />
      }
      preview={
        <Select
          variant={state.variant}
          size={state.size}
          fullWidth={state.fullWidth}
          disabled={state.disabled}
          error={state.error}
          leftIcon={state.leftIcon ? <span>💖</span> : undefined}
          rightIcon={state.rightIcon ? <span>💖</span> : undefined}
          defaultValue=''
        >
          <option value=''>Choose option</option>
          <option value='react'>React</option>
          <option value='vue'>Vue</option>
          <option value='angular'>Angular</option>
        </Select>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
