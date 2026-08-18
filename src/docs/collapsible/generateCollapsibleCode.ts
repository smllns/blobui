import {
  COLLAPSIBLE_COPY,
  type CollapsiblePlaygroundState,
} from './collapsibleConstants';

export function generateCollapsibleCode(state: CollapsiblePlaygroundState) {
  const props = [
    `trigger="${COLLAPSIBLE_COPY.trigger}"`,
    `triggerOpen="${COLLAPSIBLE_COPY.triggerOpen}"`,
    state.variant !== 'ghost' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
    state.align !== 'start' && `align="${state.align}"`,
    state.open && 'defaultOpen',
    state.peek && 'peek',
    state.disabled && 'disabled',
    state.loading && 'loading',
  ].filter(Boolean);

  return `
<Collapsible
  ${props.join('\n  ')}
>
  ${COLLAPSIBLE_COPY.body}
</Collapsible>
`.trim();
}
