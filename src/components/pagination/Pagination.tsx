import { forwardRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/button/Button';
import { Select } from '@/components/select/Select';
import { SelectItem } from '@/components/select/SelectItem';
import { ChevronLeft } from '@/ui/icons/ChevronLeft';
import { ChevronRight } from '@/ui/icons/ChevronRight';
import { PaginationContext, usePagination } from './pagination.context';
import {
  paginationControlsStyles,
  paginationEllipsisStyles,
  paginationGroupStyles,
  paginationLeadStyles,
  paginationPageStyles,
  paginationPagesStyles,
  paginationRangeStyles,
  paginationSizeLabelStyles,
  paginationSizeStyles,
  paginationStyles,
  paginationTrailStyles,
} from './pagination.styles';
import type {
  PaginationContextValue,
  PaginationForceTarget,
  PaginationPageSizeProps,
  PaginationPagesProps,
  PaginationPlacement,
  PaginationPrevNextProps,
  PaginationProps,
  PaginationRangeInfo,
  PaginationRangeProps,
} from './pagination.types';
import { createStyledElement } from '@/lib/createStyledElement';

const GAP = 'gap';

const range = (start: number, end: number) =>
  Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i);

const defaultFormatRange = ({ from, to, total }: PaginationRangeInfo) => (
  <>
    <b>
      {from}–{to}
    </b>{' '}
    of <b>{total}</b>
  </>
);

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageSize,
      total,
      onPageChange,
      children,
      label = 'Pagination',
      size = 'sm',
      showRange = true,
      rangePlacement = 'start',
      formatRange = defaultFormatRange,
      showPages = false,
      siblingCount = 1,
      boundaryCount = 1,
      pageLabel = (value) => `Page ${value}`,
      previousLabel = 'Previous',
      nextLabel = 'Next',
      pageSizeOptions,
      pageSizePlacement = 'start',
      onPageSizeChange,
      pageSizeLabel = 'Rows per page',
      forceState,
      forceTarget,
      className,
      ...props
    },
    ref,
  ) => {
    if (pageSize <= 0 || total <= 0) return null;

    const pageCount = Math.ceil(total / pageSize);

    if (pageCount < 1) return null;

    const current = Math.min(Math.max(page, 1), pageCount);
    const from = (current - 1) * pageSize + 1;
    const to = Math.min(current * pageSize, total);

    const goTo = (next: number) => {
      if (next === current || next < 1 || next > pageCount) return;
      onPageChange(next);
    };

    const forced = forceTarget ?? current;

    const value: PaginationContextValue = {
      page: current,
      pageCount,
      from,
      to,
      total,
      pageSize,
      size,
      siblingCount,
      boundaryCount,
      pageSizeOptions,
      pageSizeLabel,
      previousLabel,
      nextLabel,
      pageLabel,
      formatRange,
      goTo,
      setPageSize: (next) => onPageSizeChange?.(next),
      force: (target: PaginationForceTarget) =>
        target === forced ? forceState : undefined,
    };

    const rangeAt: PaginationPlacement = showRange ? rangePlacement : 'none';
    const sizeAt: PaginationPlacement = pageSizeOptions?.length
      ? pageSizePlacement
      : 'none';

    const slot = (placement: PaginationPlacement) => {
      const nodes: ReactNode[] = [];
      if (rangeAt === placement) nodes.push(<PaginationRange key='range' />);
      if (sizeAt === placement) nodes.push(<PaginationPageSize key='size' />);
      return nodes;
    };

    const lead = slot('start');
    const trail = slot('end');

    return (
      <PaginationContext.Provider value={value}>
        <nav
          ref={ref}
          aria-label={label}
          className={cn(paginationStyles, className)}
          {...props}
        >
          {children ?? (
            <>
              {lead.length > 0 && (
                <PaginationGroup className={paginationLeadStyles}>
                  {lead}
                </PaginationGroup>
              )}

              <PaginationControls>
                <PaginationPrevious />

                {showPages && <PaginationPages />}

                <PaginationNext />
              </PaginationControls>

              {trail.length > 0 && (
                <PaginationGroup className={paginationTrailStyles}>
                  {trail}
                </PaginationGroup>
              )}
            </>
          )}
        </nav>
      </PaginationContext.Provider>
    );
  },
);

const PaginationGroup = createStyledElement('div', paginationGroupStyles);
const PaginationControls = createStyledElement('div', paginationControlsStyles);

const PaginationRange = forwardRef<HTMLParagraphElement, PaginationRangeProps>(
  ({ formatRange, className, children, ...props }, ref) => {
    const { from, to, total, page, pageCount, ...context } = usePagination();
    const render = formatRange ?? context.formatRange;

    return (
      <p ref={ref} className={cn(paginationRangeStyles, className)} {...props}>
        {children ?? render({ from, to, total, page, pageCount })}
      </p>
    );
  },
);

const PaginationPageSize = forwardRef<HTMLDivElement, PaginationPageSizeProps>(
  (
    { options, label, onPageSizeChange, className, children, ...props },
    ref,
  ) => {
    const context = usePagination();
    const values = options ?? context.pageSizeOptions;

    if (!values?.length) return null;

    const text = label ?? context.pageSizeLabel;
    const change = onPageSizeChange ?? context.setPageSize;

    return (
      <div ref={ref} className={cn(paginationSizeStyles, className)} {...props}>
        {children ?? (
          <>
            {text != null && (
              <span className={paginationSizeLabelStyles}>{text}</span>
            )}

            <Select
              size={context.size}
              width='auto'
              value={String(context.pageSize)}
              aria-label={typeof text === 'string' ? text : undefined}
              onValueChange={(next) => change(Number(next))}
            >
              {values.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </Select>
          </>
        )}
      </div>
    );
  },
);

const PaginationPrevious = forwardRef<
  HTMLButtonElement,
  PaginationPrevNextProps
>(({ children, onClick, ...props }, ref) => {
  const { page, size, previousLabel, goTo, force } = usePagination();

  return (
    <Button
      ref={ref}
      variant='secondary'
      size={size}
      disabled={page <= 1}
      forceState={force('previous')}
      leftIcon={<ChevronLeft />}
      {...props}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        goTo(page - 1);
      }}
    >
      {children ?? previousLabel}
    </Button>
  );
});

const PaginationNext = forwardRef<HTMLButtonElement, PaginationPrevNextProps>(
  ({ children, onClick, ...props }, ref) => {
    const { page, pageCount, size, nextLabel, goTo, force } = usePagination();

    return (
      <Button
        ref={ref}
        variant='secondary'
        size={size}
        disabled={page >= pageCount}
        forceState={force('next')}
        rightIcon={<ChevronRight />}
        {...props}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          goTo(page + 1);
        }}
      >
        {children ?? nextLabel}
      </Button>
    );
  },
);

const PaginationPages = forwardRef<HTMLDivElement, PaginationPagesProps>(
  ({ siblingCount, boundaryCount, pageLabel, className, ...props }, ref) => {
    const context = usePagination();

    const entries = buildPages(
      context.page,
      context.pageCount,
      siblingCount ?? context.siblingCount,
      boundaryCount ?? context.boundaryCount,
    );

    const name = pageLabel ?? context.pageLabel;

    return (
      <div
        ref={ref}
        className={cn(paginationPagesStyles, className)}
        {...props}
      >
        {entries.map((entry, index) =>
          entry === GAP ? (
            <span
              key={`${GAP}-${index}`}
              aria-hidden='true'
              className={paginationEllipsisStyles({ size: context.size })}
            >
              …
            </span>
          ) : (
            <Button
              key={entry}
              variant='ghost'
              size={context.size}
              aria-current={entry === context.page ? 'page' : undefined}
              aria-label={name(entry)}
              forceState={context.force(entry)}
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                if (event.defaultPrevented) return;
                context.goTo(entry);
              }}
              className={paginationPageStyles}
            >
              {entry}
            </Button>
          ),
        )}
      </div>
    );
  },
);

function buildPages(
  page: number,
  pageCount: number,
  siblingCount: number,
  boundaryCount: number,
): (number | typeof GAP)[] {
  if (pageCount <= boundaryCount * 2 + siblingCount * 2 + 3) {
    return range(1, pageCount);
  }

  const startPages = range(1, boundaryCount);
  const endPages = range(pageCount - boundaryCount + 1, pageCount);

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      pageCount - boundaryCount - siblingCount * 2 - 1,
    ),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    pageCount - boundaryCount - 1,
  );

  const startGap: (number | typeof GAP)[] =
    siblingsStart > boundaryCount + 2 ? [GAP] : [boundaryCount + 1];

  const endGap: (number | typeof GAP)[] =
    siblingsEnd < pageCount - boundaryCount - 1
      ? [GAP]
      : [pageCount - boundaryCount];

  return [
    ...startPages,
    ...startGap,
    ...range(siblingsStart, siblingsEnd),
    ...endGap,
    ...endPages,
  ];
}

export {
  Pagination,
  PaginationControls,
  PaginationGroup,
  PaginationNext,
  PaginationPageSize,
  PaginationPages,
  PaginationPrevious,
  PaginationRange,
};
