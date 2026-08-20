import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { cn } from '@/lib/cn';
import { menuItemStyles } from '@/components/shared/surface.styles';
import { Check } from '@/ui/icons/Check';

import { useContextMenuContext } from './context-menu.context';
import type {
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioItemProps,
} from './context-menu.types';
import {
  contextMenuCheckableItemStyles,
  contextMenuIndicatorStyles,
} from './context-menu.styles';

export function ContextMenuItem({
  variant,
  size,
  highlighted,
  className,
  ...props
}: ContextMenuItemProps) {
  const menu = useContextMenuContext();
  const highlight = highlighted ? { 'data-highlighted': '' } : {};

  return (
    <ContextMenuPrimitive.Item
      className={cn(
        menuItemStyles({ variant, size: size ?? menu.size }),
        menu.checkable && contextMenuCheckableItemStyles,
        className,
      )}
      {...props}
      {...highlight}
    />
  );
}

export function ContextMenuCheckboxItem({
  variant,
  size,
  className,
  children,
  ...props
}: ContextMenuCheckboxItemProps) {
  const menu = useContextMenuContext();

  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(
        menuItemStyles({ variant, size: size ?? menu.size }),
        'relative ps-9',
        'data-[state=checked]:text-primary-fg',
        className,
      )}
      {...props}
    >
      <span className={contextMenuIndicatorStyles}>
        <ContextMenuPrimitive.ItemIndicator>
          <Check size='sm' className='text-primary' />
        </ContextMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioGroup(
  props: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup>,
) {
  return <ContextMenuPrimitive.RadioGroup {...props} />;
}

export function ContextMenuRadioItem({
  size,
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  const menu = useContextMenuContext();

  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(
        menuItemStyles({ size: size ?? menu.size }),
        'relative ps-9',
        'data-[state=checked]:text-primary-fg',
        className,
      )}
      {...props}
    >
      <span className={contextMenuIndicatorStyles}>
        <ContextMenuPrimitive.ItemIndicator>
          <Check size='sm' className='text-primary' />
        </ContextMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}
