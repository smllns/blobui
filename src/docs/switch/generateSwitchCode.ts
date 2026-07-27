export function generateSwitchCode(state: any) {
  const props = [
    `variant="${state.variant}"`,
    `size="${state.size}"`,
    state.checked && 'checked',
    state.disabled && 'disabled',
    state.label && 'label="Switch label"',
    state.description && 'description="Switch description"',
    state.error && 'error',
    state.errorMessage && 'errorMessage="Error message"',
  ].filter(Boolean);

  return `
<Switch
  ${props.join('\n  ')}
/>
`.trim();
}
