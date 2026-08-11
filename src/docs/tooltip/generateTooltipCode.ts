import type { TooltipPlaygroundState } from './tooltipConstants';

export function generateTooltipCode(state: TooltipPlaygroundState) {
  const props = [
    `content="${state.content}"`,
    `variant="${state.variant}"`,
    `size="${state.size}"`,
    `side="${state.side}"`,
    `align="${state.align}"`,
  ];

  if (state.startIcon) {
    props.push('startIcon={<Sun />}');
  }

  if (state.endIcon) {
    props.push('endIcon={<Moon />}');
  }

  return `
<Tooltip
  ${props.join('\n  ')}
>
  <Button>Hover me</Button>
</Tooltip>
`.trim();
}
