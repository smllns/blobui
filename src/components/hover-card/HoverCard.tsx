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
  hoverCardTriggerStyles,
} from './hover-card.styles';
import type {
  HoverCardContentProps,
  HoverCardContextValue,
  HoverCardProps,
  HoverCardTriggerProps,
} from './hover-card.types';
import { createStrictContext } from '@/lib/createContext';
import { Button } from '@/components/button/Button';
import { createStyledElement } from '@/lib/createStyledElement';

const [HoverCardContext, useHoverCardContext] =
  createStrictContext<HoverCardContextValue>('HoverCard');

function HoverCard({
  children,
  openDelay = 300,
  closeDelay = 150,
  onOpenChange,
  open: openProp,
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

  const pinned = openProp !== undefined;
  const isOpen = openProp ?? open;

  return (
    <HoverCardContext.Provider
      value={{
        open: isOpen,
        coarse,
        contentId,
        setContentRef,
        handleOpenChange: handleChange,
      }}
    >
      <HoverCardPrimitive.Root
        open={isOpen}
        onOpenChange={pinned ? undefined : handleChange}
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
        className={cn(hoverCardTriggerStyles, className)}
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
  positioning = 'floating',
  loading = false,
  showCloseButton,
  portal = true,
  style,
  children,
  ...props
}: HoverCardContentProps) {
  const { coarse, contentId, setContentRef, handleOpenChange } =
    useHoverCardContext();

  const isStatic = positioning === 'static';

  const withClose = showCloseButton ?? coarse;

  const contentStyle = {
    ...style,
    '--hover-card-offset': `${sideOffset}px`,
  } as CSSProperties;

  const content = (
    <HoverCardPrimitive.Content
      ref={isStatic ? undefined : setContentRef}
      id={contentId}
      side={isStatic ? undefined : side}
      align={isStatic ? undefined : align}
      sideOffset={isStatic ? 0 : sideOffset}
      avoidCollisions={!isStatic}
      data-positioning={positioning}
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
  );

  return portal ? (
    <HoverCardPrimitive.Portal>{content}</HoverCardPrimitive.Portal>
  ) : (
    content
  );
}

const HoverCardHeader = createStyledElement('div', hoverCardHeaderStyles);
const HoverCardFooter = createStyledElement('div', hoverCardFooterStyles);

const HoverCardTitle = createStyledElement('p', hoverCardTitleStyles);
const HoverCardSubtitle = createStyledElement('p', hoverCardSubtitleStyles);
const HoverCardBody = createStyledElement('p', hoverCardBodyStyles);

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
