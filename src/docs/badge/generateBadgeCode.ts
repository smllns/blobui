import type { BadgePlaygroundState } from './badgeConstants';

export function generateBadgeCode(state: BadgePlaygroundState) {
  const props = [
    state.tone !== 'neutral' && `tone="${state.tone}"`,
    state.emphasis !== 'soft' && `emphasis="${state.emphasis}"`,
    state.shape !== 'pill' && `shape="${state.shape}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.dot && 'dot',
    state.leftIcon && 'leftIcon={<Check />}',
    state.rightIcon && 'rightIcon={<ArrowRight />}',
  ].filter(Boolean);

  return `
<Badge
  ${props.join('\n  ')}
>
  Badge
</Badge>
`.trim();
}
