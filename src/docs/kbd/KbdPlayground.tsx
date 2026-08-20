import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Kbd, KbdGroup } from '@/components/kbd/Kbd';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  KBD_CHORD,
  KBD_CONTROLS,
  KBD_INITIAL_STATE,
  KBD_SINGLE,
} from './kbdConstants';
import { generateKbdCode } from './generateKbdCode';

export function KbdPlayground() {
  const { state, update } = usePlaygroundState(KBD_INITIAL_STATE);

  const controls = KBD_CONTROLS.map((control) =>
    control.key === 'pressed' ? { ...control, disabled: state.group } : control,
  );

  const cap = state.group ? (
    <KbdGroup keys={KBD_CHORD} size={state.size} variant={state.variant} />
  ) : (
    <Kbd size={state.size} variant={state.variant} pressed={state.pressed}>
      {KBD_SINGLE}
    </Kbd>
  );

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer state={state} update={update} controls={controls} />
      }
      preview={
        state.inline ? (
          <p className='text-body-md text-fg-secondary'>
            Press {cap} to open the command bar.
          </p>
        ) : (
          cap
        )
      }
      code={<CodeBlock code={generateKbdCode(state)} />}
    />
  );
}
