export const selectProps = [
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the select',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls select size',
  },
  {
    name: 'width',
    type: "'auto' | 'sm' | 'md' | 'lg' | 'full'",
    default: 'md',
    description: 'Controls select width',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Shows error state styling',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables select interaction',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '-',
    description: 'Placeholder displayed when no value is selected',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Select items rendered inside the dropdown',
  },
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'Controlled selected value',
  },
  {
    name: 'defaultValue',
    type: 'string',
    default: '-',
    description: 'Initial uncontrolled selected value',
  },
  {
    name: 'onValueChange',
    type: '(value: string) => void',
    default: '-',
    description: 'Callback fired when selected value changes',
  },
];
export const selectItemProps = [
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'Unique value of the item',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Item label',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables item selection',
  },
];
