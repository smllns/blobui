import { Icon, type IconProps } from '../Icon';

export function Key(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='8' cy='16' r='4' />
      <path d='M11 13 20 4' />
      <path d='M17.5 6.5 20 9' />
      <path d='M15 9 17.5 11.5' />
    </Icon>
  );
}
