import type { AvatarPlaygroundState } from './avatarConstants';

export function generateAvatarCode(state: AvatarPlaygroundState) {
  const props = [
    state.variant !== 'default' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.showImage && `src="https://i.pravatar.cc/150?img=3"`,
    state.fallback && `fallback="MS"`,
  ].filter(Boolean);

  return `
<Avatar
  ${props.join('\n  ')}
/>
`.trim();
}
