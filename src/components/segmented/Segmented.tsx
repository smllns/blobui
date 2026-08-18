import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';
import { segmentedItemStyles, segmentedStyles } from './segmented.styles';
import type { SegmentedItem, SegmentedProps } from './segmented.types';
import { Spinner } from '@/ui/icons/Spinner';

const ARROWS = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];

const toValues = (value: string | string[] | undefined) => {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value : [value];
};

export function Segmented(props: SegmentedProps) {
  const {
    items,
    size = 'md',
    block = false,
    disabled = false,
    readOnly = false,
    loading = false,
    className,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const multiple = props.type === 'multiple';
  const inert = disabled || readOnly || loading;

  const reachable = items.filter((item) => !item.disabled);

  const [internal, setInternal] = useState<string[]>(
    () =>
      toValues(props.defaultValue) ??
      (multiple ? [] : reachable.slice(0, 1).map((item) => item.value)),
  );

  const controlled = props.value !== undefined;
  const selected = controlled ? (toValues(props.value) ?? []) : internal;

  const segments = useRef(new Map<string, HTMLButtonElement>());
  const generatedId = useId();
  const baseId = id ?? generatedId;

  const commit = (next: string[]) => {
    if (!controlled) setInternal(next);

    if (props.type === 'multiple') props.onValueChange?.(next);
    else props.onValueChange?.(next[0] ?? '');
  };

  const toggle = (value: string) => {
    if (inert) return;

    if (multiple) {
      commit(
        selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value],
      );
      return;
    }

    if (selected[0] === value) return;
    commit([value]);
  };

  const stop = multiple
    ? null
    : (reachable.find((item) => selected.includes(item.value)) ?? reachable[0])
        ?.value;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (multiple || inert) return;
    if (![...ARROWS, 'Home', 'End'].includes(event.key)) return;
    if (!reachable.length) return;

    event.preventDefault();

    const current = Math.max(
      0,
      reachable.findIndex((item) => item.value === stop),
    );

    let target: SegmentedItem;
    if (event.key === 'Home') target = reachable[0];
    else if (event.key === 'End') target = reachable[reachable.length - 1];
    else if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      target = reachable[(current + 1) % reachable.length];
    else
      target = reachable[(current - 1 + reachable.length) % reachable.length];

    commit([target.value]);
    segments.current.get(target.value)?.focus();
  };

  return (
    <div
      role='group'
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-disabled={disabled || undefined}
      aria-busy={loading || undefined}
      data-size={size}
      data-block={block || undefined}
      data-disabled={disabled || readOnly || undefined}
      data-readonly={readOnly || undefined}
      data-loading={loading || undefined}
      onKeyDown={handleKeyDown}
      className={cn(
        segmentedStyles({
          size,
          block,
          disabled: disabled || readOnly,
          loading,
        }),
        className,
      )}
    >
      {items.map((item) => {
        const isSelected = selected.includes(item.value);
        return (
          <button
            key={item.value}
            ref={(node) => {
              if (node) segments.current.set(item.value, node);
              else segments.current.delete(item.value);
            }}
            type='button'
            id={`${baseId}-item-${item.value}`}
            aria-pressed={isSelected}
            aria-disabled={readOnly || undefined}
            data-state={isSelected ? 'on' : 'off'}
            data-force={item.forceState}
            disabled={item.disabled || disabled}
            tabIndex={multiple || item.value === stop ? 0 : -1}
            onClick={() => toggle(item.value)}
            className={cn(segmentedItemStyles({ size, selected: isSelected }))}
          >
            {loading && isSelected ? <Spinner /> : item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
