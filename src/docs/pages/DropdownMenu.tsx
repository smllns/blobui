import { DocsPage } from '../components/DocsPage';
import { DropdownMenu } from '../../components/dropdown-menu/DropdownMenu';
import { DropdownMenuItem } from '../../components/dropdown-menu/DropdownMenuItem';
import { DropdownMenuSeparator } from '../../components/dropdown-menu/DropdownMenuSeparator';
import { DropdownMenuPlayground } from '../components/playground/DropdownMenuPlayground';
import {
  dropdownMenuItemProps,
  dropdownMenuProps,
  dropdownMenuSeparatorProps,
} from '../../lib/dropdownMenuProps';

const MENU_ITEMS = (
  <>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant='destructive'>Delete account</DropdownMenuItem>
  </>
);

const VARIANTS = [
  { value: 'default', label: 'Default', side: 'bottom' },
  { value: 'filled', label: 'Filled', side: 'left' },
  { value: 'ghost', label: 'Ghost', side: 'right' },
  { value: 'outline', label: 'Outline', side: 'top' },
] as const;

export function DropdownMenuDocs() {
  return (
    <DocsPage
      header='Dropdown Menu'
      description='Displays a menu of actions or options triggered by a button.'
      preview={
        <>
          {VARIANTS.map(({ value, label, side }) => (
            <DropdownMenu
              key={value}
              variant={value}
              trigger={label}
              side={side}
            >
              {MENU_ITEMS}
            </DropdownMenu>
          ))}
        </>
      }
      playground={<DropdownMenuPlayground />}
      props={dropdownMenuProps}
      subElementProps={dropdownMenuItemProps}
      subElementHeader='Dropdown Menu Item'
      secondSubElementProps={dropdownMenuSeparatorProps}
      secondSubElementHeader='Dropdown Menu Separator'
    />
  );
}
