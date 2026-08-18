import { Button } from '@/components/button/Button';
import { EMPTY_STATE_OPTIONS } from './emptyConstants';
import { EMPTY_COPY } from './empty.data';
import { Plus } from '@/ui/icons/Plus';
import { RefreshCw } from '@/ui/icons/RefreshCw';

export const ACTION_ICONS = {
  Plus,
  RefreshCw,
} as const;

export const specimens = EMPTY_STATE_OPTIONS.map((state) => {
  const copy = EMPTY_COPY[state];

  const Icon = copy.actionIcon ? ACTION_ICONS[copy.actionIcon] : undefined;

  return {
    state,
    title: copy.title,
    text: copy.text,
    action: (
      <Button
        variant={copy.actionVariant}
        leftIcon={Icon ? <Icon /> : undefined}
      >
        {copy.actionLabel}
      </Button>
    ),
  };
});
