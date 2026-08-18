import { DropdownMenuItem } from '@/components/dropdown-menu/DropdownMenuItem';
import { DropdownMenuSeparator } from '@/components/dropdown-menu/DropdownMenuSeparator';

export const MENU_ITEMS = (
  <>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant='destructive'>Delete account</DropdownMenuItem>
  </>
);

export const VARIANTS = [
  { value: 'default', label: 'Default', side: 'bottom' },
  { value: 'filled', label: 'Filled', side: 'left' },
  { value: 'ghost', label: 'Ghost', side: 'right' },
  { value: 'outline', label: 'Outline', side: 'top' },
] as const;
