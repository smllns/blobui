export const browserBarStyles = 'mb-5 flex flex-wrap items-center gap-3';

export const browserSearchStyles = 'min-w-56 flex-1';

export const browserCountStyles =
  'font-mono text-caption whitespace-nowrap text-fg-tertiary';

export const browserActionsStyles = 'ms-auto flex gap-2';

export const groupStyles = 'mb-5';

export const groupTitleStyles =
  'mb-2 text-caption font-medium tracking-[0.05em] text-fg-tertiary uppercase';

export const groupCountStyles = 'text-fg-placeholder';

export const groupListStyles = 'flex flex-col gap-2';

export const rowStyles =
  'overflow-hidden rounded-lg border border-border-subtle bg-surface';

export const rowOpenStyles = 'border-border';

export const rowHeadStyles = [
  'flex flex-1 cursor-pointer items-center gap-3 py-2.5 ps-4 pe-2 text-start',
  'transition-colors duration-(--duration-instant) ease-out',
  'hover:bg-hover focus-visible:focus-ring',
].join(' ');

export const rowBarStyles = 'flex items-center pe-2';

export const rowChevronStyles = [
  'size-icon-sm shrink-0 text-fg-placeholder',
  'transition-transform duration-(--duration-fast) ease-out',
].join(' ');

export const rowChevronOpenStyles = 'rotate-90';

export const rowPathStyles = 'font-mono text-body-sm text-fg';

export const rowMarkStyles =
  'rounded-xs bg-warning-subtle px-px text-warning-fg';

export const rowSizeStyles =
  'ms-auto font-mono text-micro whitespace-nowrap text-fg-placeholder';

export const rowBodyStyles = [
  'max-h-104 overflow-auto border-t border-border-subtle bg-sunken',
  'px-5 py-4 font-mono text-body-sm leading-relaxed whitespace-pre text-fg',
].join(' ');

export const browserEmptyStyles = 'text-body-sm text-fg-tertiary';

export const tabRowStyles = 'flex gap-1 border-b border-border-subtle';

export const tabStyles = (selected: boolean) =>
  [
    '-mb-px cursor-pointer border-0 bg-transparent px-3 py-2',
    'text-body-sm border-b-2',
    'transition-colors duration-(--duration-instant) ease-out',
    'focus-visible:focus-ring focus-visible:rounded-sm focus-visible:outline-none',
    selected
      ? 'border-primary font-medium text-fg'
      : 'border-transparent text-fg-tertiary hover:text-fg',
  ].join(' ');

export const tabPanelStyles = 'pt-6';

export const zipPanelStyles = 'flex flex-col items-start gap-4';

export const zipNoteStyles = 'max-w-[60ch] text-body-md text-fg-secondary';

export const zipMetaStyles = 'font-mono text-body-sm text-fg-tertiary';
