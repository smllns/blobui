import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  emptyActionsStyles,
  emptyIconStyles,
  emptyStyles,
  emptyTextStyles,
  emptyTitleStyles,
} from './empty.styles';
import type { EmptyProps, EmptyState } from './empty.types';

import { Inbox } from '@/ui/icons/Inbox';
import { Search } from '@/ui/icons/Search';
import { AlertTriangle } from '@/ui/icons/AlertTriangle';
import { CloseCircle } from '@/ui/icons/CloseCircle';

const defaultEmptyIcons: Record<EmptyState, ReactNode> = {
  'no-data': <Inbox />,
  'no-results': <Search />,
  insufficient: <AlertTriangle />,
  error: <CloseCircle />,
};

export const Empty = forwardRef<HTMLDivElement, EmptyProps>(
  (
    {
      state,
      size,
      variant,
      title,
      icon,
      actions,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const emptyState = state ?? 'no-data';
    const emptyIcon = icon !== undefined ? icon : defaultEmptyIcons[emptyState];

    return (
      <div
        ref={ref}
        data-state={emptyState}
        className={cn(emptyStyles({ state, size, variant }), className)}
        {...props}
      >
        {emptyIcon && <span className={emptyIconStyles}>{emptyIcon}</span>}

        <p className={emptyTitleStyles}>{title}</p>

        {children && <p className={emptyTextStyles}>{children}</p>}

        {actions && <div className={emptyActionsStyles}>{actions}</div>}
      </div>
    );
  },
);
