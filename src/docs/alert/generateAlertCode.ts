import { ALERT_COPY, type AlertPlaygroundState } from './alertConstants';

const ACTIONS = `actions={
    <>
      <Button size="sm" variant="secondary">Refresh</Button>
      <Button size="sm" variant="ghost">Keep the old figures</Button>
    </>
  }`;

export function generateAlertCode(state: AlertPlaygroundState) {
  const props = [
    state.tone !== 'neutral' && `tone="${state.tone}"`,
    state.emphasis !== 'subtle' && `emphasis="${state.emphasis}"`,
    state.title && `title="${ALERT_COPY.title}"`,
    !state.icon && 'icon={null}',
    state.actions && ACTIONS,
    state.dismissible && 'onDismiss={() => setOpen(false)}',
  ].filter(Boolean);

  return `
<Alert
  ${props.join('\n  ')}
>
  ${ALERT_COPY.body}
</Alert>
`.trim();
}
