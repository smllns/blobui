import type { Control } from './ControlsRenderer';

export const selectControl = <T>(
  key: keyof T,
  label: string,
  options: string[],
): Control<T> => ({
  type: 'select',
  key,
  label,
  options,
});

export const checkboxControl = <T>(
  key: keyof T,
  label: string,
): Control<T> => ({
  type: 'checkbox',
  key,
  label,
});
