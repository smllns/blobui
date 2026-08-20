import { useRef, useState } from 'react';

import {
  setSheetDrag,
  releaseSheetDrag,
} from '@/components/sheet/sheet.animations';
import type { Side } from '@/components/shared/types';

const DISMISS_FRACTION = 0.25;
const RESISTANCE = 0.25;
const DRAG_SLOP = 4;

type UseSheetDragOptions = {
  side: Side;
  contentRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

export function useSheetDrag({
  side,
  contentRef,
  onClose,
}: UseSheetDragOptions) {
  const [dragging, setDragging] = useState(false);

  const dragRef = useRef({
    start: 0,
    distance: 0,
    moved: false,
    closing: false,
  });

  const draggable = side === 'top' || side === 'bottom';

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!draggable || !contentRef.current) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    dragRef.current = {
      start: event.clientY,
      distance: 0,
      moved: false,
      closing: false,
    };

    setDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const node = contentRef.current;

    if (!dragging || !node) return;

    const delta = event.clientY - dragRef.current.start;

    const towardsExit = side === 'bottom' ? delta > 0 : delta < 0;

    const distance = towardsExit ? delta : delta * RESISTANCE;

    dragRef.current.distance = distance;
    dragRef.current.moved ||= Math.abs(delta) > DRAG_SLOP;

    setSheetDrag(node, side, distance);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    const node = contentRef.current;

    if (!dragging || !node) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);

    const { distance } = dragRef.current;
    const travelled = Math.abs(distance);

    const towardsExit = side === 'bottom' ? distance > 0 : distance < 0;

    const threshold = node.offsetHeight * DISMISS_FRACTION;

    if (towardsExit && travelled > threshold) {
      dragRef.current.closing = true;
      onClose();
      return;
    }

    releaseSheetDrag(node);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (dragRef.current.closing) {
      dragRef.current.closing = false;
      return;
    }

    if (!dragRef.current.moved) return;

    event.preventDefault();
    event.stopPropagation();

    dragRef.current.moved = false;
  };

  return {
    dragging,
    draggable,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      onClick: handleClick,
    },
  };
}
