import { useState } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Pagination } from '@/components/pagination/Pagination';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  PAGINATION_CONTROLS,
  PAGINATION_PAGE_SIZE,
  PAGINATION_PAGE_SIZE_OPTIONS,
  PAGINATION_TOTAL,
  PAGINATION_INITIAL_STATE,
} from './paginationConstants';
import { generatePaginationCode } from './generatePaginationCode';

export function PaginationPlayground() {
  const { state, update } = usePlaygroundState(PAGINATION_INITIAL_STATE);

  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(PAGINATION_PAGE_SIZE);

  const controls = PAGINATION_CONTROLS.filter(
    (control) => control.key !== 'siblings' || state.showPages,
  );

  const withPageSize = state.pageSizePlacement !== 'none';

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer state={state} update={update} controls={controls} />
      }
      preview={
        <div className='w-full max-w-xl'>
          <Pagination
            page={page}
            pageSize={withPageSize ? pageSize : PAGINATION_PAGE_SIZE}
            total={PAGINATION_TOTAL}
            onPageChange={setPage}
            size={state.size}
            rangePlacement={state.rangePlacement}
            showPages={state.showPages}
            siblingCount={Number(state.siblings)}
            pageSizePlacement={state.pageSizePlacement}
            pageSizeOptions={
              withPageSize ? PAGINATION_PAGE_SIZE_OPTIONS : undefined
            }
            onPageSizeChange={
              withPageSize
                ? (next) => {
                    setPageSize(next);
                    setPage(1);
                  }
                : undefined
            }
          />
        </div>
      }
      code={<CodeBlock code={generatePaginationCode(state)} />}
    />
  );
}
