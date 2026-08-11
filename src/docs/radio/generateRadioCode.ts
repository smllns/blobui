import type { RadioPlaygroundState } from './radioConstants';

export function generateRadioCode(state: RadioPlaygroundState) {
  const props = [
    `size="${state.size}"`,
    state.checked && 'checked',
    state.disabled && 'disabled',
    state.label && 'label="Radio label"',
    state.description && 'description="Radio description"',
    state.error && 'error',
    state.errorMessage && 'errorMessage="Error message"',
  ].filter(Boolean);

  return `
<Radio
  ${props.join('\n  ')}
/>
`.trim();
}
