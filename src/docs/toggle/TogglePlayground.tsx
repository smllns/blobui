import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Toggle } from '@/components/toggle/Toggle';
import { Archive } from '@/ui/icons/Archive';
import { Bold } from '@/ui/icons/Bold';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  TOGGLE_CONTROLS,
  TOGGLE_COPY,
  TOGGLE_INITIAL_STATE,
} from './toggleConstants';
import { generateToggleCode } from './generateToggleCode';

export function TogglePlayground() {
  const { state, update } = usePlaygroundState(TOGGLE_INITIAL_STATE);

  const controls = TOGGLE_CONTROLS.map((control) =>
    control.key === 'leftIcon' || control.key === 'rightIcon'
      ? { ...control, disabled: state.iconOnly }
      : control,
  );

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer state={state} update={update} controls={controls} />
      }
      preview={
        <Toggle
          variant={state.variant}
          size={state.size}
          iconOnly={state.iconOnly}
          aria-label={state.iconOnly ? TOGGLE_COPY.iconLabel : undefined}
          leftIcon={!state.iconOnly && state.leftIcon ? <Archive /> : undefined}
          rightIcon={
            !state.iconOnly && state.rightIcon ? <ChevronDown /> : undefined
          }
          loading={state.loading}
          disabled={state.disabled}
          pressed={state.pressed}
          onPressedChange={(pressed) => update('pressed', pressed)}
        >
          {state.iconOnly ? <Bold /> : TOGGLE_COPY.label}
        </Toggle>
      }
      code={<CodeBlock code={generateToggleCode(state)} />}
    />
  );
}
