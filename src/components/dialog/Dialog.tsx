import * as DialogPrimitive from '@radix-ui/react-dialog';
import { createContext, forwardRef, useContext, useRef, useState } from 'react';

import { cn } from '../../lib/cn';

import type {
  DialogContentProps,
  DialogOverlayProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from './dialog.types';

import {
  dialogOverlayStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogFooterStyles,
  dialogTitleStyles,
  dialogDescriptionStyles,
  dialogCloseStyles,
} from './dialog.styles';

import {
  animateDialogEnter,
  animateDialogExit,
  animateOverlayEnter,
  animateOverlayExit,
} from './dialog.animations';

import CloseX from '../../ui/CloseX';

type DialogContextValue = {
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
  overlayRef: React.MutableRefObject<HTMLDivElement | null>;
};

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('Dialog components must be used inside Dialog');
  }

  return context;
}

const Dialog = ({ children, ...props }: DialogPrimitive.DialogProps) => {
  const [open, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
      return;
    }

    const content = contentRef.current;
    const overlay = overlayRef.current;

    if (!content) {
      setOpen(false);
      return;
    }

    animateDialogExit(content, () => {
      setOpen(false);
    });

    if (overlay) {
      animateOverlayExit(overlay, () => {});
    }
  };

  return (
    <DialogContext.Provider
      value={{
        contentRef,
        overlayRef,
      }}
    >
      <DialogPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
};

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(dialogCloseStyles(), className)}
    {...props}
  >
    <CloseX />

    <span className='sr-only'>Close</span>
  </DialogPrimitive.Close>
));

DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, overlay, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      forceMount
      className={cn(
        dialogOverlayStyles({
          overlay,
        }),
        className,
      )}
      {...props}
    />
  ),
);

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      className,
      children,
      size,
      padding,
      overlay,
      variant,
      showCloseButton = true,
      ...props
    },
    forwardedRef,
  ) => {
    const { contentRef, overlayRef } = useDialogContext();

    const setContentRef = (node: HTMLDivElement | null) => {
      contentRef.current = node;

      if (node) {
        animateDialogEnter(node);
      }

      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    const setOverlayRef = (node: HTMLDivElement | null) => {
      overlayRef.current = node;

      if (node) {
        animateOverlayEnter(node);
      }
    };

    return (
      <DialogPortal>
        <DialogOverlay ref={setOverlayRef} overlay={overlay} />

        <DialogPrimitive.Content
          className={cn(
            dialogContentStyles({
              size,
              padding,
              variant,
            }),
            className,
          )}
          {...props}
        >
          <div ref={setContentRef}>{children}</div>

          {showCloseButton && <DialogClose />}
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  },
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn(dialogHeaderStyles(), className)} {...props} />;
}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn(dialogFooterStyles(), className)} {...props} />;
}

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleStyles(), className)}
      {...props}
    />
  ),
);

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionStyles(), className)}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
