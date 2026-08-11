import { Icon, type IconProps } from '../Icon';

export function BadgeCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 3h6l6 6v6l-6 6H9l-6-6V9Z' />
      <path d='M8.5 11.5 11 14 15.5 9.5' />
    </Icon>
  );
}
