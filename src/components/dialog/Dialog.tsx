import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/cn';
import CloseX from '../../ui/CloseX';

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
import { mergeRefs } from '@/lib/mergeRefs';

type DialogContextValue = {
  contentRef: React.RefObject<HTMLDivElement | null>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
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
    className={cn(dialogCloseStyles, className)}
    {...props}
  >
    <CloseX />

    <span className='sr-only'>Close</span>
  </DialogPrimitive.Close>
));

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

    const setContentRef = useCallback(
      (node: HTMLDivElement | null) => {
        mergeRefs(contentRef, forwardedRef)(node);

        if (node) {
          animateDialogEnter(node);
        }
      },
      [contentRef, forwardedRef],
    );

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

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn(dialogHeaderStyles, className)} {...props} />;
}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn(dialogFooterStyles, className)} {...props} />;
}

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleStyles, className)}
      {...props}
    />
  ),
);

const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionStyles, className)}
    {...props}
  />
));

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
