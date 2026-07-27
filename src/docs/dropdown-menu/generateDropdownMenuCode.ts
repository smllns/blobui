import type { DropdownMenuPlaygroundState } from './dropdownMenuConstants';

export function generateDropdownMenuCode({
  variant,
  size,
  itemVariant,
  itemSize,
  disabled,
  side,
}: DropdownMenuPlaygroundState) {
  const dropdownProps = [
    variant !== 'default' && `variant="${variant}"`,
    size !== 'md' && `size="${size}"`,
    side !== 'bottom' && `side="${side}"`,
  ].filter(Boolean);

  const itemProps = [
    itemVariant !== 'default' && `variant="${itemVariant}"`,
    itemSize !== 'md' && `size="${itemSize}"`,
  ].filter(Boolean);

  return `<DropdownMenu
  ${dropdownProps.join('\n  ')}
  trigger="Actions"
>
  <DropdownMenuItem${itemProps.length ? ` ${itemProps.join(' ')}` : ''}>
    Profile
  </DropdownMenuItem>

  <DropdownMenuItem${disabled ? ' disabled' : ''}>
    Settings
  </DropdownMenuItem>

  <DropdownMenuSeparator />

  <DropdownMenuItem variant="destructive">
    Delete account
  </DropdownMenuItem>
</DropdownMenu>`;
}
