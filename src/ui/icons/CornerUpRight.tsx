import { Icon, type IconProps } from '../Icon';

export function CornerUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7 18.5v-8a2 2 0 0 1 2-2h8' />
      <path d='M14 5.5 17 8.5l-3 3' />
    </Icon>
  );
}
