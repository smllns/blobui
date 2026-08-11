import type { ToastPlaygroundState } from './toastConstants';

export function generateToastCode(state: ToastPlaygroundState) {
  const options = [
    state.tone !== 'neutral' && `tone: '${state.tone}'`,
    state.size !== 'md' && `size: '${state.size}'`,
    `title: '${state.title}'`,
    state.description && `description: 'This is a toast message'`,
    !state.icon && `icon: null`,
    state.action &&
      `action: (
        <Button size='xs' variant='ghost'>
          <Reply />
        </Button>
      )`,
    !state.showClose && `showClose: false`,
    state.duration !== 2000 && `duration: ${state.duration}`,
  ].filter(Boolean);

  return `const { toasts, showToast, dismissToast } = useToast();

const handleShowToast = () => {
  showToast({
    ${options.join(',\n    ')}
  });
};

return (
  <>
    <Button onClick={handleShowToast}>
      Show toast
    </Button>

    <ToastContainer
      toasts={toasts}
      onClose={dismissToast}
    />
  </>
);`.trim();
}
