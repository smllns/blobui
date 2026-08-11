export const textareaStyles = [
  'w-full min-h-22 px-3 py-2.5',
  'bg-input border border-border-strong rounded-lg shadow-xs',
  'text-fg text-field leading-[var(--leading-body-lg)]',
  'placeholder:text-fg-placeholder',
  'resize-y outline-none',
  'transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-out',
  'enabled:hover:border-primary-border',
  'focus-visible:border-border-focus focus-visible:focus-ring',
  'disabled:bg-disabled disabled:border-border-disabled disabled:text-fg-disabled disabled:cursor-not-allowed',
].join(' ');
