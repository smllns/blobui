import {
  Pagination,
  PaginationControls,
  PaginationNext,
  PaginationPages,
  PaginationPrevious,
  PaginationRange,
} from '@/components/pagination/Pagination';
import type { PaginationForceTarget } from '@/components/pagination/pagination.types';
import type { StateSpecimen } from '../components/docsPage.types';
import type { ForceState } from '@/components/shared/types';

const stay = () => undefined;

function strip({
  page = 2,
  force,
  target,
  range,
}: {
  page?: number;
  force?: ForceState;
  target?: PaginationForceTarget;
  range?: boolean;
  loading?: boolean;
} = {}) {
  return (
    <div className={range ? 'w-full max-w-xl' : ''}>
      <Pagination
        page={page}
        pageSize={20}
        total={100}
        onPageChange={stay}
        showPages
        showRange={Boolean(range)}
        forceState={force}
        forceTarget={target}
      />
    </div>
  );
}

export const PAGINATION_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: strip(),
    note: 'default state — shows the current range and available navigation controls',
  },
  {
    name: 'hover',
    node: strip({ force: 'hover', target: 4 }),
    note: 'hover state — the page under the pointer gets the button hover styling',
  },
  {
    name: 'focus',
    node: strip({ force: 'active', target: 4 }),
    note: 'focus state — the active page shows the button focus styling',
  },
  {
    name: 'disabled · first',
    node: strip({ page: 1 }),
    note: 'first page — Previous is disabled because there is no earlier page',
  },
  {
    name: 'disabled · last',
    node: strip({ page: 5 }),
    note: 'last page — Next is disabled because there is no following page',
  },
  {
    name: 'range · end',
    node: (
      <div className='w-full max-w-xl'>
        <Pagination
          page={2}
          pageSize={20}
          total={100}
          onPageChange={stay}
          showPages
          rangePlacement='end'
        />
      </div>
    ),
    note: 'rangePlacement="end" — the range is shown after the navigation controls',
  },
  {
    name: 'composed',
    node: (
      <div className='w-full max-w-xl'>
        <Pagination
          page={2}
          pageSize={20}
          total={100}
          onPageChange={stay}
          forceState='hover'
          forceTarget='next'
        >
          <PaginationControls>
            <PaginationPrevious />

            <PaginationPages />

            <PaginationNext />
          </PaginationControls>

          <PaginationRange className='ms-auto' />
        </Pagination>
      </div>
    ),
    note: 'composed layout — controls are arranged manually using Pagination subcomponents',
  },
];
