import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuProps } from './dropdown-menu.types';
import {
  dropdownMenuContentStyles,
  dropdownMenuTriggerStyles,
} from './dropdown-menu.styles';
import { cn } from '@/lib/cn';
import {
  animateDropdownEnter,
  animateDropdownExit,
} from './dropdown-menu.animation';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  menuLabelStyles,
  menuShortcutStyles,
} from '@/components/shared/surface.styles';
import { createStyledElement } from '@/lib/createStyledElement';

export function DropdownMenu({
  children,
  trigger,
  variant = 'default',
  size = 'md',
  side = 'bottom',
  open: openProp,
  onOpenChange,
  disabled,
  forceState,
  portal = true,
  positioning = 'floating',
}: DropdownMenuProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateDropdownEnter,
      animateExit: animateDropdownExit,
    });
  const pinned = openProp !== undefined;
  const isStatic = positioning === 'static';

  return (
    <DropdownMenuPrimitive.Root
      open={openProp ?? open}
      onOpenChange={(next) => {
        onOpenChange?.(next);

        if (!pinned) handleOpenChange(next);
      }}
      modal={pinned ? false : undefined}
    >
      <DropdownMenuPrimitive.Trigger
        disabled={disabled}
        data-force={forceState}
        className={cn(
          dropdownMenuTriggerStyles({
            variant,
            size,
          }),
        )}
      >
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      {(() => {
        const content = (
          <DropdownMenuPrimitive.Content
            ref={setContentRef}
            side={isStatic ? undefined : side}
            sideOffset={isStatic ? 0 : 6}
            avoidCollisions={!isStatic}
            className={cn(
              dropdownMenuContentStyles,
              isStatic && 'relative mt-1',
            )}
          >
            {children}
          </DropdownMenuPrimitive.Content>
        );
        return portal ? (
          <DropdownMenuPrimitive.Portal>{content}</DropdownMenuPrimitive.Portal>
        ) : (
          content
        );
      })()}
    </DropdownMenuPrimitive.Root>
  );
}

export function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(menuLabelStyles, className)}
      {...props}
    />
  );
}

/* eslint-disable react-refresh/only-export-components */
export const DropdownMenuShortcut = createStyledElement(
  'div',
  menuShortcutStyles,
);
