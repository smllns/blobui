import { forwardRef, useCallback, useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import { buttonGroupStyles } from './button-group.styles';
import type { ButtonGroupProps } from './button-group.types';
import { mergeRefs } from '@/lib/mergeRefs';

const MEMBER_SELECTOR = ':scope > button:not(:disabled)';

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      orientation = 'horizontal',
      gap = 'joined',
      block = false,
      role = 'group',
      disabled,
      loading,
      className,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const roving = role === 'toolbar';

    const setRootRef = mergeRefs(rootRef, ref);

    const members = useCallback((): HTMLElement[] => {
      const root = rootRef.current;
      if (!root) return [];

      return Array.from(root.querySelectorAll<HTMLElement>(MEMBER_SELECTOR));
    }, []);

    useEffect(() => {
      if (!roving) return;

      const items = members();
      if (!items.length) return;

      if (items.some((item) => item.tabIndex === 0)) return;

      items.forEach((item, index) => {
        item.tabIndex = index === 0 ? 0 : -1;
      });
    }, [roving, members, children]);

    const inert = Boolean(disabled) || Boolean(loading);

    useEffect(() => {
      const items = members();

      items.forEach((item, index) => {
        if (inert) {
          item.setAttribute('data-group-inert', '');
          item.setAttribute('aria-disabled', 'true');
          item.tabIndex = -1;
          return;
        }

        if (item.hasAttribute('data-group-inert')) {
          item.removeAttribute('data-group-inert');
          item.removeAttribute('aria-disabled');
        }
        item.tabIndex = roving ? (index === 0 ? 0 : -1) : 0;
      });
    }, [inert, roving, members, children]);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      if (inert && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        return;
      }

      if (!roving || event.defaultPrevented) return;

      const next = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      const previous = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      if (![next, previous, 'Home', 'End'].includes(event.key)) return;

      const items = members();
      if (!items.length) return;

      event.preventDefault();

      const current = items.indexOf(document.activeElement as HTMLElement);

      let target: HTMLElement;
      if (event.key === 'Home') target = items[0];
      else if (event.key === 'End') target = items[items.length - 1];
      else if (event.key === next)
        target = items[(current + 1 + items.length) % items.length];
      else target = items[(current - 1 + items.length) % items.length];

      items.forEach((item) => {
        item.tabIndex = item === target ? 0 : -1;
      });
      target.focus();
    };

    return (
      <div
        ref={setRootRef}
        role={role}
        data-orientation={orientation}
        data-gap={gap}
        data-block={block || undefined}
        data-disabled={disabled || undefined}
        data-loading={loading || undefined}
        aria-disabled={disabled || undefined}
        onKeyDown={handleKeyDown}
        className={cn(
          buttonGroupStyles({ orientation, gap, block }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
