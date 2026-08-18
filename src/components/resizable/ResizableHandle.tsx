import { PanelResizeHandle } from 'react-resizable-panels';
import type { ResizableHandleProps } from './resizable.types';
import {
  RESIZABLE_OVERLAP_PX,
  resizableHandleStyles,
} from './resizable.styles';
import { cn } from '@/lib/cn';

export function ResizableHandle({
  orientation,
  disabled,
  label,
  onDragging,
  forceState,
  className,
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      disabled={disabled}
      onDragging={onDragging}
      hitAreaMargins={{
        coarse: RESIZABLE_OVERLAP_PX,
        fine: RESIZABLE_OVERLAP_PX,
      }}
      aria-label={label}
      aria-orientation={
        orientation === 'horizontal' ? 'vertical' : 'horizontal'
      }
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      data-force={forceState}
      className={cn(
        resizableHandleStyles({ orientation, disabled }),
        className,
      )}
    />
  );
}
