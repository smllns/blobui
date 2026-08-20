import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';
import { Close } from '@/ui/icons/Close';
import { mergeRefs } from '@/lib/mergeRefs';
import { createStrictContext } from '@/lib/createContext';
import { useDialogAnimation } from '@/hooks/useDialogAnimation';
import type { DialogContextValue } from '@/components/shared/types';

import type {
  DialogContentProps,
  DialogOverlayProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from './dialog.types';

import {
  dialogOverlayStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogBodyStyles,
  dialogFooterStyles,
  dialogCloseStyles,
} from './dialog.styles';
import { createStyledElement } from '@/lib/createStyledElement';
import {
  dialogDescriptionStyles,
  dialogPositionerStyles,
  dialogTitleStyles,
} from '@/components/shared/styles';

const [DialogContext, useDialogContext] =
  createStrictContext<DialogContextValue>('Dialog');

const Dialog = ({
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: DialogPrimitive.DialogProps) => {
  const {
    open,
    contentRef,
    overlayRef,
    setContentRef,
    setOverlayRef,
    isExiting,
    requestOpen,
    handleOpenChange,
  } = useDialogAnimation({
    open: openProp,
    defaultOpen,
    onOpenChange,
  });

  return (
    <DialogContext.Provider
      value={{
        contentRef,
        overlayRef,
        setContentRef,
        setOverlayRef,
        isExiting,
        requestOpen,
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

const DialogTrigger = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ onClick, ...props }, ref) => {
  const { isExiting, requestOpen } = useDialogContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isExiting()) return;

    event.preventDefault();
    requestOpen();
  };

  return <DialogPrimitive.Trigger ref={ref} onClick={handleClick} {...props} />;
});
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, asChild, children, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    asChild={asChild}
    className={cn(!asChild && dialogCloseStyles, className)}
    {...props}
  >
    {asChild ? (
      children
    ) : (
      <>
        <Close />
        <span className='sr-only'>Close</span>
      </>
    )}
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
    const { setContentRef, setOverlayRef } = useDialogContext();

    return (
      <DialogPortal>
        <DialogOverlay ref={setOverlayRef} overlay={overlay} />

        <div className={dialogPositionerStyles}>
          <DialogPrimitive.Content
            ref={mergeRefs(setContentRef, forwardedRef)}
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
            {children}

            {showCloseButton && <DialogClose />}
          </DialogPrimitive.Content>
        </div>
      </DialogPortal>
    );
  },
);

const DialogHeader = createStyledElement('div', dialogHeaderStyles);
const DialogBody = createStyledElement('div', dialogBodyStyles);

function DialogFooter({ className, surface, ...props }: DialogFooterProps) {
  return (
    <div
      className={cn(dialogFooterStyles({ surface }), className)}
      {...props}
    />
  );
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
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
