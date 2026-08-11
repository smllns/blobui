import { Icon, type IconProps } from '../Icon';

export function Save(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z' />
      <path d='M8 4v5h8V4' />
      <path d='M8 20v-5h8v5' />
    </Icon>
  );
}
