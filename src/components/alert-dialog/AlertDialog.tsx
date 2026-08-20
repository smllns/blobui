import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';
import { mergeRefs } from '@/lib/mergeRefs';
import { createStrictContext } from '@/lib/createContext';
import { Button } from '@/components/button/Button';
import { Trash } from '@/ui/icons/Trash';
import { AlertTriangle } from '@/ui/icons/AlertTriangle';
import { Key } from '@/ui/icons/Key';
import { useDialogAnimation } from '@/hooks/useDialogAnimation';
import type { DialogContextValue } from '@/components/shared/types';

import type {
  AlertDialogProps,
  AlertDialogContentProps,
  AlertDialogIconProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCancelProps,
  AlertDialogActionProps,
  AlertDialogTone,
} from './alert-dialog.types';

import {
  alertDialogContentStyles,
  alertDialogHeaderStyles,
  alertDialogIconStyles,
  alertDialogFooterStyles,
} from './alert-dialog.styles';
import { createStyledElement } from '@/lib/createStyledElement';
import {
  commonOverlayStyles,
  dialogDescriptionStyles,
  dialogPositionerStyles,
  dialogTitleStyles,
} from '@/components/shared/styles';

const [AlertDialogRootContext, useAlertDialogRootContext] =
  createStrictContext<DialogContextValue>('AlertDialog');

type AlertDialogToneContextValue = { tone: AlertDialogTone };

const [AlertDialogToneContext, useAlertDialogToneContext] =
  createStrictContext<AlertDialogToneContextValue>('AlertDialogContent');

const AlertDialog = ({
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: AlertDialogProps) => {
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
    <AlertDialogRootContext.Provider
      value={{
        contentRef,
        overlayRef,
        setContentRef,
        setOverlayRef,
        isExiting,
        requestOpen,
      }}
    >
      <AlertDialogPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogRootContext.Provider>
  );
};

const AlertDialogTrigger = forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>
>(({ onClick, ...props }, ref) => {
  const { isExiting, requestOpen } = useAlertDialogRootContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isExiting()) return;

    event.preventDefault();
    requestOpen();
  };

  return (
    <AlertDialogPrimitive.Trigger ref={ref} onClick={handleClick} {...props} />
  );
});

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    forceMount
    className={cn(commonOverlayStyles, className)}
    {...props}
  />
));

const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  (
    { className, children, tone = 'danger', loading, ...props },
    forwardedRef,
  ) => {
    const { setContentRef, setOverlayRef } = useAlertDialogRootContext();

    return (
      <AlertDialogToneContext.Provider value={{ tone }}>
        <AlertDialogPortal>
          <AlertDialogOverlay ref={setOverlayRef} />

          <div className={dialogPositionerStyles}>
            <AlertDialogPrimitive.Content
              ref={mergeRefs(setContentRef, forwardedRef)}
              data-tone={tone}
              data-loading={loading || undefined}
              className={cn(alertDialogContentStyles, className)}
              {...props}
            >
              {children}
            </AlertDialogPrimitive.Content>
          </div>
        </AlertDialogPortal>
      </AlertDialogToneContext.Provider>
    );
  },
);

const AlertDialogHeader = createStyledElement('div', alertDialogHeaderStyles);

const toneGlyphs: Record<AlertDialogTone, React.ReactNode> = {
  danger: <Trash />,
  warning: <AlertTriangle />,
  info: <Key />,
};

function AlertDialogIcon({
  className,
  tone: toneProp,
  children,
  ...props
}: AlertDialogIconProps) {
  const { tone } = useAlertDialogToneContext();
  const resolved = toneProp ?? tone;

  return (
    <div
      aria-hidden='true'
      className={cn(alertDialogIconStyles({ tone: resolved }), className)}
      {...props}
    >
      {children ?? toneGlyphs[resolved]}
    </div>
  );
}

const AlertDialogFooter = createStyledElement('div', alertDialogFooterStyles);

const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn(dialogTitleStyles, className)}
      {...props}
    />
  ),
);

const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionStyles, className)}
    {...props}
  />
));

const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ variant = 'secondary', ...props }, ref) => (
    <AlertDialogPrimitive.Cancel asChild>
      <Button ref={ref} variant={variant} {...props} />
    </AlertDialogPrimitive.Cancel>
  ),
);

const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ variant, ...props }, ref) => {
    const { tone } = useAlertDialogToneContext();
    const resolved = variant ?? (tone === 'info' ? 'primary' : 'destructive');

    return (
      <AlertDialogPrimitive.Action asChild>
        <Button ref={ref} variant={resolved} {...props} />
      </AlertDialogPrimitive.Action>
    );
  },
);

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
};
