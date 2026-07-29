import * as SelectPrimitive from '@radix-ui/react-select';

import type { SelectProps } from './select.types';
import { ChevronDown } from '../../ui/ChevronDown';
import {
  selectContentStyles,
  selectTriggerStyles,
  selectViewportStyles,
} from './select.styles';
import { cn } from '../../lib/cn';
import { useRef, useState } from 'react';
import { animateSelectEnter, animateSelectExit } from './select.animation';

export function Select({
  children,
  variant = 'default',
  size = 'md',
  width = 'md',
  error,
  placeholder,
  ...props
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const setContentRef = (node: HTMLDivElement | null) => {
    if (!node) {
      contentRef.current = null;
      return;
    }

    contentRef.current = node;
    animateSelectEnter(node);
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

    animateSelectExit(contentRef.current, () => {
      setOpen(false);
    });
  };
  return (
    <SelectPrimitive.Root
      open={open}
      onOpenChange={handleOpenChange}
      {...props}
    >
      <SelectPrimitive.Trigger
        className={cn(
          selectTriggerStyles({
            variant,
            size,
            width,
            error,
          }),
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />

        <SelectPrimitive.Icon>
          <ChevronDown className='h-4 w-4' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={setContentRef}
          className={cn(selectContentStyles)}
        >
          <SelectPrimitive.Viewport className={cn(selectViewportStyles)}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
