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

export function DropdownMenu({
  children,
  trigger,
  variant = 'default',
  size = 'md',
  side = 'bottom',
}: DropdownMenuProps & {
  trigger: React.ReactNode;
}) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateDropdownEnter,
      animateExit: animateDropdownExit,
    });
  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuPrimitive.Trigger
        className={cn(
          dropdownMenuTriggerStyles({
            variant,
            size,
          }),
        )}
      >
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={setContentRef}
          side={side}
          sideOffset={6}
          className={dropdownMenuContentStyles}
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
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

export function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return <span className={cn(menuShortcutStyles, className)} {...props} />;
}
