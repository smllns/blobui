import { Pagination } from '@/components/pagination/Pagination';
import { useState } from 'react';

export function PaginationPreview() {
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(20);
  const [jumpPage, setJumpPage] = useState(6);

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
    </div>
  );
}
