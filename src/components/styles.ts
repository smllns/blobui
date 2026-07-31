export const disabledStyles = {
  base: 'opacity-50 cursor-not-allowed',
  html: 'disabled:opacity-50 disabled:cursor-not-allowed',
  data: 'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
} as const;
export const labelSizeMap = {
  sm: 'text-xs leading-4',
  md: 'text-sm leading-5',
  lg: 'text-base leading-6',
} as const;
