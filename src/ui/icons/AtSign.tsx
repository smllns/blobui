import { Icon, type IconProps } from '../Icon';

export function AtSign(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='4' />
      <path d='M16 8v6a2.5 2.5 0 0 0 5 0v-2a9 9 0 1 0-2.5 6.5' />
    </Icon>
  );
}
