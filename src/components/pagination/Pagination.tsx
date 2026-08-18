import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/button/Button';
import { Select } from '@/components/select/Select';
import { SelectItem } from '@/components/select/SelectItem';
import { ChevronLeft } from '@/ui/icons/ChevronLeft';
import { ChevronRight } from '@/ui/icons/ChevronRight';
import {
  paginationControlsStyles,
  paginationEllipsisStyles,
  paginationLeadStyles,
  paginationPageStyles,
  paginationPagesStyles,
  paginationRangeStyles,
  paginationSizeLabelStyles,
  paginationSizeStyles,
  paginationStyles,
} from './pagination.styles';
import type {
  PaginationForceTarget,
  PaginationProps,
  PaginationRange,
} from './pagination.types';

const GAP = 'gap';

const range = (start: number, end: number) =>
  Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i);

const defaultFormatRange = ({ from, to, total }: PaginationRange) => (
  <>
    <b>
      {from}–{to}
    </b>{' '}
    of <b>{total}</b>
  </>
);

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageSize,
      total,
      onPageChange,
      label = 'Pagination',
      size = 'sm',
      showRange = true,
      formatRange = defaultFormatRange,
      showPages = false,
      siblingCount = 1,
      boundaryCount = 1,
      pageLabel = (value) => `Page ${value}`,
      previousLabel = 'Previous',
      nextLabel = 'Next',
      pageSizeOptions,
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
    const force = (target: PaginationForceTarget) =>
      target === forced ? forceState : undefined;

    return (
      <nav
        ref={ref}
        aria-label={label}
        className={cn(paginationStyles, className)}
        {...props}
      >
        {(showRange || pageSizeOptions) && (
          <div className={paginationLeadStyles}>
            {showRange && (
              <p className={paginationRangeStyles}>
                {formatRange({ from, to, total, page: current, pageCount })}
              </p>
            )}

            {pageSizeOptions && (
              <div className={paginationSizeStyles}>
                <span className={paginationSizeLabelStyles}>
                  {pageSizeLabel}
                </span>

                <Select
                  size={size}
                  width='auto'
                  value={String(pageSize)}
                  onValueChange={(next) => onPageSizeChange?.(Number(next))}
                >
                  {pageSizeOptions.map((option) => (
                    <SelectItem key={option} value={String(option)}>
                      {option}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
          </div>
        )}

        <div className={paginationControlsStyles}>
          <Button
            variant='secondary'
            size={size}
            disabled={current <= 1}
            forceState={force('previous')}
            leftIcon={<ChevronLeft />}
            onClick={() => goTo(current - 1)}
          >
            {previousLabel}
          </Button>

          {showPages && (
            <div className={paginationPagesStyles}>
              {buildPages(current, pageCount, siblingCount, boundaryCount).map(
                (entry, index) =>
                  entry === GAP ? (
                    <span
                      key={`${GAP}-${index}`}
                      aria-hidden='true'
                      className={paginationEllipsisStyles({ size })}
                    >
                      …
                    </span>
                  ) : (
                    <Button
                      key={entry}
                      variant='ghost'
                      size={size}
                      aria-current={entry === current ? 'page' : undefined}
                      aria-label={pageLabel(entry)}
                      forceState={force(entry)}
                      onClick={() => goTo(entry)}
                      className={paginationPageStyles}
                    >
                      {entry}
                    </Button>
                  ),
              )}
            </div>
          )}

          <Button
            variant='secondary'
            size={size}
            disabled={current >= pageCount}
            forceState={force('next')}
            rightIcon={<ChevronRight />}
            onClick={() => goTo(current + 1)}
          >
            {nextLabel}
          </Button>
        </div>
      </nav>
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
