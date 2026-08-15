import { useEffect, useState } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/cn';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  animateNavigationMenuEnter,
  animateNavigationMenuExit,
} from './navigation-menu.animation';
import { NavigationMenuContext } from './navigation-menu.context';
import {
  navigationMenuListStyles,
  navigationMenuRootStyles,
} from './navigation-menu.styles';
import type { NavigationMenuProps } from './navigation-menu.types';

export function NavigationMenu({
  children,
  className,
  listClassName,
  defaultValue,
  delayDuration = 150,
  ...props
}: NavigationMenuProps) {
  const [value, setValue] = useState(defaultValue ?? '');

  const { open, setOpen, contentRef, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateNavigationMenuEnter,
      animateExit: animateNavigationMenuExit,
    });

  useEffect(() => {
    if (defaultValue) {
      setOpen(true);
    }
  }, [defaultValue, setOpen]);

  const handleValueChange = (next: string) => {
    if (!next) {
      handleOpenChange(false);
      return;
    }

    if (open && contentRef.current) {
      animateNavigationMenuEnter(contentRef.current);
    }

    setValue(next);
    handleOpenChange(true);
  };

  return (
    <NavigationMenuContext.Provider value={{ setContentRef }}>
      <NavigationMenuPrimitive.Root
        {...props}
        delayDuration={delayDuration}
        value={open ? value : ''}
        onValueChange={handleValueChange}
        className={cn(navigationMenuRootStyles, className)}
      >
        <NavigationMenuPrimitive.List
          className={cn(navigationMenuListStyles, listClassName)}
        >
          {children}
        </NavigationMenuPrimitive.List>
      </NavigationMenuPrimitive.Root>
    </NavigationMenuContext.Provider>
  );
}
