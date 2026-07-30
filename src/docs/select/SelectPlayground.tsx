import { SELECT_CONTROLS, SELECT_INITIAL_STATE } from './selectConstants';
import { generateSelectCode } from './generateSelectCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Select } from '../../components/select/Select';
import { SelectItem } from '../../components/select/SelectItem';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '../../hooks/usePlaygroundState';

export function SelectPlayground() {
  const { state, update } = usePlaygroundState(SELECT_INITIAL_STATE);
  const code = generateSelectCode(state);
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
          width={state.width}
          disabled={state.disabled}
          error={state.error}
          placeholder='Choose option'
          defaultValue='react'
        >
          <SelectItem value='react'>React</SelectItem>

          <SelectItem value='vue'>Vue</SelectItem>

          <SelectItem value='angular'>Angular</SelectItem>
        </Select>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
