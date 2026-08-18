import { surfaceStyles } from '@/components/shared/surface.styles';

export const hoverCardContentStyles = [
  'relative z-50 w-72 p-4 outline-none',
  'text-body-md text-fg',
  '[--hover-card-offset:6px]',

  "data-[state=open]:before:content-['']",
  'before:absolute before:pointer-events-auto',

  'data-[side=bottom]:before:inset-x-0',
  'data-[side=bottom]:before:h-[var(--hover-card-offset)]',
  'data-[side=bottom]:before:top-[calc(var(--hover-card-offset)*-1)]',

  'data-[side=top]:before:inset-x-0',
  'data-[side=top]:before:h-[var(--hover-card-offset)]',
  'data-[side=top]:before:bottom-[calc(var(--hover-card-offset)*-1)]',

  'data-[side=right]:before:inset-y-0',
  'data-[side=right]:before:w-[var(--hover-card-offset)]',
  'data-[side=right]:before:left-[calc(var(--hover-card-offset)*-1)]',

  'data-[side=left]:before:inset-y-0',
  'data-[side=left]:before:w-[var(--hover-card-offset)]',
  'data-[side=left]:before:right-[calc(var(--hover-card-offset)*-1)]',
].join(' ');

export const hoverCardContent = (args: Parameters<typeof surfaceStyles>[0]) =>
  [surfaceStyles(args), hoverCardContentStyles].join(' ');

export const hoverCardTriggerStyles = [
  'hovered:decoration-primary',
  'data-[state=open]:decoration-primary',
  'focused:focus-ring',
].join(' ');

export const hoverCardHeaderStyles =
  'mb-3 flex items-start gap-3 pointer-coarse:pe-9';

export const hoverCardTitleStyles = 'm-0 text-body-md font-semibold text-fg';

export const hoverCardSubtitleStyles = 'm-0 text-body-sm text-fg-tertiary';

export const hoverCardBodyStyles =
  'm-0 text-body-sm leading-(--leading-body-lg) text-fg-secondary';

export const hoverCardFooterStyles =
  'mt-4 flex items-center gap-4 text-caption text-fg-tertiary';

export const hoverCardCloseStyles = 'absolute end-3 top-3';

export const hoverCardSkeletonStyles =
  'pointer-events-none select-none pointer-coarse:pe-9';

export const hoverCardSkeletonAvatarStyles =
  'size-10 shrink-0 rounded-full bg-subtle motion-safe:animate-pulse';

export const hoverCardSkeletonBarStyles =
  'block h-3 rounded-sm bg-subtle motion-safe:animate-pulse';
