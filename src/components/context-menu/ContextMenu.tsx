import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { cn } from '@/lib/cn';
import { createStyledElement } from '@/lib/createStyledElement';

import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  menuLabelStyles,
  menuShortcutStyles,
} from '@/components/shared/surface.styles';

import { ContextMenuContext } from './context-menu.context';
import type { ContextMenuProps } from './context-menu.types';
import {
  contextMenuContentStyles,
  contextMenuTriggerStyles,
} from './context-menu.styles';
import {
  animateContextMenuEnter,
  animateContextMenuExit,
} from './context-menu.animation';

export function ContextMenu({
  trigger,
  children,
  open: openProp,
  onOpenChange,
  size = 'md',
  checkable = false,
  disabled,
  className,
  triggerClassName,
}: ContextMenuProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateContextMenuEnter,
      animateExit: animateContextMenuExit,
    });

  const pinned = openProp !== undefined;

  return (
    <ContextMenuContext.Provider value={{ size, checkable }}>
      <ContextMenuPrimitive.Root
        open={openProp ?? open}
        onOpenChange={(next) => {
          onOpenChange?.(next);

          if (!pinned) handleOpenChange(next);
        }}
      >
        <ContextMenuPrimitive.Trigger
          disabled={disabled}
          className={cn(contextMenuTriggerStyles, triggerClassName)}
        >
          {trigger}
        </ContextMenuPrimitive.Trigger>

        <ContextMenuPrimitive.Portal>
          <ContextMenuPrimitive.Content
            ref={setContentRef}
            data-checkable={checkable || undefined}
            className={cn(contextMenuContentStyles, className)}
          >
            {children}
          </ContextMenuPrimitive.Content>
        </ContextMenuPrimitive.Portal>
      </ContextMenuPrimitive.Root>
    </ContextMenuContext.Provider>
  );
}

export function ContextMenuLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>) {
  return (
    <ContextMenuPrimitive.Label
      className={cn(menuLabelStyles, className)}
      {...props}
    />
  );
}

export function ContextMenuGroup(
  props: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group>,
) {
  return <ContextMenuPrimitive.Group {...props} />;
}

/* eslint-disable react-refresh/only-export-components */
export const ContextMenuShortcut = createStyledElement(
  'span',
  menuShortcutStyles,
);
