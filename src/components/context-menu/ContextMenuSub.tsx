import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { cn } from '@/lib/cn';
import { menuItemStyles } from '@/components/shared/surface.styles';
import { ChevronRight } from '@/ui/icons/ChevronRight';

import { useContextMenuContext } from './context-menu.context';
import type { ContextMenuSubProps } from './context-menu.types';
import {
  contextMenuArrowStyles,
  contextMenuSubTriggerStyles,
  contextMenuCheckableItemStyles,
  contextMenuContentStyles,
} from './context-menu.styles';

export function ContextMenuSub({
  trigger,
  children,
  size,
  disabled,
  className,
}: ContextMenuSubProps) {
  const menu = useContextMenuContext();

  return (
    <ContextMenuPrimitive.Sub>
      <ContextMenuPrimitive.SubTrigger
        disabled={disabled}
        className={cn(
          menuItemStyles({ size: size ?? menu.size }),
          menu.checkable && contextMenuCheckableItemStyles,
          contextMenuSubTriggerStyles,
        )}
      >
        {trigger}

        <ChevronRight size='sm' className={contextMenuArrowStyles} />
      </ContextMenuPrimitive.SubTrigger>

      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
          className={cn(contextMenuContentStyles, className)}
        >
          {children}
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Sub>
  );
}
