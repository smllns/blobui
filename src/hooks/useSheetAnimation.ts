import { useCallback, useRef, useState } from 'react';

import {
  animateSheetEnter,
  animateSheetExit,
  animateSheetReopen,
} from '@/components/sheet/sheet.animations';
import type { Side } from '@/components/shared/types';
import {
  animateOverlayEnter,
  animateOverlayExit,
  animateOverlayReopen,
} from '@/lib/overlay.animations';

type UseSheetAnimationProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function useSheetAnimation({
  open: openProp,
  defaultOpen,
  onOpenChange,
}: UseSheetAnimationProps) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const sideRef = useRef<Side>('right');
  const exitingRef = useRef(false);

  const controlled = openProp !== undefined;

  const isExiting = () => exitingRef.current;

  const cancelExit = useCallback(() => {
    if (!exitingRef.current) return;

    exitingRef.current = false;

    if (contentRef.current) {
      animateSheetReopen(contentRef.current);
    }

    if (overlayRef.current) {
      animateOverlayReopen(overlayRef.current);
    }
  }, []);

  const requestOpen = useCallback(() => {
    cancelExit();

    if (controlled) return;

    setOpen(true);
  }, [cancelExit, controlled]);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      onOpenChange?.(next);

      if (next) {
        requestOpen();
        return;
      }

      if (controlled) return;

      if (overlayRef.current) {
        animateOverlayExit(overlayRef.current);
      }

      if (!contentRef.current) {
        setOpen(false);
        return;
      }

      exitingRef.current = true;

      animateSheetExit(contentRef.current, sideRef.current, () => {
        if (!exitingRef.current) return;

        exitingRef.current = false;
        setOpen(false);
      });
    },
    [controlled, onOpenChange, requestOpen],
  );

  const setContentRef = useCallback(
    (node: HTMLDivElement | null, side: Side) => {
      contentRef.current = node;
      sideRef.current = side;

      if (node) {
        animateSheetEnter(node, side);
      }
    },
    [],
  );

  const setOverlayRef = useCallback((node: HTMLDivElement | null) => {
    overlayRef.current = node;

    if (node) {
      animateOverlayEnter(node);
    }
  }, []);

  return {
    open: openProp ?? open,
    contentRef,
    overlayRef,
    isExiting,
    requestOpen,
    handleOpenChange,
    setContentRef,
    setOverlayRef,
  };
}
