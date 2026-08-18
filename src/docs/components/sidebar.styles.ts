export const itemStyles = (isActive: boolean) =>
  [
    'flex items-center justify-between rounded-sm px-2.5 py-2',
    'text-body-md no-underline',
    'transition-colors duration-(--duration-instant) ease-out',
    'focus-visible:focus-ring',
    isActive
      ? 'bg-primary-muted font-medium text-primary-fg'
      : 'text-fg-secondary hover:bg-subtle hover:text-fg',
  ].join(' ');
