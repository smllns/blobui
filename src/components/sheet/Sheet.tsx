import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, useCallback, useRef } from 'react';

import { cn } from '@/lib/cn';
import { mergeRefs } from '@/lib/mergeRefs';
import { createStrictContext } from '@/lib/createContext';
import { createStyledElement } from '@/lib/createStyledElement';
import { Close } from '@/ui/icons/Close';
import {
  commonOverlayStyles,
  dialogDescriptionStyles,
  dialogTitleStyles,
} from '@/components/shared/styles';
import type { Side } from '@/components/shared/types';
import { useSheetAnimation } from '@/hooks/useSheetAnimation';
import { useSheetDrag } from '@/hooks/useSheetDrag';

import type {
  SheetProps,
  SheetContentProps,
  SheetTitleProps,
  SheetDescriptionProps,
} from './sheet.types';

import {
  sheetContentStyles,
  sheetGrabberStyles,
  sheetHeaderStyles,
  sheetBodyStyles,
  sheetFooterStyles,
  sheetCloseStyles,
} from './sheet.styles';

type SheetContextValue = {
  contentRef: React.RefObject<HTMLDivElement | null>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  setContentRef: (node: HTMLDivElement | null, side: Side) => void;
  setOverlayRef: (node: HTMLDivElement | null) => void;
  isExiting: () => boolean;
  requestOpen: () => void;
};

const [SheetContext, useSheetContext] =
  createStrictContext<SheetContextValue>('Sheet');

const Sheet = ({
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: SheetProps) => {
  const {
    open,
    contentRef,
    overlayRef,
    setContentRef,
    setOverlayRef,
    isExiting,
    requestOpen,
    handleOpenChange,
  } = useSheetAnimation({
    open: openProp,
    defaultOpen,
    onOpenChange,
  });

  return (
    <SheetContext.Provider
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
    </SheetContext.Provider>
  );
};

const SheetTrigger = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ onClick, ...props }, ref) => {
  const { isExiting, requestOpen } = useSheetContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isExiting()) return;

    event.preventDefault();
    requestOpen();
  };

  return <DialogPrimitive.Trigger ref={ref} onClick={handleClick} {...props} />;
});

const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    forceMount
    className={cn(commonOverlayStyles, className)}
    {...props}
  />
));

const SheetClose = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, asChild, children, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    asChild={asChild}
    className={cn(!asChild && sheetCloseStyles, className)}
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

const SheetGrabber = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close asChild>
    <button
      ref={ref}
      type='button'
      aria-label='Close sheet'
      data-sheet-grabber=''
      className={cn(sheetGrabberStyles, className)}
      {...props}
    />
  </DialogPrimitive.Close>
));

const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  (
    {
      className,
      children,
      side = 'right',
      size,
      grabber,
      showCloseButton = true,
      loading,
      ...props
    },
    forwardedRef,
  ) => {
    const { contentRef, setContentRef, setOverlayRef } = useSheetContext();

    const closeRef = useRef<HTMLButtonElement | null>(null);

    const {
      dragging,
      draggable,
      handlers: grabberHandlers,
    } = useSheetDrag({
      side,
      contentRef,
      onClose: () => closeRef.current?.click(),
    });

    const showGrabber = grabber ?? draggable;

    const handleContentRef = useCallback(
      (node: HTMLDivElement | null) => {
        mergeRefs(forwardedRef, (node: HTMLDivElement | null) =>
          setContentRef(node, side),
        )(node);
      },
      [forwardedRef, setContentRef, side],
    );

    return (
      <SheetPortal>
        <SheetOverlay ref={setOverlayRef} />

        <DialogPrimitive.Content
          ref={handleContentRef}
          data-side={side}
          data-loading={loading || undefined}
          data-dragging={dragging || undefined}
          className={cn(sheetContentStyles({ side, size }), className)}
          {...props}
        >
          {showGrabber && <SheetGrabber ref={closeRef} {...grabberHandlers} />}

          {children}

          {showCloseButton && <SheetClose />}
        </DialogPrimitive.Content>
      </SheetPortal>
    );
  },
);

const SheetHeader = createStyledElement('div', sheetHeaderStyles);
const SheetBody = createStyledElement('div', sheetBodyStyles);
const SheetFooter = createStyledElement('div', sheetFooterStyles);

const SheetTitle = forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleStyles, className)}
      {...props}
    />
  ),
);

const SheetDescription = forwardRef<
  HTMLParagraphElement,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('mt-1', dialogDescriptionStyles, className)}
    {...props}
  />
));

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetClose,
  SheetContent,
  SheetGrabber,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
