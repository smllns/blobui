export function generateTooltipCode(state: any) {
  const props = [
    `content="${state.content}"`,
    `variant="${state.variant}"`,
    `size="${state.size}"`,
    `side="${state.side}"`,
    `align="${state.align}"`,
  ];

  if (state.startIcon) {
    props.push('startIcon={<Icon />}');
  }

  if (state.endIcon) {
    props.push('endIcon={<Icon />}');
  }

  return `
<Tooltip
  ${props.join('\n  ')}
>
  <Button>Hover me</Button>
</Tooltip>
`.trim();
}
