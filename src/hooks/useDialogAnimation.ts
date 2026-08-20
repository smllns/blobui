import { useRef, useState } from 'react';

import {
  animateDialogEnter,
  animateDialogExit,
  animateDialogReopen,
} from '@/components/dialog/dialog.animations';
import {
  animateOverlayEnter,
  animateOverlayExit,
  animateOverlayReopen,
} from '@/lib/overlay.animations';

export function useDialogAnimation({
  open: openProp,
  defaultOpen,
  onOpenChange,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const exitingRef = useRef(false);

  const controlled = openProp !== undefined;

  const isExiting = () => exitingRef.current;

  const cancelExit = () => {
    if (!exitingRef.current) return;

    exitingRef.current = false;

    if (contentRef.current) {
      animateDialogReopen(contentRef.current);
    }

    if (overlayRef.current) {
      animateOverlayReopen(overlayRef.current);
    }
  };

  const requestOpen = () => {
    cancelExit();

    if (controlled) return;

    setOpen(true);
  };

  const handleOpenChange = (next: boolean) => {
    onOpenChange?.(next);

    if (next) {
      requestOpen();
      return;
    }

    if (controlled) return;

    const content = contentRef.current;
    const overlay = overlayRef.current;

    if (overlay) {
      animateOverlayExit(overlay);
    }

    if (!content) {
      setOpen(false);
      return;
    }

    exitingRef.current = true;

    animateDialogExit(content, () => {
      if (!exitingRef.current) return;

      exitingRef.current = false;
      setOpen(false);
    });
  };

  const setContentRef = (node: HTMLDivElement | null) => {
    contentRef.current = node;

    if (node) {
      animateDialogEnter(node);
    }
  };

  const setOverlayRef = (node: HTMLDivElement | null) => {
    overlayRef.current = node;

    if (node) {
      animateOverlayEnter(node);
    }
  };

  return {
    open: controlled ? openProp : open,
    contentRef,
    overlayRef,
    setContentRef,
    setOverlayRef,
    isExiting,
    requestOpen,
    handleOpenChange,
  };
}
