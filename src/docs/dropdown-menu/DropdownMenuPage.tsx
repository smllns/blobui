import { DocsPage } from '../components/DocsPage';
import { DropdownMenu } from '../../components/dropdown-menu/DropdownMenu';
import { DropdownMenuPlayground } from './DropdownMenuPlayground';
import { componentProps } from '../../lib/props';
import { MENU_ITEMS, VARIANTS } from './dropdownMenu.data';

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
      props={componentProps.dropdown.root}
      subElementProps={componentProps.dropdown.item}
      subElementHeader='Dropdown Menu Item'
      secondSubElementProps={componentProps.dropdown.item2}
      secondSubElementHeader='Dropdown Menu Separator'
    />
  );
}
