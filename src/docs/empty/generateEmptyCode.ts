import { EMPTY_COPY } from './empty.data';
import { type EmptyPlaygroundState } from './emptyConstants';

export function generateEmptyCode(state: EmptyPlaygroundState) {
  const copy = EMPTY_COPY[state.state];

  const button = [
    copy.actionVariant !== 'primary' && `variant="${copy.actionVariant}"`,
    copy.actionIcon && `leftIcon={<${copy.actionIcon} />}`,
  ]
    .filter(Boolean)
    .join(' ');

  const props = [
    state.state !== 'no-data' && `state="${state.state}"`,
    state.variant !== 'plain' && `variant="${state.variant}"`,
    state.size !== 'md' && `size="${state.size}"`,
    `title="${copy.title}"`,
    !state.icon && 'icon={null}',
    state.action &&
      `actions={<Button${button ? ` ${button}` : ''}>${copy.actionLabel}</Button>}`,
  ].filter(Boolean);

  if (!state.text) {
    return `
<Empty
  ${props.join('\n  ')}
/>
`.trim();
  }

  return `
<Empty
  ${props.join('\n  ')}
>
  ${copy.text}
</Empty>
`.trim();
}
