import { forwardRef, useId, useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import {
  tabBadgeStyles,
  tabPanelStyles,
  tabStyles,
  tabsListStyles,
  tabsRootStyles,
} from './tabs.styles';
import type { TabItem, TabsProps } from './tabs.types';

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      value,
      defaultValue,
      onValueChange,
      orientation = 'horizontal',
      size = 'md',
      block = false,
      activation = 'automatic',
      className,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const reachable = items.filter((item) => !item.disabled);

    const [internal, setInternal] = useState(
      defaultValue ?? reachable[0]?.value ?? '',
    );
    const selected = value ?? internal;

    const [focused, setFocused] = useState<string | null>(null);

    const tabs = useRef(new Map<string, HTMLButtonElement>());
    const generatedId = useId();
    const baseId = id ?? generatedId;
    const tabId = (item: string) => `${baseId}-tab-${item}`;
    const panelId = (item: string) => `${baseId}-panel-${item}`;

    const hasPanels = items.some((item) => item.content !== undefined);

    const stop =
      focused ??
      (reachable.some((item) => item.value === selected)
        ? selected
        : reachable[0]?.value);

    const select = (next: string) => {
      if (next === selected) return;

      if (value === undefined) setInternal(next);
      onValueChange?.(next);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const next = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      const previous = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      if (![next, previous, 'Home', 'End'].includes(event.key)) return;
      if (!reachable.length) return;

      event.preventDefault();

      const current = Math.max(
        0,
        reachable.findIndex((item) => item.value === stop),
      );

      let target: TabItem;
      if (event.key === 'Home') target = reachable[0];
      else if (event.key === 'End') target = reachable[reachable.length - 1];
      else if (event.key === next)
        target = reachable[(current + 1) % reachable.length];
      else
        target = reachable[(current - 1 + reachable.length) % reachable.length];

      setFocused(target.value);
      tabs.current.get(target.value)?.focus();

      if (activation === 'automatic') select(target.value);
    };

    const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
      if (event.currentTarget.contains(event.relatedTarget)) return;
      setFocused(null);
    };

    return (
      <div
        ref={ref}
        id={id}
        data-orientation={orientation}
        className={cn(tabsRootStyles({ orientation, block }), className)}
        {...props}
      >
        <div
          role='tablist'
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-orientation={orientation}
          data-orientation={orientation}
          data-size={size}
          data-block={block || undefined}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className={cn(tabsListStyles({ orientation, size, block }))}
        >
          {items.map((item) => {
            const isSelected = item.value === selected;

            return (
              <button
                key={item.value}
                ref={(node) => {
                  if (node) tabs.current.set(item.value, node);
                  else tabs.current.delete(item.value);
                }}
                type='button'
                role='tab'
                id={tabId(item.value)}
                aria-selected={isSelected}
                aria-controls={hasPanels ? panelId(item.value) : undefined}
                data-state={isSelected ? 'active' : 'inactive'}
                data-force={item.forceState}
                tabIndex={item.value === stop ? 0 : -1}
                disabled={item.disabled}
                onClick={() => {
                  setFocused(item.value);
                  select(item.value);
                }}
                className={cn(tabStyles({ orientation, size }))}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className={tabBadgeStyles}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </div>

        {hasPanels &&
          items.map((item) => (
            <div
              key={item.value}
              role='tabpanel'
              id={panelId(item.value)}
              aria-labelledby={tabId(item.value)}
              data-state={item.value === selected ? 'active' : 'inactive'}
              hidden={item.value !== selected}
              tabIndex={0}
              className={cn(tabPanelStyles({ orientation }))}
            >
              {item.content}
            </div>
          ))}
      </div>
    );
  },
);
