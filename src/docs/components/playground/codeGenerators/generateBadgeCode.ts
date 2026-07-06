export function generateBadgeCode(state: any) {
  const props = [
    state.variant !== 'default' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.leftIcon && 'leftIcon={<span>🔥</span>}',
    state.rightIcon && 'rightIcon={<span>⚡</span>}',
  ].filter(Boolean);

  return `
<Badge
  ${props.join('\n  ')}
>
  Badge
</Badge>
`.trim();
}
