export function generateTooltipCode(state: any) {
  return `
<Tooltip
  content="${state.content}"
  variant="${state.variant}"
  size="${state.size}"
  side="${state.side}"
  align="${state.align}"
  ${state.startIcon ? 'startIcon={<Icon />}' : ''}
  ${state.endIcon ? 'endIcon={<Icon />}' : ''}
>
  <Button>Hover me</Button>
</Tooltip>
`.trim();
}
