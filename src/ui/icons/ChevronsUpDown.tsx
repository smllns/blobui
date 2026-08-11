import { Icon, type IconProps } from '../Icon';

export function ChevronsUpDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 9 12 5l4 4' />
      <path d='M8 15 12 19l4-4' />
    </Icon>
  );
}
