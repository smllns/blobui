import { PANELS, SECTIONS } from './tabs.data';
import { type TabsPlaygroundState } from './tabsConstants';

export function generateTabsCode(state: TabsPlaygroundState) {
  const props = [
    'aria-label="Workspace"',
    state.orientation !== 'horizontal' && `orientation="${state.orientation}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.activation !== 'automatic' && `activation="${state.activation}"`,
    state.block && 'block',
  ].filter(Boolean);

  const items = SECTIONS.map((section, index) => {
    const entry = [
      `value: '${section.value}'`,
      `label: '${section.label}'`,
      state.icons && `icon: <${section.iconName} />`,
      state.panels && `content: '${PANELS[section.value]}'`,
      state.disabled && index === SECTIONS.length - 1 && 'disabled: true',
    ].filter(Boolean);

    return `    { ${entry.join(', ')} },`;
  }).join('\n');

  return `
<Tabs
  ${props.join('\n  ')}
  items={[
${items}
  ]}
/>
`.trim();
}
