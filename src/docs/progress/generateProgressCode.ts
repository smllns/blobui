import {
  PROGRESS_LABEL,
  type ProgressPlaygroundState,
} from './progressConstants';

export function generateProgressCode(state: ProgressPlaygroundState) {
  const props = [
    state.indeterminate ? 'indeterminate' : `value={${state.value}}`,
    state.size !== 'md' && `size="${state.size}"`,
    state.tone !== 'accent' && `tone="${state.tone}"`,
    state.disabled && 'disabled',
    `aria-label="${PROGRESS_LABEL}"`,
  ].filter(Boolean);

  return `
<Progress
  ${props.join('\n  ')}
/>
`.trim();
}
