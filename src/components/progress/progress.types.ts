import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { progressStyles } from './progress.styles';

export type ProgressState = 'loading' | 'complete' | 'indeterminate';

type NativeProgressProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export interface ProgressProps
  extends NativeProgressProps, VariantProps<typeof progressStyles> {
  value?: number | null;
  max?: number;
  indeterminate?: boolean;
  getValueLabel?: (value: number, max: number) => string;
}
