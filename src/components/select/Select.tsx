import * as SelectPrimitive from '@radix-ui/react-select';
import type { SelectProps } from './select.types';
import { ChevronDown } from '../../ui/ChevronDown';
import {
  selectContentStyles,
  selectTriggerStyles,
  selectViewportStyles,
} from './select.styles';
import { cn } from '@/lib/cn';
import { animateSelectEnter, animateSelectExit } from './select.animation';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';

export function Select({
  children,
  variant = 'default',
  size = 'md',
  width = 'md',
  error,
  placeholder,
  ...props
}: SelectProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateSelectEnter,
      animateExit: animateSelectExit,
    });
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
          className={selectContentStyles}
        >
          <SelectPrimitive.Viewport className={selectViewportStyles}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
