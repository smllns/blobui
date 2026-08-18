import { Fragment, useCallback, useRef, useState } from 'react';
import { Panel, PanelGroup } from 'react-resizable-panels';
import type { ImperativePanelHandle } from 'react-resizable-panels';
import type { ResizableProps } from './resizable.types';
import { ResizableHandle } from './ResizableHandle';
import {
  resizablePanelStyles,
  resizableStackStyles,
  resizableStyles,
} from './resizable.styles';
import { useSplitAvailable } from './resizable.breakpoint';
import { cn } from '@/lib/cn';

export function Resizable({
  panels,
  orientation = 'horizontal',
  disabled = false,
  handleLabel = 'Resize panels',
  autoSaveId,
  onLayout,
  onCollapse,
  forceState,
  id,
  className,
}: ResizableProps) {
  const splitAvailable = useSplitAvailable();
  const [dragging, setDragging] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const panelHandles = useRef(new Map<string, ImperativePanelHandle | null>());

  const reportCollapsed = useCallback(
    (panelId: string, value: boolean) => {
      setCollapsed((previous) =>
        previous[panelId] === value
          ? previous
          : { ...previous, [panelId]: value },
      );

      onCollapse?.(panelId, value);
    },
    [onCollapse],
  );

  if (!splitAvailable) {
    return (
      <div id={id} className={cn(resizableStackStyles, className)}>
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={cn(resizablePanelStyles, panel.className)}
          >
            {panel.children}
          </div>
        ))}
      </div>
    );
  }

  return (
    <PanelGroup
      id={id}
      direction={orientation}
      autoSaveId={autoSaveId}
      onLayout={onLayout}
      data-orientation={orientation}
      data-dragging={dragging || forceState === 'dragging' || undefined}
      className={cn(resizableStyles({ orientation }), className)}
    >
      {panels.map((panel, index) => {
        const minSize = panel.minSize;
        const maxSize = panel.maxSize;
        const isLast = index === panels.length - 1;

        return (
          <Fragment key={panel.id}>
            <Panel
              id={panel.id}
              order={index}
              ref={(instance) => {
                panelHandles.current.set(panel.id, instance);

                return () => {
                  panelHandles.current.delete(panel.id);
                };
              }}
              defaultSize={panel.defaultSize}
              minSize={minSize}
              maxSize={maxSize}
              collapsible={panel.collapsible}
              collapsedSize={panel.collapsedSize}
              onCollapse={() => reportCollapsed(panel.id, true)}
              onExpand={() => reportCollapsed(panel.id, false)}
              data-collapsed={collapsed[panel.id] || undefined}
              className={cn(resizablePanelStyles, panel.className)}
            >
              {panel.children}
            </Panel>

            {!isLast && (
              <ResizableHandle
                orientation={orientation}
                disabled={disabled}
                label={handleLabel}
                getPanel={() => panelHandles.current.get(panel.id) ?? null}
                onDragging={setDragging}
                forceState={forceState === 'dragging' ? undefined : forceState}
              />
            )}
          </Fragment>
        );
      })}
    </PanelGroup>
  );
}
