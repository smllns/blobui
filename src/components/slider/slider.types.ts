import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { sliderStyles } from './slider.styles';

export type SliderValue = number | [number, number];

type NativeSliderProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange' | 'defaultValue' | 'children'
>;

type SliderVariants = Omit<
  VariantProps<typeof sliderStyles>,
  'invalid' | 'disabled' | 'readOnly'
>;

export interface SliderProps extends NativeSliderProps, SliderVariants {
  value?: SliderValue;
  defaultValue?: SliderValue;
  onChange?: (value: SliderValue) => void;
  onChangeEnd?: (value: SliderValue) => void;
  min?: number;
  max?: number;
  step?: number;
  largeStep?: number;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  required?: boolean;
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  thumbLabels?: [string, string];
  forceState?: 'hover' | 'active' | 'focus';
}
