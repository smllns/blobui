import type { ToastPlaygroundState } from './toastConstants';

export function generateToastCode(state: ToastPlaygroundState) {
  const props = [
    state.tone !== 'neutral' && `tone="${state.tone}"`,
    state.size !== 'md' && `size="${state.size}"`,
    `title="${state.title}"`,
    state.description && `description="This is a toast message"`,
    !state.icon && `icon={null}`,
    state.action &&
      `action={ 
  <Button size='xs' variant='outline'>
   Undo
   </Button>}`,
    state.showClose && `onClose={() => {}}`,
  ].filter(Boolean);

  return `
<Toast
  ${props.join('\n  ')}
/>
`.trim();
}
