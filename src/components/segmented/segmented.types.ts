import type { ReactNode } from 'react';
import type { BasicSize } from '@/components/shared/types';

export type SegmentedType = 'single' | 'multiple';

export interface SegmentedItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  forceState?: 'hover' | 'active' | 'focus';
}

export interface SegmentedBaseProps {
  items: SegmentedItem[];
  size?: BasicSize;
  block?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  id?: string;
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

type SegmentedSelection =
  | {
      type?: 'single';
      value?: string;
      defaultValue?: string;
      onValueChange?: (value: string) => void;
    }
  | {
      type: 'multiple';
      value?: string[];
      defaultValue?: string[];
      onValueChange?: (value: string[]) => void;
    };

export type SegmentedProps = SegmentedBaseProps & SegmentedSelection;
