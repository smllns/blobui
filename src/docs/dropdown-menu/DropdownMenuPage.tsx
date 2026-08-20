import { DocsPage } from '../components/DocsPage';
import { DropdownMenu } from '@/components/dropdown-menu/DropdownMenu';
import { DropdownMenuPlayground } from './DropdownMenuPlayground';
import { DROPDOWN_MENU_STATES } from './dropdownMenuStates';
import { componentProps } from '@/lib/props';
import { MENU_ITEMS, VARIANTS } from './dropdownMenu.data';
import { getInstallation } from '../utils/getInstallation';

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
      states={DROPDOWN_MENU_STATES}
      playground={<DropdownMenuPlayground />}
      installation={getInstallation('dropdownMenu')}
      propSections={componentProps.dropdown}
    />
  );
}
