export const dropdownMenuProps = [
  {
    name: 'trigger',
    type: 'ReactNode',
    default: '-',
    description: 'Element used to open the dropdown menu',
  },
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the trigger',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls trigger size',
  },
  {
    name: 'side',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: 'bottom',
    description: 'Preferred side where the menu appears',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Dropdown menu items and separators',
  },
];
export const dropdownMenuItemProps = [
  {
    name: 'variant',
    type: "'default' | 'destructive'",
    default: 'default',
    description: 'Visual style of the menu item',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls menu item size',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables menu item interaction',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content displayed inside the menu item',
  },
  {
    name: 'onSelect',
    type: '() => void',
    default: '-',
    description: 'Callback fired when the item is selected',
  },
];
export const dropdownMenuSeparatorProps = [
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for the separator',
  },
];
