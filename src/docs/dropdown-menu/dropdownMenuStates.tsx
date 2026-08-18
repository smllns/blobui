import type { ReactNode } from 'react';
import { DropdownMenu } from '@/components/dropdown-menu/DropdownMenu';
import { DropdownMenuItem } from '@/components/dropdown-menu/DropdownMenuItem';
import { MENU_ITEMS } from './dropdownMenu.data';
import type { StateSpecimen } from '../components/docsPage.types';

function panel(children: ReactNode, { tall }: { tall?: boolean } = {}) {
  return (
    <div className={tall ? 'min-h-60 w-full pl-10' : 'min-h-40 w-full pl-10'}>
      <DropdownMenu
        open
        portal={false}
        positioning='static'
        trigger={tall ? 'Actions' : 'Rows'}
      >
        {children}
      </DropdownMenu>
    </div>
  );
}

export const DROPDOWN_MENU_STATES: StateSpecimen[] = [
  {
    name: 'closed',
    node: <DropdownMenu trigger='Actions'>{MENU_ITEMS}</DropdownMenu>,
    note: 'closed state — only the trigger is visible and the menu content is hidden',
  },
  {
    name: 'trigger · hover',
    node: (
      <DropdownMenu trigger='Actions' forceState='hover'>
        {MENU_ITEMS}
      </DropdownMenu>
    ),
    note: 'hover state of the trigger button, using the same interaction feedback as the selected button variant',
  },
  {
    name: 'trigger · focus',
    node: (
      <DropdownMenu trigger='Actions' forceState='focus'>
        {MENU_ITEMS}
      </DropdownMenu>
    ),
    note: 'focused trigger — shows a visible focus ring for keyboard navigation',
  },
  {
    name: 'trigger · disabled',
    node: (
      <DropdownMenu trigger='Actions' disabled>
        {MENU_ITEMS}
      </DropdownMenu>
    ),
    note: 'disabled trigger — cannot be interacted with and cannot open the menu',
  },
  {
    name: 'row · default',
    node: panel(
      <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </>,
    ),
    note: 'default menu item — ready to be selected',
  },
  {
    name: 'row · hovered',
    node: panel(
      <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem highlighted>Settings</DropdownMenuItem>
      </>,
    ),
    note: 'highlighted item — indicates the item currently under the pointer or selected by keyboard navigation',
  },
  {
    name: 'row · disabled',
    node: panel(
      <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem disabled>Settings</DropdownMenuItem>
      </>,
    ),
    note: 'disabled item — remains visible but cannot be selected',
  },
  {
    name: 'row · danger',
    node: panel(
      <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem variant='destructive' highlighted>
          Delete account
        </DropdownMenuItem>
      </>,
    ),
    note: 'destructive item — uses distinct styling to signal an action with potentially irreversible consequences',
  },
];
