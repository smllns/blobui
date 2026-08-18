import {
  INPUT_GROUP_COPY,
  type InputGroupPlaygroundState,
  type InputGroupSlot,
} from './inputGroupConstants';

function slotSource(slot: InputGroupSlot, side: 'leading' | 'trailing') {
  const text =
    side === 'leading'
      ? INPUT_GROUP_COPY.leadingText
      : INPUT_GROUP_COPY.trailingText;

  const bare =
    side === 'leading'
      ? INPUT_GROUP_COPY.leadingBare
      : INPUT_GROUP_COPY.trailingBare;

  switch (slot) {
    case 'none':
      return null;
    case 'text':
      return `${side}="${text}"`;
    case 'bare':
      return `${side}={<InputGroupAddon variant="bare">${bare}</InputGroupAddon>}`;
    case 'button':
      return `${side}={<Button variant="secondary">${INPUT_GROUP_COPY.buttonLabel}</Button>}`;
  }
}

export function generateInputGroupCode(state: InputGroupPlaygroundState) {
  const props = [
    state.variant !== 'default' && `variant="${state.variant}"`,
    slotSource(state.leading, 'leading'),
    slotSource(state.trailing, 'trailing'),
    `placeholder="${INPUT_GROUP_COPY.placeholder}"`,
    state.label && `label="${INPUT_GROUP_COPY.label}"`,
    state.required && 'required',
    state.description &&
      !state.errorMessage &&
      `description="${INPUT_GROUP_COPY.description}"`,
    state.errorMessage && `errorMessage="${INPUT_GROUP_COPY.errorMessage}"`,
    state.error && !state.errorMessage && 'error',
    state.loading && 'loading',
    state.loading &&
      state.loadingSide !== 'trailing' &&
      `loadingSide="${state.loadingSide}"`,
    state.loading && `loadingLabel="${INPUT_GROUP_COPY.loadingLabel}"`,
    state.disabled && 'disabled',
    state.readOnly && 'readOnly',
    state.fullWidth && 'fullWidth',
  ].filter(Boolean);

  return `
<InputGroup
  ${props.join('\n  ')}
/>
`.trim();
}
