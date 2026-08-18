import { forwardRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { ChevronRight } from '@/ui/icons/ChevronRight';
import { MoreHorizontal } from '@/ui/icons/MoreHorizontal';
import {
  breadcrumbEllipsisStyles,
  breadcrumbEntryStyles,
  breadcrumbItemStyles,
  breadcrumbListStyles,
  breadcrumbSeparatorStyles,
  breadcrumbStyles,
} from './breadcrumb.styles';
import type { BreadcrumbItem, BreadcrumbProps } from './breadcrumb.types';

const ELLIPSIS = 'ellipsis';

type Entry = BreadcrumbItem | typeof ELLIPSIS;

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      label = 'Breadcrumb',
      separator,
      maxItems = 0,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 2,
      ellipsisLabel = 'Show the levels in between',
      renderEllipsis,
      ellipsisForceState,
      className,
      ...props
    },
    ref,
  ) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      setExpanded(false);
    }, [items]);

    const collapsible =
      maxItems > 0 &&
      items.length > maxItems &&
      itemsBeforeCollapse + itemsAfterCollapse < items.length;

    const hidden = collapsible
      ? items.slice(itemsBeforeCollapse, items.length - itemsAfterCollapse)
      : [];

    const entries: Entry[] = collapsible
      ? [
          ...items.slice(0, itemsBeforeCollapse),
          ELLIPSIS,
          ...(expanded ? hidden : []),
          ...items.slice(items.length - itemsAfterCollapse),
        ]
      : items;

    const mark = separator ?? <ChevronRight size='xs' />;

    return (
      <nav
        ref={ref}
        aria-label={label}
        className={cn(breadcrumbStyles, className)}
        {...props}
      >
        <ol role='list' className={breadcrumbListStyles}>
          {entries.map((entry, index) => (
            <li
              key={
                entry === ELLIPSIS
                  ? ELLIPSIS
                  : `${entry.href ?? entry.label}-${index}`
              }
              className={breadcrumbEntryStyles}
            >
              {entry === ELLIPSIS
                ? (renderEllipsis?.(hidden) ?? (
                    <button
                      type='button'
                      aria-label={ellipsisLabel}
                      aria-expanded={expanded}
                      onClick={() => setExpanded((open) => !open)}
                      data-force={ellipsisForceState}
                      className={breadcrumbEllipsisStyles}
                    >
                      <MoreHorizontal size='sm' />
                    </button>
                  ))
                : renderItem(entry, index === entries.length - 1)}

              {index < entries.length - 1 && (
                <span aria-hidden='true' className={breadcrumbSeparatorStyles}>
                  {mark}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);

function renderItem(item: BreadcrumbItem, current: boolean): ReactNode {
  const className = cn(
    breadcrumbItemStyles({
      current,
      disabled: item.disabled,
      interactive: !current && !item.disabled,
    }),
    item.className,
  );

  const title = typeof item.label === 'string' ? item.label : undefined;
  const force = !current && !item.disabled ? item.forceState : undefined;

  const content = (
    <>
      {item.icon}
      <span className='min-w-0 truncate'>{item.label}</span>
    </>
  );

  if (current) {
    return (
      <span aria-current='page' title={title} className={className}>
        {content}
      </span>
    );
  }

  if (item.disabled) {
    return (
      <span aria-disabled='true' title={title} className={className}>
        {content}
      </span>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        title={title}
        onClick={item.onClick}
        data-force={force}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type='button'
      title={title}
      onClick={item.onClick}
      data-force={force}
      className={className}
    >
      {content}
    </button>
  );
}
