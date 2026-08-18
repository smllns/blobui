import { classNameProp, forceStateProp } from './commonProps';
import { prop } from './helpers';

export const paginationProps = [
  prop('page', 'number', '-', 'Current page, counted from 1'),

  prop('pageSize', 'number', '-', 'Rows on a page. The range is read off this'),

  prop(
    'total',
    'number',
    '-',
    'Rows in the whole set. At 0 the component renders nothing — an empty state replaces the table instead',
  ),

  prop(
    'onPageChange',
    '(page: number) => void',
    '-',
    'Called with the page asked for',
  ),

  prop('label', 'string', 'Pagination', 'Accessible name of the nav landmark'),

  prop('size', "'sm' | 'md'", 'sm', 'Size of every control in the row'),

  prop('showRange', 'boolean', 'true', 'Shows the range readout'),

  prop(
    'formatRange',
    '(range: PaginationRange) => ReactNode',
    '21–40 of 348',
    'Renders the readout. Receives from, to, total, page and pageCount',
  ),

  prop(
    'showPages',
    'boolean',
    'false',
    'Adds the number strip, for lists long enough that jumping matters. It is the first thing to go on a narrow screen',
  ),

  prop(
    'siblingCount',
    'number',
    '1',
    'Numbers kept on each side of the current page',
  ),

  prop('boundaryCount', 'number', '1', 'Numbers kept at each end of the strip'),

  prop(
    'pageLabel',
    '(page: number) => string',
    'Page {n}',
    'Accessible name of a number in the strip',
  ),

  prop('previousLabel', 'string', 'Previous', 'Label of the previous button'),

  prop('nextLabel', 'string', 'Next', 'Label of the next button'),

  prop(
    'pageSizeOptions',
    'number[]',
    '-',
    'Adds the rows-per-page control beside the readout, since it is the thing that defines it',
  ),

  prop(
    'onPageSizeChange',
    '(pageSize: number) => void',
    '-',
    'Called with the page size asked for',
  ),

  prop(
    'pageSizeLabel',
    'string',
    'Rows per page',
    'Label of the rows-per-page control',
  ),
  forceStateProp,
  prop(
    'forceTarget',
    "number | 'previous' | 'next'",
    'current page',
    'Which member forceState paints. Defaults to the current page',
  ),

  classNameProp,
];
