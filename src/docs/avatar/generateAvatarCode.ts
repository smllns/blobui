import type { AvatarPlaygroundState } from './avatarConstants';

export function generateAvatarCode(state: AvatarPlaygroundState) {
  const props = [
    state.shape !== 'circle' && `shape="${state.shape}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.status !== 'none' && `status="${state.status}"`,
    state.showImage && `src="https://i.pravatar.cc/150?img=3"`,
    state.fallback && `fallback="MS"`,
  ].filter(Boolean);

  return `
<Avatar
  ${props.join('\n  ')}
/>
`.trim();
}
