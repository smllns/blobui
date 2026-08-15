import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import type { CSSProperties, MouseEvent, PointerEvent } from 'react';
import { useId } from 'react';
import { cn } from '@/lib/cn';
import { Close } from '@/ui/icons/Close';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  animateHoverCardEnter,
  animateHoverCardExit,
} from './hover-card.animation';
import { useCoarsePointer } from './hover-card.pointer';
import {
  hoverCardBodyStyles,
  hoverCardCloseStyles,
  hoverCardContent,
  hoverCardFooterStyles,
  hoverCardHeaderStyles,
  hoverCardSkeletonAvatarStyles,
  hoverCardSkeletonBarStyles,
  hoverCardSkeletonStyles,
  hoverCardSubtitleStyles,
  hoverCardTitleStyles,
} from './hover-card.styles';
import type {
  HoverCardBodyProps,
  HoverCardContentProps,
  HoverCardContextValue,
  HoverCardFooterProps,
  HoverCardHeaderProps,
  HoverCardProps,
  HoverCardSubtitleProps,
  HoverCardTitleProps,
  HoverCardTriggerProps,
} from './hover-card.types';
import { createStrictContext } from '@/lib/createContext';
import { Button } from '../button/Button';

const [HoverCardContext, useHoverCardContext] =
  createStrictContext<HoverCardContextValue>('HoverCard');

function HoverCard({
  children,
  openDelay = 300,
  closeDelay = 150,
  onOpenChange,
  ...props
}: HoverCardProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateHoverCardEnter,
      animateExit: animateHoverCardExit,
    });

  const coarse = useCoarsePointer();

  const reactId = useId();
  const contentId = `hover-card-${reactId}`;

  const handleChange = (next: boolean) => {
    handleOpenChange(next);
    onOpenChange?.(next);
  };

  return (
    <HoverCardContext.Provider
      value={{
        open,
        coarse,
        contentId,
        setContentRef,
        handleOpenChange: handleChange,
      }}
    >
      <HoverCardPrimitive.Root
        open={open}
        onOpenChange={handleChange}
        openDelay={openDelay}
        closeDelay={closeDelay}
        {...props}
      >
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardContext.Provider>
  );
}

function HoverCardTrigger({
  variant = 'underline',
  className,
  children,
  onPointerUp,
  onClick,
  ...props
}: HoverCardTriggerProps) {
  const { open, coarse, contentId, handleOpenChange } = useHoverCardContext();

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    onPointerUp?.(event);

    if (!coarse || event.pointerType !== 'touch') return;

    handleOpenChange(!open);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!coarse || event.detail > 0) return;

    handleOpenChange(!open);
  };

  const describedBy = coarse ? undefined : contentId;
  const expanded = coarse ? open : undefined;
  const controls = coarse ? contentId : undefined;

  return (
    <HoverCardPrimitive.Trigger asChild>
      <Button
        variant={variant}
        className={className}
        aria-describedby={describedBy}
        aria-expanded={expanded}
        aria-controls={controls}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    </HoverCardPrimitive.Trigger>
  );
}

function HoverCardContent({
  className,
  variant,
  rounded,
  side = 'bottom',
  align = 'start',
  sideOffset = 6,
  loading = false,
  showCloseButton,
  style,
  children,
  ...props
}: HoverCardContentProps) {
  const { coarse, contentId, setContentRef, handleOpenChange } =
    useHoverCardContext();

  const withClose = showCloseButton ?? coarse;

  const contentStyle = {
    ...style,
    '--hover-card-offset': `${sideOffset}px`,
  } as CSSProperties;

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={setContentRef}
        id={contentId}
        side={side}
        align={align}
        sideOffset={sideOffset}
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
        style={contentStyle}
        className={cn(hoverCardContent({ variant, rounded }), className)}
        {...props}
      >
        {loading ? <HoverCardSkeleton /> : children}

        {withClose && (
          <Button
            variant='ghost'
            size='sm'
            iconOnly
            aria-label='Close'
            className={hoverCardCloseStyles}
            onClick={() => handleOpenChange(false)}
          >
            <Close size='sm' />
          </Button>
        )}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
}

function HoverCardHeader({ className, ...props }: HoverCardHeaderProps) {
  return <div className={cn(hoverCardHeaderStyles, className)} {...props} />;
}

function HoverCardTitle({ className, ...props }: HoverCardTitleProps) {
  return <p className={cn(hoverCardTitleStyles, className)} {...props} />;
}

function HoverCardSubtitle({ className, ...props }: HoverCardSubtitleProps) {
  return <p className={cn(hoverCardSubtitleStyles, className)} {...props} />;
}

function HoverCardBody({ className, ...props }: HoverCardBodyProps) {
  return <p className={cn(hoverCardBodyStyles, className)} {...props} />;
}

function HoverCardFooter({ className, ...props }: HoverCardFooterProps) {
  return <div className={cn(hoverCardFooterStyles, className)} {...props} />;
}

function HoverCardSkeleton() {
  return (
    <div aria-hidden='true' className={hoverCardSkeletonStyles}>
      <div className={hoverCardHeaderStyles}>
        <span className={hoverCardSkeletonAvatarStyles} />

        <span className='flex min-w-0 flex-1 flex-col gap-2 pt-1'>
          <span className={cn(hoverCardSkeletonBarStyles, 'w-28')} />
          <span className={cn(hoverCardSkeletonBarStyles, 'w-20')} />
        </span>
      </div>

      <span className='flex flex-col gap-2'>
        <span className={cn(hoverCardSkeletonBarStyles, 'w-full')} />
        <span className={cn(hoverCardSkeletonBarStyles, 'w-4/5')} />
      </span>
    </div>
  );
}

export {
  HoverCard,
  HoverCardBody,
  HoverCardContent,
  HoverCardFooter,
  HoverCardHeader,
  HoverCardSkeleton,
  HoverCardSubtitle,
  HoverCardTitle,
  HoverCardTrigger,
};
