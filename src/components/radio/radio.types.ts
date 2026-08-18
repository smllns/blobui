import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { ChoiceSize } from '@/components/shared/types';

type NativeRadioProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'>;

export interface RadioProps extends NativeRadioProps {
  label?: ReactNode;
  description?: ReactNode;
  size?: ChoiceSize;
  error?: boolean;
  errorMessage?: ReactNode;
  forceState?: 'hover' | 'active' | 'focus';
}
