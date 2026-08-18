import type { ReactNode } from 'react';
import type { ImperativePanelHandle } from 'react-resizable-panels';

export type ResizableOrientation = 'horizontal' | 'vertical';

export type ResizableForceState = 'hover' | 'focus' | 'dragging';

export interface ResizablePanelItem {
  id: string;
  children: ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
  className?: string;
}

export interface ResizableProps {
  panels: ResizablePanelItem[];
  orientation?: ResizableOrientation;
  disabled?: boolean;
  handleLabel?: string;
  autoSaveId?: string;
  onLayout?: (sizes: number[]) => void;
  onCollapse?: (panelId: string, collapsed: boolean) => void;
  forceState?: ResizableForceState;
  id?: string;
  className?: string;
}

export interface ResizableHandleProps {
  orientation: ResizableOrientation;
  disabled: boolean;
  label: string;
  getPanel: () => ImperativePanelHandle | null;
  onDragging: (dragging: boolean) => void;
  forceState?: 'hover' | 'focus';
  className?: string;
}
