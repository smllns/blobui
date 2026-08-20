import { childrenProp, classNameProp, forceStateProp } from './commonProps';
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

  {
    ...childrenProp,
    description:
      'Replaces the default layout with your own arrangement of the subcomponents. They read the same state, so nothing has to be threaded through by hand',
  },

  prop('label', 'string', 'Pagination', 'Accessible name of the nav landmark'),

  prop('size', "'sm' | 'md'", 'sm', 'Size of every control in the row'),

  prop('showRange', 'boolean', 'true', 'Shows the range readout'),

  prop(
    'rangePlacement',
    "'start' | 'end' | 'none'",
    'start',
    'Where the readout sits in the default layout: before the controls, after them, or nowhere',
  ),

  prop(
    'formatRange',
    '(range: PaginationRangeInfo) => ReactNode',
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

  prop(
    'previousLabel',
    'ReactNode',
    'Previous',
    'Label of the previous button',
  ),

  prop('nextLabel', 'ReactNode', 'Next', 'Label of the next button'),

  prop(
    'pageSizeOptions',
    'number[]',
    '-',
    'Adds the rows-per-page control. Without options the control never renders',
  ),

  prop(
    'pageSizePlacement',
    "'start' | 'end' | 'none'",
    'start',
    'Where the rows-per-page control sits in the default layout. It defaults beside the readout, since it is the thing that defines it',
  ),

  prop(
    'onPageSizeChange',
    '(pageSize: number) => void',
    '-',
    'Called with the page size asked for',
  ),

  prop(
    'pageSizeLabel',
    'ReactNode',
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

export const paginationSubcomponentProps = [
  prop(
    'PaginationGroup',
    'HTMLAttributes<HTMLDivElement>',
    '-',
    'A plain row for the parts that are not buttons — the readout, the rows-per-page control, anything of your own. It wraps and keeps its children centred with each other',
  ),

  prop(
    'PaginationControls',
    'HTMLAttributes<HTMLDivElement>',
    '-',
    'The button row. Neutral, so the order inside it is yours',
  ),

  prop(
    'PaginationRange',
    'PaginationRangeProps',
    '-',
    'The readout, as a <p>. formatRange overrides the root format for this one instance; children replace the text outright',
  ),

  prop(
    'PaginationPageSize',
    'PaginationPageSizeProps',
    '-',
    'The rows-per-page select and its label. options, label and onPageSizeChange fall back to the root pageSizeOptions, pageSizeLabel and onPageSizeChange. With no options it renders nothing',
  ),

  prop(
    'PaginationPrevious',
    "Omit<ButtonProps, 'children'>",
    '-',
    'The previous button. Disabled on the first page and labelled from previousLabel unless children say otherwise. Every Button prop passes through',
  ),

  prop(
    'PaginationNext',
    "Omit<ButtonProps, 'children'>",
    '-',
    'The next button. Disabled on the last page and labelled from nextLabel unless children say otherwise',
  ),

  prop(
    'PaginationPages',
    'PaginationPagesProps',
    '-',
    'The number strip, with aria-current on the page you are on. siblingCount, boundaryCount and pageLabel override the root values',
  ),

  {
    ...classNameProp,
    description:
      'Every subcomponent takes className and the DOM props of the element it renders, so any of them can be restyled and placed anywhere',
  },
];

export const paginationContextProps = [
  prop('page', 'number', '-', 'Current page, clamped into range'),

  prop('pageCount', 'number', '-', 'Pages the set breaks into'),

  prop('from', 'number', '-', 'First row shown on the current page'),

  prop('to', 'number', '-', 'Last row shown on the current page'),

  prop('total', 'number', '-', 'Rows in the whole set'),

  prop('pageSize', 'number', '-', 'Rows on a page'),

  prop('size', "'sm' | 'md'", 'sm', 'Size every part takes itself from'),

  prop(
    'goTo',
    '(page: number) => void',
    '-',
    'Moves to a page, ignoring anything out of range or already current',
  ),

  prop(
    'setPageSize',
    '(pageSize: number) => void',
    '-',
    'Hands a new page size to the root onPageSizeChange',
  ),

  forceStateProp,

  prop(
    'formatRange, pageLabel, previousLabel, nextLabel, pageSizeLabel, pageSizeOptions, siblingCount, boundaryCount',
    'root defaults',
    '-',
    'What the root was given, so a part can fall back to it instead of taking the same prop twice',
  ),
];
