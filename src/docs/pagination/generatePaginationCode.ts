import {
  PAGINATION_PAGE_SIZE,
  PAGINATION_PAGE_SIZE_OPTIONS,
  PAGINATION_TOTAL,
  type PaginationPlaygroundState,
} from './paginationConstants';

export function generatePaginationCode(state: PaginationPlaygroundState) {
  const props = [
    'page={page}',
    state.pageSizeSelect
      ? 'pageSize={pageSize}'
      : `pageSize={${PAGINATION_PAGE_SIZE}}`,
    `total={${PAGINATION_TOTAL}}`,
    'onPageChange={setPage}',
    state.size !== 'sm' && `size="${state.size}"`,
    !state.showRange && 'showRange={false}',
    state.showPages && 'showPages',
    state.showPages &&
      state.siblings !== '1' &&
      `siblingCount={${state.siblings}}`,
    state.pageSizeSelect &&
      `pageSizeOptions={[${PAGINATION_PAGE_SIZE_OPTIONS.join(', ')}]}`,
    state.pageSizeSelect &&
      `onPageSizeChange={(next) => {
    setPageSize(next);
    setPage(1);
  }}`,
  ].filter(Boolean);

  const hooks = state.pageSizeSelect
    ? `const [page, setPage] = useState(1);\nconst [pageSize, setPageSize] = useState(${PAGINATION_PAGE_SIZE});`
    : 'const [page, setPage] = useState(1);';

  return `
${hooks}

<Pagination
  ${props.join('\n  ')}
/>
`.trim();
}
