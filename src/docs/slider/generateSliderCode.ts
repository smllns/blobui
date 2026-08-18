import {
  SLIDER_COPY,
  SLIDER_RANGE_VALUE,
  SLIDER_SINGLE_VALUE,
  type SliderPlaygroundState,
} from './sliderConstants';

export function generateSliderCode(state: SliderPlaygroundState) {
  const value = state.range
    ? `defaultValue={[${SLIDER_RANGE_VALUE.join(', ')}]}`
    : `defaultValue={${SLIDER_SINGLE_VALUE}}`;

  const props = [
    value,
    state.size !== 'md' && `size="${state.size}"`,
    state.step !== '1' && `step={${state.step}}`,
    state.label
      ? `label="${SLIDER_COPY.label}"`
      : `aria-label="${SLIDER_COPY.label}"`,
    state.showValue && 'showValue',
    state.description &&
      !state.error &&
      `description="${SLIDER_COPY.description}"`,
    state.error && `errorMessage="${SLIDER_COPY.errorMessage}"`,
    state.disabled && 'disabled',
    state.readOnly && 'readOnly',
  ].filter(Boolean);

  return `
<Slider
  ${props.join('\n  ')}
/>
`.trim();
}
