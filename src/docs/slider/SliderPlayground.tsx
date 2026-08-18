import { useState } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Slider } from '@/components/slider/Slider';
import type { SliderValue } from '@/components/slider/slider.types';
import {
  SLIDER_CONTROLS,
  SLIDER_COPY,
  SLIDER_INITIAL_STATE,
  defaultSliderValue,
  type SliderPlaygroundState,
} from './sliderConstants';
import { generateSliderCode } from './generateSliderCode';

export function SliderPlayground() {
  const [state, setState] = useState(SLIDER_INITIAL_STATE);
  const [value, setValue] = useState<SliderValue>(
    defaultSliderValue(SLIDER_INITIAL_STATE.range),
  );

  const update = <K extends keyof SliderPlaygroundState>(
    key: K,
    next: SliderPlaygroundState[K],
  ) => {
    setState((prev) => ({ ...prev, [key]: next }));

    if (key === 'range') setValue(defaultSliderValue(Boolean(next)));
    if (key === 'step') setValue(defaultSliderValue(state.range));
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={SLIDER_CONTROLS}
        />
      }
      preview={
        <div className='w-full max-w-md'>
          <Slider
            value={value}
            onChange={setValue}
            size={state.size}
            step={Number(state.step)}
            label={state.label ? SLIDER_COPY.label : undefined}
            aria-label={state.label ? undefined : SLIDER_COPY.label}
            showValue={state.showValue}
            description={
              state.description && !state.error
                ? SLIDER_COPY.description
                : undefined
            }
            errorMessage={state.error ? SLIDER_COPY.errorMessage : undefined}
            disabled={state.disabled}
            readOnly={state.readOnly}
          />
        </div>
      }
      code={<CodeBlock code={generateSliderCode(state)} />}
    />
  );
}
