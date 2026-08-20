import {
  PAGINATION_PAGE_SIZE,
  PAGINATION_PAGE_SIZE_OPTIONS,
  PAGINATION_TOTAL,
  type PaginationPlaygroundState,
} from './paginationConstants';

export function generatePaginationCode(state: PaginationPlaygroundState) {
  const withPageSize = state.pageSizePlacement !== 'none';

  const props = [
    'page={page}',
    withPageSize ? 'pageSize={pageSize}' : `pageSize={${PAGINATION_PAGE_SIZE}}`,
    `total={${PAGINATION_TOTAL}}`,
    'onPageChange={setPage}',
    state.size !== 'sm' && `size="${state.size}"`,
    state.rangePlacement !== 'start' &&
      `rangePlacement="${state.rangePlacement}"`,
    state.showPages && 'showPages',
    state.showPages &&
      state.siblings !== '1' &&
      `siblingCount={${state.siblings}}`,
    withPageSize &&
      `pageSizeOptions={[${PAGINATION_PAGE_SIZE_OPTIONS.join(', ')}]}`,
    withPageSize &&
      state.pageSizePlacement !== 'start' &&
      `pageSizePlacement="${state.pageSizePlacement}"`,
    withPageSize &&
      `onPageSizeChange={(next) => {
    setPageSize(next);
    setPage(1);
  }}`,
  ].filter(Boolean);

  const hooks = withPageSize
    ? `const [page, setPage] = useState(1);\nconst [pageSize, setPageSize] = useState(${PAGINATION_PAGE_SIZE});`
    : 'const [page, setPage] = useState(1);';

  return `
${hooks}

<Pagination
  ${props.join('\n  ')}
/>
`.trim();
}
