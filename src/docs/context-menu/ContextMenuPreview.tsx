import { useState } from 'react';

import {
  ContextMenu,
  ContextMenuLabel,
  ContextMenuShortcut,
} from '@/components/context-menu/ContextMenu';
import {
  ContextMenuCheckboxItem,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from '@/components/context-menu/ContextMenuItem';
import { ContextMenuSeparator } from '@/components/context-menu/ContextMenuSeparator';
import { ContextMenuSub } from '@/components/context-menu/ContextMenuSub';
import { Copy } from '@/ui/icons/Copy';
import { Edit } from '@/ui/icons/Edit';
import { Trash } from '@/ui/icons/Trash';

const region =
  'grid place-items-center h-32 w-64 rounded-xl border border-dashed border-border text-body-sm text-fg-tertiary select-none';

const ContextMenuPreview = () => {
  const [grid, setGrid] = useState(true);
  const [density, setDensity] = useState('comfortable');

  return (
    <>
      <ContextMenu
        trigger={
          <div className={region}>Right-click, or press Shift + F10</div>
        }
      >
        <ContextMenuLabel>Row</ContextMenuLabel>

        <ContextMenuItem>
          <Edit size='sm' />
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem>
          <Copy size='sm' />
          Duplicate
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSub trigger='Move to'>
          <ContextMenuItem>Archive</ContextMenuItem>
          <ContextMenuItem>Drafts</ContextMenuItem>
          <ContextMenuItem disabled>Shared with me</ContextMenuItem>
        </ContextMenuSub>

        <ContextMenuSeparator />

        <ContextMenuItem variant='destructive'>
          <Trash size='sm' />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenu>

      <ContextMenu
        checkable
        trigger={<div className={region}>Right-click for view options</div>}
      >
        <ContextMenuLabel>View</ContextMenuLabel>

        <ContextMenuCheckboxItem checked={grid} onCheckedChange={setGrid}>
          Show grid
        </ContextMenuCheckboxItem>

        <ContextMenuSeparator />

        <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
          <ContextMenuRadioItem value='comfortable'>
            Comfortable
          </ContextMenuRadioItem>

          <ContextMenuRadioItem value='compact'>Compact</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenu>
    </>
  );
};

export default ContextMenuPreview;
