import { VIEWS } from './segmented.data';
import type { SegmentedPlaygroundState } from './segmentedConstants';

export function generateSegmentedCode(state: SegmentedPlaygroundState) {
  const props = [
    'aria-label="View"',
    state.type !== 'single' && `type="${state.type}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.block && 'block',
    state.disabled && 'disabled',
    state.readOnly && 'readOnly',
    state.loading && 'loading',
  ].filter(Boolean);

  const items = VIEWS.map((view) => {
    const entry = [
      `value: '${view.value}'`,
      `label: '${view.label}'`,
      state.icons && `icon: <${view.iconName} />`,
    ].filter(Boolean);

    return `    { ${entry.join(', ')} },`;
  }).join('\n');

  return `
<Segmented
  ${props.join('\n  ')}
  items={[
${items}
  ]}
/>
`.trim();
}
