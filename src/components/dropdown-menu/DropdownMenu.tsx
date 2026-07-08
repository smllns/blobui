import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuProps } from './dropdown-menu.types';
import {
  dropdownMenuContentStyles,
  dropdownMenuTriggerStyles,
} from './dropdown-menu.styles';
import { useRef, useState } from 'react';
import {
  animateDropdownEnter,
  animateDropdownExit,
} from './dropdown-menu.animation';

export function DropdownMenu({
  children,
  trigger,
  variant = 'default',
  size = 'md',
  side = 'bottom',
}: DropdownMenuProps & {
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const setContentRef = (node: HTMLDivElement | null) => {
    if (!node) {
      contentRef.current = null;
      return;
    }

    contentRef.current = node;
    animateDropdownEnter(node);
  };

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
      return;
    }

    if (!contentRef.current) {
      setOpen(false);
      return;
    }

    animateDropdownExit(contentRef.current, () => {
      setOpen(false);
    });
  };
  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuPrimitive.Trigger
        className={dropdownMenuTriggerStyles({
          variant,
          size,
        })}
      >
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={setContentRef}
          side={side}
          sideOffset={6}
          className={dropdownMenuContentStyles()}
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
