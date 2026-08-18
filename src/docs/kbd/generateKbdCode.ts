import { KBD_CHORD, KBD_SINGLE, type KbdPlaygroundState } from './kbdConstants';

export function generateKbdCode(state: KbdPlaygroundState) {
  const shared = [
    state.size !== 'md' && `size="${state.size}"`,
    state.variant !== 'default' && `variant="${state.variant}"`,
  ].filter(Boolean);

  const attrs = shared.length ? ` ${shared.join(' ')}` : '';

  const element = state.group
    ? `<KbdGroup keys={[${KBD_CHORD.map((key) => `'${key}'`).join(', ')}]}${attrs} />`
    : `<Kbd${attrs}${state.pressed ? ' pressed' : ''}>${KBD_SINGLE}</Kbd>`;

  if (!state.inline) return element;

  return `<p>
  Press ${element} to open the command bar.
</p>`;
}
