import {
  Pagination,
  PaginationControls,
  PaginationNext,
  PaginationPageSize,
  PaginationPrevious,
  PaginationRange,
} from '@/components/pagination/Pagination';
import { useState } from 'react';

export function PaginationPreview() {
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(20);
  const [jumpPage, setJumpPage] = useState(6);
  const [composedPage, setComposedPage] = useState(3);
  const [composedSize, setComposedSize] = useState(25);

  return (
    <div className='flex w-full max-w-xl flex-col gap-10'>
      <Pagination
        page={page}
        pageSize={pageSize}
        total={348}
        onPageChange={setPage}
        pageSizeOptions={[10, 20, 50]}
        onPageSizeChange={(next) => {
          setPageSize(next);
          setPage(1);
        }}
      />

      <Pagination
        page={jumpPage}
        pageSize={20}
        total={1240}
        onPageChange={setJumpPage}
        showPages
      />

      <Pagination
        page={composedPage}
        pageSize={composedSize}
        total={640}
        onPageChange={setComposedPage}
        pageSizeOptions={[25, 50, 100]}
        onPageSizeChange={(next) => {
          setComposedSize(next);
          setComposedPage(1);
        }}
      >
        <PaginationPageSize label='Rows' className='me-auto' />

        <PaginationRange />

        <PaginationControls>
          <PaginationPrevious />
          <PaginationNext />
        </PaginationControls>
      </Pagination>
    </div>
  );
}
