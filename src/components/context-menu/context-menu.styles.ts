import { menuStyles, surfaceStyles } from '@/components/shared/surface.styles';

export const contextMenuContentStyles = [
  surfaceStyles(),
  menuStyles,
  'z-50 origin-(--radix-context-menu-content-transform-origin)',
  'max-h-[calc(100vh-var(--space-9)*2)] overflow-y-auto',
].join(' ');

export const contextMenuTriggerStyles = [
  'cursor-context-menu',
  'data-[state=open]:bg-subtle',
].join(' ');

export const contextMenuCheckableItemStyles = 'relative ps-9';

export const contextMenuIndicatorStyles = [
  'absolute start-2.5 inset-y-0 my-auto',
  'grid place-items-center size-icon-md',
].join(' ');

export const contextMenuArrowStyles = 'ms-auto text-fg-tertiary';

export const contextMenuSubTriggerStyles = 'data-[state=open]:bg-subtle';
