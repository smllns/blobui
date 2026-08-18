import { TOGGLE_COPY, type TogglePlaygroundState } from './toggleConstants';

export function generateToggleCode(state: TogglePlaygroundState) {
  const props = [
    state.variant !== 'default' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.pressed && 'defaultPressed',
    state.iconOnly && `iconOnly\n  aria-label="${TOGGLE_COPY.iconLabel}"`,
    !state.iconOnly && state.leftIcon && 'leftIcon={<Archive />}',
    !state.iconOnly && state.rightIcon && 'rightIcon={<ChevronDown />}',
    state.loading && 'loading',
    state.disabled && 'disabled',
  ].filter(Boolean);

  const body = state.iconOnly ? '<Bold />' : TOGGLE_COPY.label;

  return `
<Toggle
  ${props.join('\n  ')}
>
  ${body}
</Toggle>
`.trim();
}
