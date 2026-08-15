import type { ButtonGroupPlaygroundState } from './buttonGroupConstants';

const MEMBERS = ['Copy link', 'Download', 'Share'];

export function generateButtonGroupCode(state: ButtonGroupPlaygroundState) {
  const props = [
    'aria-label="Export"',
    state.orientation !== 'horizontal' && `orientation="${state.orientation}"`,
    state.gap !== 'joined' && `gap="${state.gap}"`,
    state.role !== 'group' && `role="${state.role}"`,
    state.block && 'block',
    state.disabled && 'disabled',
    state.loading && 'loading',
  ].filter(Boolean);

  const memberProps = [
    state.variant !== 'primary' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
  ].filter(Boolean);

  const attributes = memberProps.length ? ` ${memberProps.join(' ')}` : '';

  const members = MEMBERS.map(
    (label, index) =>
      `  <Button${attributes}${
        state.loading && index === 0 ? ' loading' : ''
      }>${label}</Button>`,
  ).join('\n');

  return `
<ButtonGroup
  ${props.join('\n  ')}
>
${members}
</ButtonGroup>
`.trim();
}
