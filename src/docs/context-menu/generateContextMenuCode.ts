import type { ContextMenuPlaygroundState } from './contextMenuConstants';

export function generateContextMenuCode(state: ContextMenuPlaygroundState) {
  const checkableRow = state.checkable
    ? `
  <ContextMenuCheckboxItem checked>
    Show grid
  </ContextMenuCheckboxItem>
`
    : '';

  return `<ContextMenu
  size="${state.size}"${state.checkable ? '\n  checkable' : ''}${
    state.disabled ? '\n  disabled' : ''
  }
  trigger={<div>Right-click me</div>}
>
  <ContextMenuLabel>
    Row
  </ContextMenuLabel>

  <ContextMenuItem>
    Rename
    <ContextMenuShortcut>F2</ContextMenuShortcut>
  </ContextMenuItem>
${checkableRow}
  <ContextMenuSub trigger="Move to">
    <ContextMenuItem>
      Archive
    </ContextMenuItem>
  </ContextMenuSub>

  <ContextMenuSeparator />

  <ContextMenuItem variant="destructive">
    Delete
  </ContextMenuItem>
</ContextMenu>`;
}
