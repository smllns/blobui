import { useId, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/button/Button';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import {
  animateCollapsibleClose,
  animateCollapsibleOpen,
  setCollapsibleClosed,
  setCollapsibleOpen,
} from './collapsible.animation';
import {
  collapsibleContentStyles,
  collapsibleIconStyles,
  collapsiblePanelInnerStyles,
  collapsiblePanelStyles,
  collapsibleStyles,
  collapsibleTriggerStyles,
} from './collapsible.styles';
import type {
  CollapsibleHeadingLevel,
  CollapsibleProps,
} from './collapsible.types';

const headingTags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

function withHeading(
  level: CollapsibleHeadingLevel | undefined,
  alignClass: string,
  render: (className: string) => React.ReactNode,
) {
  if (!level) return render(alignClass);

  const Heading = headingTags[level];

  return <Heading className={cn('flex', alignClass)}>{render('')}</Heading>;
}

export function Collapsible({
  trigger,
  triggerOpen,
  children,
  open,
  defaultOpen,
  onOpenChange,
  align = 'start',
  headingLevel,
  peek,
  variant = 'ghost',
  size,
  disabled,
  loading,
  forceState,
  className,
  ...props
}: CollapsibleProps) {
  const [internal, setInternal] = useState(defaultOpen ?? false);
  const isOpen = open ?? internal;

  const panelId = useId();
  const state = isOpen ? 'open' : 'closed';

  const panelRef = useRef<HTMLDivElement | null>(null);
  const previous = useRef(isOpen);
  const previousPeek = useRef(peek);

  useLayoutEffect(() => {
    const element = panelRef.current;

    if (!element) return;

    const toggled = previous.current !== isOpen;

    previous.current = isOpen;
    previousPeek.current = peek;

    // Open → full height
    if (isOpen) {
      if (toggled) {
        animateCollapsibleOpen(element);
      } else {
        setCollapsibleOpen(element);
      }

      return;
    }

    // Closed → fully closed
    if (toggled) {
      animateCollapsibleClose(element);
      return;
    }

    setCollapsibleClosed(element);
  }, [isOpen, peek]);

  const handleToggle = () => {
    const next = !isOpen;

    if (open === undefined) {
      setInternal(next);
    }

    onOpenChange?.(next);
  };

  return (
    <div
      data-state={state}
      data-align={align}
      className={cn(collapsibleStyles, className)}
      {...props}
    >
      {withHeading(
        headingLevel,
        collapsibleTriggerStyles({ align }),
        (triggerClass) => (
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
            loading={loading}
            forceState={forceState}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={handleToggle}
            className={triggerClass}
            rightIcon={
              <ChevronDown
                className={collapsibleIconStyles({ open: isOpen })}
              />
            }
          >
            {isOpen ? (triggerOpen ?? trigger) : trigger}
          </Button>
        ),
      )}

      <div
        ref={panelRef}
        id={panelId}
        data-state={state}
        data-peek={peek || undefined}
        inert={!isOpen && !peek}
        className={collapsiblePanelStyles}
      >
        <div
          className={collapsiblePanelInnerStyles({
            peek,
            faded: peek && !isOpen,
          })}
        >
          <div className={collapsibleContentStyles}>{children}</div>
        </div>
      </div>
    </div>
  );
}
