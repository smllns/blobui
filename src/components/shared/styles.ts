export const disabledStyles = {
  base: 'opacity-50 cursor-not-allowed',
  html: 'disabled:cursor-not-allowed',
  data: 'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
} as const;

export const motion = {
  instant: 'duration-[var(--duration-instant)] ease-out',
  fast: 'duration-[var(--duration-fast)] ease-out',
  base: 'duration-[var(--duration-base)] ease-out',
  spring: 'duration-[var(--duration-base)] ease-spring',
} as const;

export const transitionControl =
  'transition-[background-color,border-color,color,box-shadow,transform]';

export const labelSizeMap = {
  xs: 'text-caption',
  sm: 'text-body-sm',
  md: 'text-body-md',
  lg: 'text-body-lg',
  xl: 'text-body-lg',
} as const;

export const labelStyles = 'text-body-md font-medium text-fg';

export const helperStyles = 'text-body-sm text-fg-tertiary';

export const helperErrorStyles = 'text-body-sm text-danger-fg';

export const requiredStyles = 'ms-0.5 text-danger-fg';

export const dialogPositionerStyles = [
  'fixed inset-0 z-50 grid place-items-center',
  'pointer-events-none',
].join(' ');

export const dialogTitleStyles = 'm-0 text-heading-md font-semibold text-fg';

export const dialogDescriptionStyles =
  'm-0 mt-1 text-body-sm leading-[var(--leading-body-lg)] text-fg-tertiary';

export const commonOverlayStyles =
  'fixed inset-0 z-50 bg-scrim backdrop-blur-[2px]';
