import type { CardPlaygroundState } from './cardConstants';

export function generateCardCode(state: CardPlaygroundState) {
  const props = [
    state.variant !== 'default' && `variant="${state.variant}"`,
    state.padding !== 'md' && `padding="${state.padding}"`,
  ].filter(Boolean);

  return `
<Card
  ${props.join('\n  ')}
>
  <h3>Card title</h3>
  <p>This is a flexible container for grouping related content.</p>
</Card>
`.trim();
}
